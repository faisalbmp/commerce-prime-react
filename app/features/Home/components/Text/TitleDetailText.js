import React from "react";
import styled from "styled-components"

const Div = styled.div`
font-family: Poppins;
font-size: 50px;
font-style: normal;
font-weight: 700;
line-height: 75px;
letter-spacing: 0em;
text-align: left;
color:"#000";

@media screen and (max-width: 992px) {
  font-size:18px;
}
`

export const TitleDetailText
 = ({ value, onClick, className = "px-xl-5  px-3" }) => {
  return (
    <Div onClick={onClick} className={`py-1 ${className}`}>
      {value}
    </Div>
  )
}