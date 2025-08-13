"use client"
import HeroSection from "./components/hero";
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
