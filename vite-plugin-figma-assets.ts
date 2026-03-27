import type { Plugin } from 'vite';

/**
 * Vite plugin to handle figma:asset imports
 * In Figma Make environment, these resolve to actual assets
 * For local development, we provide placeholder SVG data URIs
 */
export function figmaAssetsPlugin(): Plugin {
  // Map of known asset hashes to their types
  const assetMap: Record<string, string> = {
    // NetGuardian AI Logo
    '2a35603e889e5ab74dc12b9797efb4ba35986a8b.png': createPlaceholderLogo(),
    // NC4 Logo
    '63fc5cb358795522eb03a21b2b98de3ecdbcf7bb.png': createNC4Logo(),
  };

  return {
    name: 'figma-assets',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        return id;
      }
    },
    load(id: string) {
      if (id.startsWith('figma:asset/')) {
        const assetPath = id.replace('figma:asset/', '');
        const placeholder = assetMap[assetPath] || createGenericPlaceholder();
        return `export default "${placeholder}"`;
      }
    },
  };
}

/**
 * Create a placeholder logo for NetGuardian AI
 * This is a data URI of an SVG
 */
function createPlaceholderLogo(): string {
  const svg = `
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#00d4ff;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0066ff;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Shield Background -->
      <path d="M100 20 L180 60 L180 120 Q180 160 100 180 Q20 160 20 120 L20 60 Z" 
            fill="url(#grad1)" stroke="#00ffff" stroke-width="3"/>
      
      <!-- Panther Head Silhouette -->
      <ellipse cx="100" cy="90" rx="30" ry="35" fill="#0a192f" opacity="0.8"/>
      <circle cx="90" cy="85" r="5" fill="#00ffff"/>
      <circle cx="110" cy="85" r="5" fill="#00ffff"/>
      
      <!-- AI Circuit Brain -->
      <path d="M 70 110 Q 70 130 100 130 Q 130 130 130 110" 
            stroke="#00ffff" stroke-width="2" fill="none"/>
      <circle cx="80" cy="115" r="3" fill="#00ffff"/>
      <circle cx="100" cy="120" r="3" fill="#00ffff"/>
      <circle cx="120" cy="115" r="3" fill="#00ffff"/>
      
      <!-- Kenya Flag Colors Stripes -->
      <rect x="20" y="160" width="160" height="4" fill="#000000"/>
      <rect x="20" y="165" width="160" height="4" fill="#BB0000"/>
      <rect x="20" y="170" width="160" height="4" fill="#006600"/>
      
      <!-- Text -->
      <text x="100" y="195" font-family="Arial, sans-serif" font-size="12" 
            fill="#00ffff" text-anchor="middle" font-weight="bold">NetGuardian AI</text>
    </svg>
  `.trim();
  
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

/**
 * Create a placeholder for NC4 logo
 */
function createNC4Logo(): string {
  const svg = `
    <svg width="300" height="100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ncGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#BB0000;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#000000;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#006600;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <rect width="300" height="100" fill="#0a192f" rx="8"/>
      <rect x="2" y="2" width="296" height="96" fill="none" 
            stroke="url(#ncGrad)" stroke-width="2" rx="6"/>
      
      <!-- Shield Icon -->
      <path d="M 30 30 L 50 40 L 50 65 Q 50 75 30 80 Q 10 75 10 65 L 10 40 Z" 
            fill="#00d4ff" opacity="0.6"/>
      
      <!-- NC4 Text -->
      <text x="70" y="45" font-family="Arial, sans-serif" font-size="24" 
            fill="#00ffff" font-weight="bold">NC4</text>
      <text x="70" y="65" font-family="Arial, sans-serif" font-size="10" 
            fill="#ffffff" opacity="0.8">National Computer &amp;</text>
      <text x="70" y="78" font-family="Arial, sans-serif" font-size="10" 
            fill="#ffffff" opacity="0.8">Cybercrime Coordination Committee</text>
      
      <!-- Kenya Flag -->
      <rect x="260" y="30" width="30" height="6" fill="#000000"/>
      <rect x="260" y="37" width="30" height="6" fill="#BB0000"/>
      <rect x="260" y="44" width="30" height="6" fill="#006600"/>
    </svg>
  `.trim();
  
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

/**
 * Create a generic placeholder for unknown assets
 */
function createGenericPlaceholder(): string {
  const svg = `
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#1a1a2e"/>
      <text x="50" y="50" font-family="Arial" font-size="12" 
            fill="#00d4ff" text-anchor="middle" dominant-baseline="middle">Asset</text>
    </svg>
  `.trim();
  
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}
