import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CollectionsSlider() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
    <section className="home-collection paddingTop30">
      <div className="wrapper">
        <div className="home-section-header">
          <h2>Bộ sưu tập</h2>
        </div>
        <div className="home-collection-thumbnail">
          <Container>
            <Slider {...settings}>
              {imgs.map((img, index) => (
                <Link key={index} href={img.link}>
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
              ))}
            </Slider>
          </Container>
        </div>
      </div>
    </section>
  );
}
