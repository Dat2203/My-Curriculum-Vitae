import React from "react";
import PropTypes from "prop-types";

function ProjectItem(props) {
  return (
    <div className="project mb-8">
      <div className="flex justify-between ">
        <div className="font-bold text-[16px] ">{props.name}</div>
        <div className="">{props.date}</div>
      </div>
      <div className="">{props.desc}</div>
      <a target="_blank" href={`${props.link}}`} rel="noopener noreferrer">
        {props.link}
      </a>
    </div>
  );
}

ProjectItem.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
};

export default ProjectItem;
