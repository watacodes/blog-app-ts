import React from "react";

type CategoryButtonType = {
  category: string;
};

const CategoryButton: React.FC<CategoryButtonType> = ({ category }) => {
  return (
    <button className="text-sm mx-1 text-blue-700 border border-blue-700 rounded-sm px-2 py-1">
      {category}
    </button>
  );
};

export default CategoryButton;
