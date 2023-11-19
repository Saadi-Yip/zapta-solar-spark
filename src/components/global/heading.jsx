import React from "react";

const Heading = ({ heading }) => {
  return (
    <div className="text-center">
      <h2
        style={{
          margin: "0",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        {heading}
      </h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="124"
        height="4"
        className="my-3"
        viewBox="0 0 124 4"
        fill="none"
      >
        <path
          d="M2.29102 2H121.71"
          stroke="#86BE3F"
          stroke-width="4"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default Heading;
