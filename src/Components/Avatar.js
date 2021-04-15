import React from "react";

export default function Avatar(props) {
  return (
    <div className="avatar">
      <img
        src={props.size}
        alt="avatar"
        style={{ borderRadius: props.style }}
      />
    </div>
  );
}
