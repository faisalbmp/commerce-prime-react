import React from "react";
import styled from "styled-components"

const Input = styled.input`
  position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    +.list{
      /* border-bottom: 1px solid #131212; */
      width: 150px;
      
      @media screen and (max-width: 992px) {
        width: 15px;
      }
      p{
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: center;
        color: #131212;
        
      @media screen and (max-width: 992px) {
        font-size: 11px;
      }
      }
      &:hover{
        cursor: pointer;
      }
    }
    :checked{
      +.list{
        border-bottom: 1px solid #131212;
        box-sizing: border-box;
        p{
          font-family: Poppins;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 24px;
          letter-spacing: 0em;
          text-align: center;
          color: #131212;
        }
    }
    &:hover{
      cursor: pointer;
    }
  }
      
`

const Label = styled.label`
  display: inline;
  width:100%;      
`
export const HeaderText = ({ onClick, value, className = "px-xl-2  px-3" }) => {
  return (
    <Label>
      <Input type="radio" name="list" value={value} />
      <div onClick={onClick} className={`list ${className}`}>
        <p>
          {value}
        </p>
      </div>
    </Label>
  )
}