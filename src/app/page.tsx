import CardSection from "@/Component/Dashboard/Section/CardSection/CardSection";
import Faq from "@/Component/Dashboard/Section/Faq/Faq";
import Hero from "@/Component/Dashboard/Section/Hero/page";
import History from "@/Component/Dashboard/Section/History/History";
import Opinion from "@/Component/Dashboard/Section/Opinion/Opinion";
import PopularItems from "@/Component/Dashboard/Section/PopularItems/PopularItems";
import Why from "@/Component/Dashboard/Section/Why/Why";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <CardSection />
        <History />
        <PopularItems />
        <Why />
        <Opinion />
        <Faq />
      </div>
    </main>
  );
}
