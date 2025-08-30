"use client";

import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import SecondBanner from "../components/SecondBanner/SecondBanner";
import ThirdBanner from "../components/ThirdBanner/ThirdBanner";
import SaleCards from "../components/SaleCards/SaleCards";
import SalesCarousel from "../components/SalesCarousel/SalesCarousel";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <SecondBanner />
      <ThirdBanner />
      <SaleCards />
      <SalesCarousel />
      <Footer/>
    </>
  );
}
