import CardSection from "@/Component/Dashboard/Section/CardSection/CardSection";
import Hero from "@/Component/Dashboard/Section/Hero/page";
import History from "@/Component/Dashboard/Section/History/History";
import PopularItems from "@/Component/Dashboard/Section/PopularItems/PopularItems";
import CardItem from "@/Component/global/CardItem/CardItem";
import Price from "@/Component/global/Price/Price";
import Title from "@/Component/global/Title/Title";
import NavBar from "@/Component/Layout/NavBar/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <CardSection />
      <PopularItems />
      <History />
    </main>
  );
}
