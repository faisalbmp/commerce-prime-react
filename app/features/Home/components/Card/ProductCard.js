import React from "react";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import { ProductTitleText } from "../Text/ProductTitleText";
import { ProductPriceText } from "../Text/ProductPriceText";
import { ProductCategoryText } from "../Text/ProductCategoryText";
import { nikeAirForceImg } from "../../../../assets/img";
import styled from "styled-components";
const ProductCardComponent = styled(Card)`
  width:25%;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 992px) {
    width:100%;

  }
`
export const ProductCard = ({ title, price, category, onClick }) => {
  return (
    <ProductCardComponent className="border-0" onClick={onClick}>
      <CardBody>
        <img src={nikeAirForceImg} />
        <div className="d-flex flex-row justify-content-between">
          <ProductTitleText value={title} />
          <ProductPriceText value={price} />
        </div>
        <ProductCategoryText value={category} />
      </CardBody>
    </ProductCardComponent>
  )
}