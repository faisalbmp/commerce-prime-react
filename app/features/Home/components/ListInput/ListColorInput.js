import React from "react";
import { ColorRadioInput } from "../Input/ColorRadioInput";

export const ListColorInput = ({ listData, name, errors, ...props }) => {
  return (
    <div className={`d-flex flex-row px-xl-5 w-75 flex-wrap ${errors && "is-invalid"}`} >
      {listData.map((data, key) => <ColorRadioInput {...props} key={key} name={name} color={data.color_hash} value={data.color_hash} invalid={errors ? true : false} />)}
    </div>
  )
}