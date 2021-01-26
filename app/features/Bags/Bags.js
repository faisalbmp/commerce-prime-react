import React from "react";
import { shoppingBag2 } from "../../assets/img";
import { selectAllBags, removeBag } from "./BagsSlice";
import { TitleText } from "./components/Text/TitleText";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useDispatch, useSelector } from "react-redux";
import { tableProductImage } from "../../assets/img/product";
import { TotalPriceText } from "./components/Text/TotalPriceText";
import { SubmitButton } from "./components/Button/SubmitButton";
import styled from "styled-components";

const ColumnImg = styled(Column)`
  width:10%;
  @media screen and (max-width: 992px) {
    width:0%
    /* visibility:hidden; */
  }
`

const Img = styled.img`
@media screen and (max-width: 992px) {
  visibility:hidden;
}
`

const HeaderText = styled(Column)`

`

export const Bags = () => {
  const allBags = useSelector(selectAllBags)
  const dispatch = useDispatch()
  return (
    <div className="px-xl-5 px--0 mt-10">
      <TitleText className="d-flex flex-row justify-content-center align-items-center ">
        Your Bag {<img src={shoppingBag2} className="ml-3" style={{
          width: "37.5px",
          height: "43.75px"
        }} />}
      </TitleText>

      <DataTable value={allBags}>
        <Column style={{ width: "4%" }} body={({ id }) => <i className="fa fa-times-circle" onClick={() => {
          dispatch(removeBag(id))
        }} />}> </Column>
        <ColumnImg body={() => <Img src={tableProductImage} />} ></ColumnImg>
        <Column style={{ width: "40%" }} body={({ name, size, color }) =>
          <div>
            <p>{name}</p>
            <div className="d-flex flex-row align-items-center">
              <div>Size:{size}</div>
              <div className="ml-xl-3 ml-1 mr-xl-2 mr-0">Color:</div>
              <div style={{ backgroundColor: color, width: "20px", height: "20px" }}></div>
            </div>
          </div>
        } header="PRODUCT"></Column>
        <Column field="price" body={({ price }) => <div>${price}</div>} header="PRICE"></Column>
        <Column body={() => <div>1</div>} header="QUANTITY"></Column>
        <Column field="price" body={({ price }) => <div>${price}</div>} header="TOTAL"></Column>
      </DataTable>
      <div className="row justify-content-end">
        <div className="col-xl-4">
          <TotalPriceText className="d-flex flex-row justify-content-between">
            <div>Total</div>
            <div>{allBags.reduce((acc, val) => acc + parseFloat(val.price), 0)}</div>
          </TotalPriceText>
        </div>
      </div>

      <div className="row justify-content-end">
        <div className="col-xl-4">
          <SubmitButton type="submit" ><p>{`PAY NOW`}</p><i className="fa fa-arrow-right"/></SubmitButton>
        </div>
      </div>
    </div>
  )
}