import PriceCard from "../components/PriceCard";
import Wrapper from "../components/Wrapper";
import Banner from "./_components/Banner";
import Categories from "./_components/Categories";
import ContactForm from "./_components/ContactForm";
import FAQ from "./_components/FAQ";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
// import MaintenanceDialog from "./_components/MaintenanceDialog";
import { product } from "./testall/_data/data";



export default function Home() {
  return (
    <>
      <Wrapper >
        <Header />
        <Banner />
      </Wrapper>
      <Categories />
      <Wrapper className="h-fit  bg-blue-400 py-2 mx-4 px-2 pt-0 mt-2">
        <section className=" ">
          <h1 className="p-2">Featured Products</h1>

          <PriceCard product={product} />
        </section>
      </Wrapper>
      <FAQ />
      <ContactForm />
      <Footer />
      {/* {<MaintenanceDialog />} */}
    </>
  );
}
