const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

function extractText(html: string, tag: string): string[] {
  const regex = new RegExp(`<${tag}[^>]*>(.*?)</${tag}>`, 'gis');
  const matches: string[] = [];
  let m;
  while ((m = regex.exec(html)) !== null) {
    matches.push(m[1].replace(/<[^>]*>/g, '').trim());
  }
  return matches.filter(Boolean);
}

function extractLinks(html: string, baseUrl: string): { text: string; href: string }[] {
  const regex = /<a\s+[^>]*href=["']([^"'#][^"']*)["'][^>]*>(.*?)<\/a>/gis;
  const links: { text: string; href: string }[] = [];
  let m;
  while ((m = regex.exec(html)) !== null) {
    const href = m[1].trim();
    const text = m[2].replace(/<[^>]*>/g, '').trim();
    if (!text || text.length < 2) continue;
    if (href.startsWith('javascript:') || href.startsWith('mailto:') || href.startsWith('tel:')) continue;
    
    let fullUrl: string;
    try {
      fullUrl = new URL(href, baseUrl).toString();
    } catch {
      continue;
    }
    
    // Deduplicate
    if (!links.find(l => l.href === fullUrl)) {
      links.push({ text, href: fullUrl });
    }
  }
  return links;
}

function extractMetaDescription(html: string): string {
  const match = html.match(/<meta\s+[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i)
    || html.match(/<meta\s+[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
  return match ? match[1].trim() : '';
}

function extractTitle(html: string): string {
  const match = html.match(/<title[^>]*>(.*?)<\/title>/is);
  return match ? match[1].replace(/<[^>]*>/g, '').trim() : '';
}

function categorizeLinks(links: { text: string; href: string }[], baseUrl: string) {
  const base = new URL(baseUrl);
  const internal = links.filter(l => {
    try { return new URL(l.href).hostname === base.hostname; } catch { return false; }
  });

  const docs: typeof links = [];
  const features: typeof links = [];
  const optional: typeof links = [];

  const docPatterns = /\b(doc|guide|tutorial|start|setup|api|reference|faq|help|support|wiki)\b/i;
  const featurePatterns = /\b(feature|product|pricing|dashboard|tool|service|solution|platform|integration)\b/i;

  for (const link of internal) {
    const combined = `${link.text} ${link.href}`;
    if (docPatterns.test(combined)) {
      docs.push(link);
    } else if (featurePatterns.test(combined)) {
      features.push(link);
    } else {
      optional.push(link);
    }
  }

  return { docs: docs.slice(0, 10), features: features.slice(0, 10), optional: optional.slice(0, 10) };
}

function buildLlmsTxt(title: string, description: string, categorized: ReturnType<typeof categorizeLinks>, isFull: boolean): string {
  let output = `# ${title}\n`;
  if (description) {
    output += `\n> ${description}\n`;
  }

  const formatSection = (name: string, links: { text: string; href: string }[]) => {
    if (links.length === 0) return '';
    let section = `\n## ${name}\n`;
    for (const link of links) {
      section += `- [${link.text}](${link.href})${isFull ? ': ' + link.text : ''}\n`;
    }
    return section;
  };

  output += formatSection('Docs', categorized.docs);
  output += formatSection('Features', categorized.features);
  
  if (isFull || categorized.docs.length === 0 && categorized.features.length === 0) {
    output += formatSection('Links', categorized.optional);
  } else if (categorized.optional.length > 0) {
    output += formatSection('Optional', categorized.optional.slice(0, 5));
  }

  return output.trim();
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { url, isFull } = await req.json();

    if (!url) {
      return new Response(
        JSON.stringify({ success: false, error: 'URL is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    let formattedUrl = url.trim();
    if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
      formattedUrl = `https://${formattedUrl}`;
    }

    console.log('Fetching URL:', formattedUrl);

    const response = await fetch(formattedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; LLMsTxtGenerator/1.0)',
        'Accept': 'text/html,application/xhtml+xml',
      },
      redirect: 'follow',
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({ success: false, error: `Failed to fetch: HTTP ${response.status}` }),
        { status: 422, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const html = await response.text();
    const title = extractTitle(html) || new URL(formattedUrl).hostname;
    const description = extractMetaDescription(html);
    const links = extractLinks(html, formattedUrl);
    const categorized = categorizeLinks(links, formattedUrl);

    const content = buildLlmsTxt(title, description, categorized, isFull ?? false);

    console.log('Generated llms.txt successfully');
    return new Response(
      JSON.stringify({ success: true, content }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error generating llms.txt:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to generate';
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
