import React from "react";
import Button from "reactstrap/lib/Button";
import styled from "styled-components";

const Buttons = styled(Button)`
  background-color:#000;
  display: flex;
  align-items:center;
  p{
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom:0px;
  }
`

export const SubmitButton = (props) => {
  return (
    <div className="px-5 mt-5">
      <Buttons className="py-3 px-5" {...props}>
        {props.children}
      </Buttons>
    </div>
  )
}