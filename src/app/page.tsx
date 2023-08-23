import Banner from "@/Components/Banner";
import Footer from "@/Components/Footer";

import { Header } from "@/Components/Header";
import HomeFirstSection from "@/Components/HomeFirstSection";
import HomeSecondSection from "@/Components/HomeSecondSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Banner></Banner>
      <HomeFirstSection></HomeFirstSection>
      <HomeSecondSection></HomeSecondSection>
      <Footer/>
    </div>
  )
}
