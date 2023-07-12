import React from "react";

const ProductQuantityController = () => {
  return (
    <div className="d-flex gap-0 mb-2 align-items-center flex-grow">
      <div
        className="p-1 text-center"
        style={{
          width: "30px",
          border: "1px solid #aeaeae",
        }}
      >
        -
      </div>
      <input
        className=" text-center p-1"
        id="inputQuantity"
        type="num"
        defaultValue={1}
        style={{
          width: "40px",
          border: "1px solid #aeaeae",
          borderLeft: "none",
        }}
      />
      <div
        className="p-1 text-center"
        style={{
          width: "30px",
          border: "1px solid #aeaeae",
          borderLeft: "none",
        }}
      >
        +
      </div>
    </div>
  );
};

export default ProductQuantityController;
