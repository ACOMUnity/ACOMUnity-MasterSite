import styled, { css } from "styled-components";

// export const Container = styled.section`
//   width: 100%;
//   max-width: ${({ fullWidth }) => (fullWidth ? "100%" : "1440px")};
//   padding: 24px;
//   margin: auto;
// `;

export const Title = styled.h1`
  color: ${({ color }) => (color ? color : "black")};

  ${({ as }) => {
    switch (as) {
      case "h2":
        return css`
          font-size: 40px;
          line-height: 50px;
          font-weight: 700;

          ${({ theme }) => theme.breakpoints.down("sm")} {
            font-size: 36px;
            line-height: 46px;
          }
        `;
      case "h3":
        return css`
          font-size: 32px;
          line-height: 40px;
          font-weight: 700;

          ${({ theme }) => theme.breakpoints.down("sm")} {
            font-size: 28px;
            line-height: 40px;
          }
        `;
      case "h4":
        return css`
          font-size: 24px;
          line-height: 30px;
          font-weight: 500;

          ${({ theme }) => theme.breakpoints.down("sm")} {
            font-size: 22px;
            line-height: 28px;
          }
        `;
      case "h5":
        return css`
          font-size: 20px;
          line-height: 25px;
          font-weight: 500;

          ${({ theme }) => theme.breakpoints.down("sm")} {
            font-size: 18px;
            line-height: 23px;
          }
        `;
      default:
        return css`
          font-size: 48px;
          line-height: 60px;
          ${({ theme }) => theme.breakpoints.down("sm")} {
            font-size: 42px;
            line-height: 56px;
          }
        `;
    }
  }}
`;

export const SubTitle = styled.h6`
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 16px;
    line-height: 20px;
  }
`;

type IBtn = {
  fullwidth?: string;
  $elevated?: string;
  $type?: string;
  disabled?: boolean;
};

export const Button = styled.button<IBtn>`
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 6px;
  padding: 16px 24px;
  min-width: 100px;
  width: ${(props) => (props.fullwidth === "true" ? "100%" : null)};
  min-height: 38px;
  font-size: 14px;
  font-weight: 700;
  transition: ease-in 0.3s;
  cursor: pointer;

  ${({ $elevated }) =>
    $elevated &&
    "box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"}

  ${({ $type }) => {
    switch ($type) {
      case "text":
        return css``;
      case "outlined":
        return css`
          color: gold;
          border: 1px solid gold;

          &:hover,
          &:active,
          &:focus {
            background: rgba(255, 215, 0, 0.1);
            border: 1px solid gold;
            outline: none;
          }
        `;
      default:
        return css`
          background: gold;
          color: rgb(0, 0, 0);

          &:hover {
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
              0px 1px 3px 1px rgba(0, 0, 0, 0.15);
          }
        `;
    }
  }}
`;

// Resizes based on device scrren size, very fluid

// export const FluidTitle = styled.h1`
//   color: ${({ color }) => (color ? color : "black")};
//   font-size: 4.8vw;
//   font-weight: ${({ $weight }) => ($weight ? $weight : "700")};

//   ${({ theme }) => theme.breakpoints.up("sm")} {
//     font-size: ${(props) => (props.$size ? props.$size : "24px")};
//   }
// `;

// This is a spinning loader, inline by default, to use the overlay Loader, you can checkout the OverlayLoader in src/components/ui

// export const Loader = styled.div`
//   width: 28px;
//   height: 28px;
//   border: 5px solid ${({ theme }) => theme.color.main.default};
//   border-radius: 50%;
//   border-top: 5px solid ${({ theme }) => theme.color.main["50"]};
//   animation: ${spin} 1s linear infinite;
// `;
