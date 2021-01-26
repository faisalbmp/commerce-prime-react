import React from "react";
import styled from "styled-components";
import Input from "reactstrap/lib/Input";
const Inputs = styled(Input)`
  position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    +.card{
      width: 48px;
      height: 48px;
      border: 1px solid #131212;
      box-sizing: border-box;
      .text{

        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */

        display: flex;
        align-items: center;
        text-align: center;

        color: #131212;
      }
    }
    :checked{
      +.card{
        width: 48px;
        height: 48px;

        background: #000000;
        border: 1px solid #131212;
        box-sizing: border-box;
        .text{

          font-family: Poppins;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 24px;
          /* identical to box height, or 150% */

          display: flex;
          align-items: center;
          text-align: center;

          color: #FFFFFF;
        }
    }
    }
`

const Label = styled.label`
  display: inline;
  width:20%;      
`
export const SizeRadioInput = (props) => {
  return (
    <Label>
      <Inputs type="radio" {...props} />
      <div className="card p-0">
        <div className="card-body text-center p-0 d-flex flex-row justify-content-center align-items-center">
          <div className="text">{props.label}</div>
        </div>
      </div>

    </Label>
  )
}