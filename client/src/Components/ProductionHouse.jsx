import React from "react";
import video1 from "../../assets/Videos/disney.mp4";
import video2 from "../../assets/Videos/marvel.mp4";
import video3 from "../../assets/Videos/national-geographic.mp4";
import video4 from "../../assets/Videos/pixar.mp4";
import video5 from "../../assets/Videos/star-wars.mp4";
import Disney from "../../assets/Images/disney.png";
import Marvel from "../../assets/Images/marvel.png";
import NationalGeographic from "../../assets/Images/nationalG.png";
import Pixar from "../../assets/Images/pixar.png";
import StarWars from "../../assets/Images/starwar.png";

function ProductionHouseList() {
  const List = [
    {
      id: 1,
      image: Disney,
      video: video1,
    },
    {
      id: 2,
      image: Marvel,
      video: video2,
    },
    {
      id: 3,
      image: NationalGeographic,
      video: video3,
    },
    {
      id: 4,
      image: Pixar,
      video: video4,
    },
    {
      id: 5,
      image: StarWars,
      video: video5,
    },
  ];
}
const ProductionHouse = () => {
  return (
    <>
      {ProductionHouseList.map((item) => (
        <div>
          <video src={item.video} />
          <img src={item.image} className="w-full" />
        </div>
      ))}
    </>
  );
};

export default ProductionHouse;
