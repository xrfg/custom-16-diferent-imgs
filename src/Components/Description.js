import React from "react";

export default function Description(props) {
  return (
    <div>
      <p>size: {props.size}</p>
      <p>type: {props.style}</p>
    </div>
  );
}
