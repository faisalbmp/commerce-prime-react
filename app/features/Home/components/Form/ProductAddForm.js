import Form from "reactstrap/lib/Form";
import React from "react";
import { SizeFormGroup } from "../FormGroup/SizeFormGroup";
import { ColorFormGroup } from "../FormGroup/ColorFormGroup";
import { SubmitButton } from "../Button/SubmitButton";

export const ProductAddForm = ({ data, formik }) => {

  const {
    errors,
    handleSubmit,
    // touched,
    isSubmitting,
    // values,
    getFieldProps,
    // setFieldValue,
  } = formik;
  return (
    <Form role="form" onSubmit={handleSubmit}>
      <SizeFormGroup
        label="SELECT SIZE (US)"
        listData={data.sizes}
        name="size"
        errors={errors.size}
        className="mb-3"
        {...getFieldProps("size")}
      />
      <ColorFormGroup
        label="SELECT COLOR"
        name="color"
        listData={data.colors}
        errors={errors.color}
        {...getFieldProps("color")}
      />
      <SubmitButton type="submit" ><p>{`ADD TO BAG - $${data.price}`}</p><i className="fa fa-arrow-right ml-5" /></SubmitButton>
    </Form>
  )
}