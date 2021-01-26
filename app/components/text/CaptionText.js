import React from "react";
import styled from "styled-components";

const Div = styled.div`
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18px;
letter-spacing: 0em;

@media screen and (max-width: 992px) {
  font-size:18px;
}
`
export const CaptionText = ({ value, onClick, className="px-xl-5 " }) => {
  return (
    <Div onClick={onClick} className={`${className}`}>
      {value}
    </Div>
  )
}