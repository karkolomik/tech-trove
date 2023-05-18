import React from "react";

const Categories = () => {
  const data = [
    {
      id: "1",
      catImg: "./images/category/phones.png",
      catName: "Mobile Phones",
    },
    {
      id: "2",
      catImg: "./images/category/laptops.png",
      catName: "Laptops",
    },
    {
      id: "3",
      catImg: "./images/category/tablets.png",
      catName: "Tablets",
    },
    {
      id: "4",
      catImg: "./images/category/tv-sets.png",
      catName: "TV-sets",
    },
    {
      id: "5",
      catImg: "./images/category/headphones.png",
      catName: "Headphones",
    },
    {
      id: "6",
      catImg: "./images/category/smart-watches.png",
      catName: "Smart watches",
    },
    {
      id: "7",
      catImg: "./images/category/accessories.png",
      catName: "Accessories",
    },
    {
      id: "8",
      catImg: "./images/category/gaming-consoles.png",
      catName: "Gaming consoles",
    },
    {
      id: "9",
      catImg: "./images/category/monitors.png",
      catName: "Monitors",
    },
    {
      id: "10",
      catImg: "./images/category/speakers.png",
      catName: "Speakers",
    },
  ];
  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f-flex" key={index}>
              <img src={value.catImg} alt="" />
              <span>{value.catName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
