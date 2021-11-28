import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "graphql/queries";
import React from "react";
import BrandLogo from "../../components/BrandLogo/BrandLogo";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import ProductList from "../../components/ProductList/ProductList";
import BottomBanner from "../../components/BottomBanner/BottomBanner";
import Footer from "../../components/Footer/Footer";

export default function LandingPage() {
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  return (
    <div>
      <HeroBanner></HeroBanner>
      <BrandLogo></BrandLogo>
      <ProductList data={data}></ProductList>
      <BottomBanner></BottomBanner>
      <Footer></Footer>
    </div>
  );
}
