"use client";
import React, { useCallback, useState } from "react";

const HorizontalTab = ({ tabs, children, onClick }) => {
  const handleClick = useCallback(
    (index) => {
      setShouldOpenNav(index);
      onClick;
    },
    [onClick]
  );

  const [shouldOpenNav, setShouldOpenNav] = useState(0);

  return (
    <div className="d-flex flex-column">
      {/* TABS */}
      <div className="d-flex  border-bottom mb-3">
        {tabs?.map((tab, index) => (
          <button
            onClick={() => handleClick(index)}
            key={index}
            className={
              shouldOpenNav === index
                ? "border-0 bg-white bold-font border-bottom border pb-2 border-black"
                : "border-0 bg-white pb-2"
            }
          >
            {tab}
          </button>
        ))}
      </div>

      {/* CONTENTS */}
      <div>
        {React.Children.toArray(children)?.map((item, index) => (
          <div
            className={shouldOpenNav === index ? "d-block" : "d-none"}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalTab;
