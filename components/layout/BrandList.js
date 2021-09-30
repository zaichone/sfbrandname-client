import React from "react";
import SymmetricalDiv from "./SymmetricalDiv";

function BrandList({ brands }) {
  return (
    <section className="brands">
      {brands?.map((brand, index) => (
        <div
          className={index % 2 == 0 ? "brand odd" : "brand even"}
          key={brand.id}
        >
          <SymmetricalDiv
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ width: "100%" }}
          >
            <span>{brand.brandName}</span>
          </SymmetricalDiv>
        </div>
      ))}
    </section>
  );
}

export default BrandList;
