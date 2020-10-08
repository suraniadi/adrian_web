import React from "react";
import styled from "styled-components";

import RightNav from "./RightNav";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 25px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (!open ? "#984BC5" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }
`;

const Burger = (props) => {
  return (
    <>
      <StyledBurger open={props.burgerOpen} onClick={props.burgerToggle}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav
        open={props.burgerOpen}
        onLinkScrollClick={props.onLinkScrollClick}
        burgerToggle={props.burgerToggle}
      />
    </>
  );
};

export default Burger;
