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
    
    console.log('Detecting location for IP:', ip);
    
    // Try ipapi.co first
    try {
      const response = await fetch(`https://ipapi.co/${ip}/json/`);
      const data = await response.json();
      
      console.log('=== IPAPI.CO FULL RESPONSE ===');
      console.log('Raw response:', JSON.stringify(data, null, 2));
      console.log('Country code (country_code):', data.country_code);
      console.log('Country name (country_name):', data.country_name);
      console.log('Region:', data.region);
      console.log('City:', data.city);
      console.log('All available fields:', Object.keys(data));
      console.log('================================');
      
      // Additional check for Kosovo by city name (Prishtina/Pristina)
      const isKosovoByCity = data.city && (
        data.city.toLowerCase().includes('prishtina') || 
        data.city.toLowerCase().includes('pristina')
      );
      
      const isBalkansByCountry = isBalkansRegion(data.country_code);
      
      const result = {
        country: data.country_code,
        countryName: data.country_name,
        region: data.region,
        city: data.city,
        isBalkans: isBalkansByCountry || isKosovoByCity
      };
      
      console.log('Country code being checked:', data.country_code);
      console.log('Is Balkans by country:', isBalkansByCountry);
      console.log('Is Kosovo by city:', isKosovoByCity);
      console.log('Final result from ipapi.co:', result);
      return result;
    } catch (ipapiError) {
      console.log('ipapi.co failed, trying ipinfo.io:', ipapiError.message);
      
      // Fallback to ipinfo.io
      try {
        const response = await fetch(`https://ipinfo.io/${ip}/json`);
        const data = await response.json();
        
        console.log('=== IPINFO.IO FULL RESPONSE ===');
        console.log('Raw response:', JSON.stringify(data, null, 2));
        console.log('Country code (country):', data.country);
        console.log('Country name:', data.country);
        console.log('Region:', data.region);
        console.log('City:', data.city);
        console.log('All available fields:', Object.keys(data));
        console.log('================================');
        
        // Additional check for Kosovo by city name
        const isKosovoByCity = data.city && (
          data.city.toLowerCase().includes('prishtina') || 
          data.city.toLowerCase().includes('pristina')
        );
        
        const isBalkansByCountry = isBalkansRegion(data.country);
        
        const result = {
          country: data.country,
          countryName: data.country,
          region: data.region,
          city: data.city,
          isBalkans: isBalkansByCountry || isKosovoByCity
        };
        
        console.log('Country code being checked (ipinfo):', data.country);
        console.log('Is Balkans by country (ipinfo):', isBalkansByCountry);
        console.log('Is Kosovo by city (ipinfo):', isKosovoByCity);
        console.log('Final result from ipinfo.io:', result);
        return result;
      } catch (ipinfoError) {
        console.error('Both geolocation services failed:', ipinfoError.message);
        throw new Error('All geolocation services failed');
      }
    }
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
    'RS', // Serbia (includes Kosovo as detected by ipapi.co)
    'SI', // Slovenia
    'XK', // Kosovo
    'KOSOVO', // Alternative Kosovo code
    'KOS' // Another alternative
  ];
  
  return balkansCountries.includes(countryCode?.toUpperCase());
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
