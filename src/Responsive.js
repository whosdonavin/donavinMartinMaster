import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media (max-width: 775px) {
      ${props}
    }
  `;
};

export const IPadPro = (props) => {
  return css`
    @media (max-width: 1024px) {
      ${props}
    }
  `;
};
export const NonMobile = (props) => {
  return css`
    @media (min-width: 1024px) {
      ${props}
    }
  `;
};
