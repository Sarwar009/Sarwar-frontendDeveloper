import React from "react";

export default function SubTitle({subTitle}) {
  return (
    <div className="title-wrapper">
      <div className="title">
        <div className="title-dot"></div>
        <p className="title-text">{subTitle}</p>
      </div>
    </div>
  );
}
