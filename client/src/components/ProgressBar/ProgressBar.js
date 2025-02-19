import React, { useState } from "react";
import "./ProgressBar.css";

const ProgressBar = (props) => {
  const formNumber = props.formNumber;
  return (
    <div className="container-prog">
      <div className="">
        {formNumber === 0 && <div className="main active"></div>}
        {formNumber === 1 && <div className="main active"></div>}
        {formNumber === 2 && <div className="main active"></div>}
        <ul className="progress_bar">
          <li className={formNumber === 0 ? "active" : ""}>Personal Details</li>
          <li className={formNumber === 1 ? "active" : ""}>Bank Payment</li>
          <li className={formNumber === 2 ? "active" : ""}>
            Membership Created
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProgressBar;
