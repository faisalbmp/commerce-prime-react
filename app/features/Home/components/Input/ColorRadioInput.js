import React from "react";
import styled from "styled-components";
const Input = styled.input`
  position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    +.card{
      width: 48px;
      height: 48px;

      border-radius: 100px;
        background: ${props => props.color};
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

        border: 5px solid #131212;
        background: ${props => props.color};
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
export const ColorRadioInput = (props) => {
  return (
    <Label >
      <Input color={props.color} type="radio" {...props} />
      <div className="card p-0">

      </div>

    </Label>
  )
}