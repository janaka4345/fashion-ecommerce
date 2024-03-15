import PriceCard from "@/components/PriceCard";
import Banner from "./_components/Banner";
import Categories from "./_components/Categories";
import Header from "./_components/Header";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Wrapper >
        <Header />
        <Banner />
        <Categories />
      </Wrapper>
      <Wrapper className="my-5 max-h-[80svh] min-h-[60svh] bg-blue-400">
        <section>
          <h1>Featured Products</h1>
          <hr />
          <PriceCard />
        </section>
      </Wrapper>
      <Link href="/testAll/priceCard">test</Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nemo
        explicabo. Ullam molestias, similique, dolores obcaecati maxime saepe
        sint eos suscipit voluptate accusamus nesciunt incidunt. Quaerat
        accusamus commodi et sapiente! Pariatur, eos. Fugiat illum atque fuga,
        corrupti soluta impedit ducimus, neque autem veniam illo tempore vero
        quae? Laborum numquam, quis maxime praesentium quibusdam fuga at
        reiciendis mollitia fugiat repudiandae iste. Debitis dolore mollitia
        minima corporis ex vitae saepe distinctio sit maiores officia molestias
        incidunt,
      </p>
    </>
  );
}
