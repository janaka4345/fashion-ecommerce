import PriceCard from "@/components/PriceCard";
import Banner from "./_components/Banner";
import Categories from "./_components/Categories";
import Header from "./_components/Header";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import Footer from "./_components/Footer";
import ContactForm from "./_components/ContactForm";
import FAQ from "./_components/FAQ";

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

          <PriceCard />
        </section>
      </Wrapper>
      <FAQ />
      <ContactForm />
      <Footer />

      <Link href="/testAll/priceCard">test</Link>
      <br />
      <Link href="/testAll/miniPriceCard">price card</Link>
      <br />
      <Link href="/testAll/accordianfaq">accordian</Link>
      <br />

    </>
  );
}
