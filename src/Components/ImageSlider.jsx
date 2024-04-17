import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const ImageSlider = () => {
  const images = [
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Unrec/TallHero_3000X1200_Unrec._CB593464763_.jpg",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/OHL/May/DesktopHero_3000x1200_1_2x._CB588659988_.jpg",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/UNREC/UNrec_3000._CB591865002_.jpg",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/ATFGW/UNREC_FDFO_PC_17_May._CB588660375_.jpg",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/2023/GateWay/MAY/Slide10/3000x1200_1._CB588656146_.jpg",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/PC_Hero_2x-toys._CB591544420_.jpg",
    },
  ];

  return (
    <>
      <SimpleImageSlider
        width={1260}
        height={340}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
    </>
  );
};

export default ImageSlider;
