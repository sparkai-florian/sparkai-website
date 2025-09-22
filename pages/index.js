import Layout from '../components/layout/Layout';
import GlobalHomePage from '../components/home/GlobalHomePage';
import BalkansHomePage from '../components/home/BalkansHomePage';
import { getLocationFromIP, getClientIP } from '../lib/geolocation';

export default function Home({ location, isBalkans }) {
  return (
    <Layout>
      {isBalkans ? <BalkansHomePage /> : <GlobalHomePage />}
    </Layout>
  );
}

export async function getServerSideProps({ req, query }) {
  try {
    // Check domain-based routing
    const host = req.headers.host || '';
    const isRksDomain = host.includes('sparkai-rks.com') || host.includes('rks');
    
    // Check for manual override via query parameter
    if (query.region === 'balkans' || isRksDomain) {
      return {
        props: {
          location: { country: 'XK', countryName: 'Kosovo', region: 'Prishtina', city: 'Prishtina', isBalkans: true },
          isBalkans: true
        }
      };
    }
    
    // Check for global override
    if (query.region === 'global') {
      return {
        props: {
          location: { country: 'US', countryName: 'United States', region: 'Global', city: 'Global', isBalkans: false },
          isBalkans: false
        }
      };
    }
    
    // Get client IP for geolocation
    const clientIP = getClientIP(req);
    console.log('Client IP detected:', clientIP);
    console.log('Host detected:', host);
    
    // Get location data
    const location = await getLocationFromIP(clientIP);
    
    return {
      props: {
        location,
        isBalkans: location.isBalkans
      }
    };
  } catch (error) {
    console.error('Error in getServerSideProps:', error);
    // Fallback to global version if there's an error
    return {
      props: {
        location: { country: 'US', countryName: 'United States', isBalkans: false },
        isBalkans: false
      }
    };
  }
}


