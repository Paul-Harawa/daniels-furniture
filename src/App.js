import Collection from "./components/collection";
import ContactUs from "./components/contactus";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Payments from "./components/payments";
import SaleSection from "./components/sale";
import Team from "./components/team";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SaleSection />
      <Collection />
      <Payments />
      <ContactUs />
      <Team />
      <Footer />
    </>
  )
}