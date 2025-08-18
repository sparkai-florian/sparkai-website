import Layout from "../components/layout/Layout";
import BookingCTA from '../components/contact/BookingCTA';
import ContactForm from '../components/contact/ContactForm';
import ContactHero from '../components/contact/ContactHero';
import DirectInfo from '../components/contact/DirectInfo';
import MapSection from '../components/contact/MapSection';
import SocialLinks from '../components/contact/SocialLinks';
import SupportHours from '../components/contact/SupportHours';


export default function ContactPage() {
  return (
    <Layout>
      <ContactHero />
      <ContactForm />
      <DirectInfo />
      <BookingCTA />
      <SocialLinks />
      <SupportHours />
      <MapSection />
    </Layout>
  );
}
