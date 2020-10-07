import React, { useState } from "react";
import styled from "styled-components";
import { down } from "styled-breakpoints";

export const NavbarContainer = styled.div`
  position: fixed;
  z-index: 1;
  opacity: 1;
  background: #ffffff;

  width: 100%;
  padding: 10px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: opacity 0.1s linear 0s, transform 0.1s linear 0s;

  ${(props) =>
    props.hide &&
    `
    opacity: 0;
    transform: translateY(110);
  `}

  ${(props) =>
    props.topPage &&
    `
    padding: 30px 50px;
  `}

  ${down("tablet")} {
    padding: 5px 10px;
  }
`;

export const LinksContainer = styled.div`
  width: 100%;
  max-width: 560px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    position: fixed;
    background-color: white;
    justify-content: flex-start;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
    top: 0;
    right: 0;
    width: 200px;
    height: 100vh;
    padding-top: 100px;
  } ;
`;

export const InitialContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    height: 200px;
    flex-direction: column;
  }
`;
