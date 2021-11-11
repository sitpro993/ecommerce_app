import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);
import "swiper/css/navigation";

export default function CollectionsSlider() {
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imgs = [
    {
      file: "/images/beecase_6ae43e6632cb4ce18d0972c782f7edd5_large.png",
      link: "/collections/op-lung",
    },
    {
      file: "/images/beetee_5a2df0b4d92e4439ab0e77598ec5ed57_large.png",
      link: "/collections/ao-thun",
    },
    {
      file: "/images/beebag_31d7440d436d4e2ca11f85e34bb9a01e_large.png",
      link: "/collections/beebag",
    },
    { file: "/images/beecarry_large.png", link: "/images/beecarry" },
  ];

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={windowWidth > 768 ? 4 : 3}
      loop={windowWidth > 768 ? false : true}
      navigation={windowWidth > 768 ? false : true}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {imgs.map((img, index) => (
        <SwiperSlide key={index}>
          <Link href={img.link}>
            <a>
              <Image
                width={300}
                height={300}
                layout="intrinsic"
                src={img.file}
                alt="Túi Totebag Xuongrong"
              ></Image>
            </a>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
