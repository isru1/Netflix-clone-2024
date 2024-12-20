import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import Rowlist from "../../components/Row/Rowlist/Rowlist";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Rowlist />
      <Footer />
    </div>
  );
};

export default Home;
