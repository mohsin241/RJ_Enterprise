export function generateSitemap(): string {
  const baseUrl = 'https://www.rjenterpriseinfo.com';
  
  // Define all site URLs
  const urls = [
    '',
    '/products/tmt-bars',
    '/products/mild-steel-plates',
    '/products/hot-rolled-coils',
    '/products/steel-beams',
    '/products/chequered-plates',
    '/products/round-bars',
    '/privacy-policy',
    '/terms-of-service'
  ];

  // Generate XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add each URL with today's date as lastmod
  const today = new Date().toISOString().split('T')[0];
  
  urls.forEach(url => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${url}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    
    // Set priority based on URL depth
    const priority = url === '' ? '1.0' : url.split('/').length === 2 ? '0.8' : '0.6';
    xml += `    <priority>${priority}</priority>\n`;
    
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  return xml;
}
