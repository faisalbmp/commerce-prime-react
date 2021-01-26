import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components"
import { accountCircle, freeDelivery, logoNike, shoppingBag1 } from "../../assets/img";
import { CaptionText } from "../text/CaptionText";
import { HeaderText } from "../text/HeaderText";
import { SubHeaderLink } from "../text/SubHeaderLink";
const Header = styled.div`
  height:100px;
  width:100%;
  top:0;
  z-index:1000; 
  
  @media screen and (max-width: 992px) {
    top:auto;
    bottom:0;
  }
  `
const PromoText = styled.div`
  width:25%;
  @media screen and (max-width: 992px) {
    width:100%;

  }
`
const ListRoute= styled.div`
  width:50%;
  @media screen and (max-width: 992px) {
    width:100%;

  }
`
const LayoutHeader = () => {
  const [language, setlanguage] = useState("english")
  const history = useHistory()
  const onClickHeader = () => {
    history.push("/home")
  }
  return (
    <Header>
      <div className="d-flex flex-xl-row flex-column align-items-center justify-content-between w-100 px-xl-7 px-lg-7">
        <div className="d-flex flex-row">
          <select class="form-select border-0" style={{ color: "#000" }} value={language} onChange={(e) => setlanguage(e.value)}>
            <option selected value="english">English</option>
            <option value="Indonesia">Indonesia</option>
          </select>
        </div>
        <PromoText className="d-flex flex-row justify-content-end mt-3" style={{ maxWidth: "none" }}>
          <img src={freeDelivery} style={{
            width: "20px",
            height: "20px"
          }} />
          <CaptionText value="FREE SHIPPING OVER $100 PURCHASE" />
        </PromoText>
        <div className="d-flex flex-row">
          <SubHeaderLink value="Shipping" />
          <SubHeaderLink value="Faq" />
          <SubHeaderLink value="Contact" className="pr-0" />
        </div>
      </div>
      <div className="d-flex flex-xl-row flex-column align-items-center justify-content-between px-xl-7 px-lg-7 w-100">
        <div className="d-flex flex-row py-3">
          <img src={logoNike} />
        </div>
        <ListRoute className="d-flex flex-row pt-3">
          <HeaderText
            onClick={onClickHeader}
            value="New Release" />
          <HeaderText onClick={onClickHeader} value="Men" />
          <HeaderText onClick={onClickHeader} value="Women" />
          <HeaderText onClick={onClickHeader} value="Kids" />
          <HeaderText onClick={onClickHeader} value="Customize" />
        </ListRoute>
        <div className="d-flex flex-row">
          <img src={shoppingBag1} onClick={() => history.push("/bag")} className="mr-2" />
          <img src={accountCircle} />
        </div>
      </div>

    </Header>
  )
}

export default LayoutHeader;