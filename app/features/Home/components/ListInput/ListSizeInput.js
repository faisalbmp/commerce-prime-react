import React from "react";
import { SizeRadioInput } from "../Input/SizeRadioInput";

export const ListSizeInput = ({ listData, name, className, errors, ...props }) => {
  return (
    <div className={`d-flex flex-row px-xl-5 w-75 flex-wrap ${errors && "is-invalid"} ${className}`}>
      {listData.map((data, key) => <SizeRadioInput {...props} key={key} name={name} label={data} value={data} />)}
    </div>
  )
}