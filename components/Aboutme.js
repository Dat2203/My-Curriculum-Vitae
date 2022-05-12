import React from "react";
import PropTypes from "prop-types";

function Aboutme(props) {
  return (
    <div className="mb-[15px]">
      <div className="underline-offset-1 text-[18px] font-bold">
        {props.title}
      </div>
      <div className="">{props.description}</div>
    </div>
  );
}

Aboutme.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Aboutme;
