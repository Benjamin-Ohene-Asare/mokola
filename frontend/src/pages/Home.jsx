import React from 'react';
import Banner from '../components/bannerHero/Banner';
import Featured from '../components/featuredShop/Featured';
import Category from '../components/category/Category';
import Sneakers from '../components/category/sneakers/Sneakers';
import Footer from '../components/footer/Footer';
const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Featured />
      <Category />
      <Sneakers />
      <Footer />
    </div>
  );
};

export default Home;