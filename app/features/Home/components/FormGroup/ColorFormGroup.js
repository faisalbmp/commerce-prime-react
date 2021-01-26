import React from "react";
import FormGroup from "reactstrap/lib/FormGroup";
import { ListColorInput } from "../ListInput/ListColorInput";
import { LabelFieldText } from "../Text/LabelFieldText";
import FormFeedback from "reactstrap/lib/FormFeedback";

export const ColorFormGroup = ({ name, listData, label, errors, ...props }) => {
  return (
    <FormGroup >
      <LabelFieldText value={label} />
      <ListColorInput listData={listData} name={name} errors={errors} {...props} />
      <FormFeedback className="px-5">{errors}</FormFeedback>
    </FormGroup>
  )
}