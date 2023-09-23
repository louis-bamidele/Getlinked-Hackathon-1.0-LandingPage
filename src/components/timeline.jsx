import React from "react";

function Timeline(props) {
  return (
    <div className="-timeline-container">
      {/* <div className="timeline-vertical-line"></div> */}
      <div className="timeline-circle text-white text-bold">{props.date}</div>
    </div>
  );
}

export default Timeline;
