import React from "react";
import styled from "styled-components"

const Div = styled.div`
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
text-align: left;

color:"#000";

@media screen and (max-width: 992px) {
  font-size:18px;
}
`

export const TotalPriceText = ({ children, onClick, className = "px-xl-5  px-3" }) => {
  return (
    <Div onClick={onClick} className={`py-5 ${className}`}>
      {children}
    </Div>
  )
}