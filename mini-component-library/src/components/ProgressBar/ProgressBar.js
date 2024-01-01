/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";
const styles = {
  large: {
    "--height": "24px",
    "--padding": "4px",
  },
  medium: {
    "--height": "12px",
  },
  small: {
    "--height": "8px",
  },
};

const ProgressBar = ({ value, size, name = "example" }) => {
  return (
    <Progress
      style={styles[size]}
      role="progressbar"
      aria-valuenow={value}
      aria-label={name}
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <Bar value={value}> </Bar>
    </Progress>
  );
};
const Progress = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  width: 370px;
  height: var(--height, 1px);
  padding: var(--padding, 0px);
  box-shadow: 0px 2px 4px 0px hsla(0, 0%, 50%, 0.35) inset;
  overflow: hidden;
`;
const Bar = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
  height: 100%;
  width: ${(p) => p.value}%;
  &[value="100"] {
    border-radius: 4px;
  }
`;

export default ProgressBar;
