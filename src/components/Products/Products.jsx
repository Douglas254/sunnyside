import React from "react";
import milkbottles from "../../assets/desktop/image-gallery-milkbottles.jpg";
import orange from "../../assets/desktop/image-gallery-orange.jpg";
import cone from "../../assets/desktop/image-gallery-cone.jpg";
import sugarcubes from "../../assets/desktop/image-gallery-sugarcubes.jpg";

const Products = () => {
  return (
    <div className="container-fluid productsImage">
      <img src={milkbottles} alt="milkbottles" />
      <img src={orange} alt="orange" />
      <img src={cone} alt="cone" />
      <img src={sugarcubes} alt="sugarcubes" />
    </div>
  );
};

export default Products;
