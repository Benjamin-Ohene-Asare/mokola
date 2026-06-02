import React from 'react';
import './Featured.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Featured = () => {

  const shops = [
    {
      name: "AbSHOP",
      desc: "Hey there, I am selling fashion stuffs on Shoppady. Subscribe for weekly updates...",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      color: "card1"
    },
    {
      name: "Mokola Fashion",
      desc: "Trendy clothes and shoes for all occasions. Affordable prices always.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      color: "card2"
    },
    {
      name: "Mokola Fashion",
      desc: "Trendy clothes and shoes for all occasions. Affordable prices always.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      color: "card2"
    },
    {
      name: "Mokola Fashion",
      desc: "Trendy clothes and shoes for all occasions. Affordable prices always.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      color: "card2"
    },
    {
      name: "Mokola Fashion",
      desc: "Trendy clothes and shoes for all occasions. Affordable prices always.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      color: "card2"
    },
    {
      name: "Mokola Fashion",
      desc: "Trendy clothes and shoes for all occasions. Affordable prices always.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      color: "card2"
    },
    {
      name: "Tech Hub GH",
      desc: "Phones, laptops and accessories at the best prices in Ghana.",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      color: "card3"
    }
  ];

  return (
    <div className="featured padding">
      <div className="heading">
        <h2>Featured Shops</h2>
      </div>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {shops.map((shop, index) => (
          <SwiperSlide key={index}>
            <div className={`shop-card ${shop.color}`}>

              <div className="shop-top">
                <img src={shop.image} alt={shop.name} />
                <h3>{shop.name} <span>✔</span></h3>
              </div>

              <p>{shop.desc}</p>

              <button className="subscribe-btn">
                🔔 Subscribe
              </button>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Featured;