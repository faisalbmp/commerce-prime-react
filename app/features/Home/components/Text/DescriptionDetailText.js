import React from "react";
import styled from "styled-components"

const Div = styled.div`
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 30px;
letter-spacing: 0em;
text-align: left;

color:"#000";

@media screen and (max-width: 992px) {
  font-size:18px;
}
`

export const DescriptionDetailText = ({ value, onClick, className="px-xl-5  px-3" }) => {
  return (
    <Div onClick={onClick} className={`py-3 ${className}`}>
      {value}
    </Div>
  )
}