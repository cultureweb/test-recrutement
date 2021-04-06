import React from "react";
import "./BackToTop.css";

const BackToTop = () => {
  return (
    <div className="back-to-top-wrapper" id="back_top">
      <a
        href="#top"
        data-scroll="#top"
        className="back-to-top"
        title="Back to top"
      >
        <svg
          viewBox="0 0 100 100"
          width="25"
          height="25"
          // tabindex="-1"
          role="img"
          aria-labelledby="title"
        >
          <title id="title">Back to top</title>
          <path
            d="M10 50l50 50L70 90 30 50 70 10 60 0z"
            transform="translate(0 0) rotate(90 50 50)"
            fill="#fff"
            stroke="#fff"
          ></path>
          <image
            src="/images/back-to-top-arrow.png"
            alt="Back to top arrow"
            width="100%"
            height="100%"
          ></image>
        </svg>
      </a>
    </div>
  );
};

export default BackToTop;
