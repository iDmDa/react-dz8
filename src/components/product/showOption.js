import React, { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Кастомный стиль для Select
const CustomSelect = styled(Select)(({ theme }) => ({
  border: '1px solid #e0e0e0',
  padding: '0',  // отступы
  borderRadius: '0px',
  height: '36px', // Высота селекта
  '& .MuiSelect-select': {
    padding: '8px 10px',  // отступы внутри
    minHeight: 'initial',  // Убираем стандартную высоту
    lineHeight: '1.5',  // выровнять по вертикали
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',  // убрать стандартную рамку
  },
  '& .MuiSelect-icon': {
    top: 'calc(50% - 10px)'  // Выравниваем стрелку
  }
}));

const ProductOption = () => {
  const [sortOption, setSortOption] = useState("name");
  const [itemsToShow, setItemsToShow] = useState(12);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleItemsToShowChange = (event) => {
    setItemsToShow(event.target.value);
  };

  return (
    <div className="show-option" style={{ display: 'flex', gap: '10px' }}>
      {/* Выпадающий список для сортировки */}
      <div className="btn-group" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Typography variant="body1">Sort By</Typography>
        <FormControl variant="outlined">
          <CustomSelect
            value={sortOption}
            onChange={handleSortChange}
            label="Sort By"
          >
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="price">Price</MenuItem>
          </CustomSelect>
        </FormControl>
      </div>

      {/* Выпадающий список для количества отображаемых карточек */}
      <div className="btn-group" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Typography variant="body1">Show</Typography>
        <FormControl variant="outlined">
          <CustomSelect
            value={itemsToShow}
            onChange={handleItemsToShowChange}
            label="Show"
          >
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={12}>12</MenuItem>
          </CustomSelect>
        </FormControl>
      </div>
    </div>
  );
};

export default ProductOption;
