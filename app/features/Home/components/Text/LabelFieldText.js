import React from "react";
import Label from "reactstrap/lib/Label";
import styled from "styled-components"

const Div = styled(Label)`
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 27px;
letter-spacing: 0em;
text-align: left;

color:"#000";

@media screen and (max-width: 992px) {
  font-size:18px;
}
`

export const LabelFieldText = ({ value, onClick, className="px-xl-5  px-3" }) => {
  return (
    <Div onClick={onClick} className={`py-1 ${className}`}>
      {value}
    </Div>
  )
}