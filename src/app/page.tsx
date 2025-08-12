import Image from "next/image";
import Footer from "./components/footer";
import HeroSection from "./components/hero";
import Navbar from "./components/nav";
import Header from "./components/header";
import UprFooter from "./components/upperfooter";
import SupplierRequestForm from "./components/supplier";
import DealsOffers from "./components/dealsOffer";
import ElectronicsShowcase from "./components/ElectronicsShowcase";
import HomeOutdoorShowcase from "./components/homeOutdoorShowcase";
import RecommendationsPage from "./components/Re";

export default function Home() {
  return (
    <div>
      
      <HeroSection/>
      
      
    <DealsOffers />
    <HomeOutdoorShowcase />
    <ElectronicsShowcase />
    <SupplierRequestForm/>
    <RecommendationsPage/>
    

    </div>
    
  );
}
