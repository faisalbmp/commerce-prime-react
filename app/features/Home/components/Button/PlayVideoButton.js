import React from "react";
import styled from "styled-components";
import { PlayButtonIcon } from "../../../../assets/img";
export const PlayVideoButton = ({ onclick }) => {
  const Button = styled.div`
    background-color: #fff;
    border: none;
    color: #fff;
    padding: 15px 0px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    .text{
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: left;
      color:#000;
    }
  `
  return (
    <div className="px-xl-5">
      <Button onClick={onclick}>
        <div className="d-flex flex-row align-items-center">
          <img src={PlayButtonIcon} />
          <div className="text">PLAY VIDEO</div>
        </div>
      </Button>
    </div >
  )
}