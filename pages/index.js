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
    // Check for manual override via query parameter (for testing)
    if (query.region === 'balkans') {
      return {
        props: {
          location: { country: 'XK', countryName: 'Kosovo', region: 'Prishtina', city: 'Prishtina', isBalkans: true },
          isBalkans: true
        }
      };
    }
    
    // Get client IP
    const clientIP = getClientIP(req);
    console.log('Client IP detected:', clientIP);
    
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


