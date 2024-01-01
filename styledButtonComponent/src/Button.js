import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";
const styles = {
  small: {
    "--font-size": "16px",
    "--padding": "8px 16px",
    "--border-radius": "2px",
  },
  medium: {
    "--font-size": "18px",
    "--padding": "16px 24px",
    "--border-radius": "2px",
  },
  large: {
    "--font-size": "21px",
    "--padding": "20px 36px",
    "--border-radius": "2px",
  },
};

const Button = ({ variant, size, children }) => {
  switch (variant) {
    case "fill":
      return <FillButton style={styles[size]}>{children}</FillButton>;
    case "outline":
      return <OutLineButton style={styles[size]}>{children}</OutLineButton>;
    case "ghost":
      return <GhostButton style={styles[size]}>{children}</GhostButton>;
    default:
      return <FillButton style={styles[size]}>{children}</FillButton>;
  }
};
const BaseButton = styled.button`
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: var(--font-size);
  padding: var(--padding);
  border: ${COLORS.primary}solid 2px;
  border-radius: var(--border-radius);
  &:focus {
    //without defining style color will not work in firefox
    outline-style: solid;
    outline-color: ${COLORS.primary};
    outline-offset: 4px;
  }
`;
const FillButton = styled(BaseButton)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  &:hover {
    background-color: ${COLORS.primaryLight};
  }
`;

const OutLineButton = styled(BaseButton)`
  background-color: white;
  color: ${COLORS.primary};
  border: ${COLORS.primary} solid 2px;
  &:hover {
    background-color: ${COLORS.offwhite};
  }
`;

const GhostButton = styled(BaseButton)`
  background-color: transparent;
  color: ${COLORS.gray};
  border: transparent solid 2px;
  &:hover {
    background-color: ${COLORS.transparentGray15};
    color: black;
  }
  &:focus {
    outline-color: ${COLORS.gray};
  }
`;
export default Button;
