// lib/geolocation.js

export async function getLocationFromIP(ip) {
  try {
    // Check if running on localhost - show Balkans version for testing
    if (ip === '127.0.0.1' || ip === '::1' || ip === '::ffff:127.0.0.1') {
      return {
        country: 'RS',
        countryName: 'Serbia',
        region: 'Localhost',
        city: 'Local Development',
        isBalkans: true
      };
    }
    
    // Using ipapi.co (free tier: 1000 requests/day)
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await response.json();
    
    return {
      country: data.country_code,
      countryName: data.country_name,
      region: data.region,
      city: data.city,
      isBalkans: isBalkansRegion(data.country_code)
    };
  } catch (error) {
    console.error('Error fetching location:', error);
    // Fallback to global version if geolocation fails
    return {
      country: 'US',
      countryName: 'United States',
      region: 'Unknown',
      city: 'Unknown',
      isBalkans: false
    };
  }
}

function isBalkansRegion(countryCode) {
  const balkansCountries = [
    'AL', // Albania
    'BA', // Bosnia and Herzegovina
    'BG', // Bulgaria
    'HR', // Croatia
    'ME', // Montenegro
    'MK', // North Macedonia
    'RS', // Serbia
    'SI', // Slovenia
    'XK'  // Kosovo
  ];
  
  return balkansCountries.includes(countryCode);
}

export function getClientIP(req) {
  // Get IP from various headers (for different hosting providers)
  const forwarded = req.headers['x-forwarded-for'];
  const realIP = req.headers['x-real-ip'];
  const cfConnectingIP = req.headers['cf-connecting-ip']; // Cloudflare
  
  if (cfConnectingIP) return cfConnectingIP;
  if (realIP) return realIP;
  if (forwarded) return forwarded.split(',')[0].trim();
  
  return req.connection.remoteAddress || req.socket.remoteAddress || '127.0.0.1';
}
