import React from "react";
import styled from "styled-components"

const HeaderTextDiv = styled.div`
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18px;
letter-spacing: 0em;
text-align: center;

@media screen and (max-width: 992px) {
  font-size:18px;
}
&:hover{
  cursor: pointer;
}
`

export const SubHeaderLink = ({ value, onClick, className="px-xl-2  px-3" }) => {
  return (
    <HeaderTextDiv onClick={onClick} className={`py-2 ${className}`}>
      {value}
    </HeaderTextDiv>
  )
}