
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import StylesWrapper from "@/components/StylesWrapper";
import Text from "@/components/Text";
import products from "@/utils/products";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <MobileNav/>
      <AboutUs />
      <StylesWrapper products={products} />

      <br />
      <Text/>
      <Footer/>
    </>
  );
}
