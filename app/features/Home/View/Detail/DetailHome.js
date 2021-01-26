import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { freeDelivery, mainDetailProduct, subDetailProduct1, subDetailProduct2, subDetailProduct3, subDetailProduct4 } from "../../../../assets/img";
import { CategoryDetailText } from "../../components/Text/CategoryDetailText";
import { DescriptionDetailText } from "../../components/Text/DescriptionDetailText";
import { TitleDetailText } from "../../components/Text/TitleDetailText";
import { CaptionText } from "../../../../components/text/CaptionText";
import { PlayVideoButton } from "../../components/Button/PlayVideoButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ProductAddForm } from "../../components/Form/ProductAddForm";
import { addBags } from "../../../Bags/BagsSlice";
import styled from "styled-components";
const Img = styled.img`
@media screen and (max-width: 992px) {
    width:200px;
    height:200px;
  }
`
export const DetailHome = () => {
  const shoe = useSelector(state => state.home.shoe)
  const dispatch = useDispatch()
  const formikAdd = useFormik({
    initialValues: {
      size: "",
      color: ""
    },
    validationSchema: Yup.object().shape({
      size: Yup.string().required("size field is required."),
      color: Yup.string().required("Color field is required."),
    }),
    onSubmit: async (values) => {
      await dispatch(addBags({
        ...values, id: Date.now(), ...shoe
      }))
    }
  });
  return (
    <div className="container mt-xl-0 mt-13">
      <div className="row">
        <div className="col">
          <Img src={mainDetailProduct} />
          <div className="d-flex flex-row flex-wrap">
            <img src={subDetailProduct1} />
            <img src={subDetailProduct2} />
            <img src={subDetailProduct3} />
            <img src={subDetailProduct4} />
          </div>
          <div className="d-flex flex-row mt-3" style={{ maxWidth: "none" }}>
            <img src={freeDelivery} style={{
              width: "20px",
              height: "20px"
            }} />
            <CaptionText value="FREE SHIPPING OVER $100 PURCHASE" />
          </div>
        </div>
        <div className="col">
          <CategoryDetailText value={shoe.category} />
          <TitleDetailText value={shoe.name} />
          <DescriptionDetailText value={shoe.description} />
          <PlayVideoButton onclick={() => window.open(shoe.video, "_blank")} />
          <ProductAddForm data={shoe} formik={formikAdd} />
        </div>
      </div>
    </div>
  )
}