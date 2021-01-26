import React from "react";
import FormFeedback from "reactstrap/lib/FormFeedback";
import FormGroup from "reactstrap/lib/FormGroup";
import { ListSizeInput } from "../ListInput/ListSizeInput";
import { LabelFieldText } from "../Text/LabelFieldText";

export const SizeFormGroup = ({ name, listData, label, className = "mb-3", errors, ...props }) => {
  return (
    <FormGroup>
      <LabelFieldText value={label} />
      <ListSizeInput className={className} listData={listData} name={name} errors={errors} {...props} />
      <FormFeedback className="px-5">{errors}</FormFeedback>
    </FormGroup>
  )
}