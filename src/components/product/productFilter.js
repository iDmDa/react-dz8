import React, { useState } from "react";
import { Slider, Box } from "@mui/material";
import ShowOption from "./showOption";
import ProductItems from "./productItems";

const ProductFilter = () => {
  const [priceRange, setPriceRange] = useState([20, 400]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleSizeChange = (size) => {
    setSelectedSizes((prevSelectedSizes) =>
      prevSelectedSizes.includes(size)
        ? prevSelectedSizes.filter((s) => s !== size)
        : [...prevSelectedSizes, size]
    );
  };

  return (
    <>
      <div className="product-option">
        <div>
          <h4>Trending now</h4>
        </div>
        <div>
          <h5>
            Bohemian <span>|</span> Floral <span>|</span> Lace <br />
            Floral <span>|</span> Lace <span>|</span> Bohemian
          </h5>
        </div>
        <div>
          <h4>Size</h4>
        </div>
        <div className="checkbox-box">
          {sizes.map((size, index) => (
            <p key={index}>
              <input
                type="checkbox"
                name="size"
                id={size}
                checked={selectedSizes.includes(size)}
                onChange={() => handleSizeChange(size)}
              />{" "}
              {size}
            </p>
          ))}
        </div>
        <div>
          <h4>Price</h4>
        </div>
        <Box sx={{ width: 300 }}>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={1}
            max={400}
            step={1}
          />
          <div className="price-box">
            <div>${priceRange[0]}</div>
            <div>${priceRange[1]}</div>
          </div>
        </Box>
        <ShowOption />
      </div>
      <ProductItems selectedSizes={selectedSizes} priceRange={priceRange} />
    </>
  );
};

export default ProductFilter;
