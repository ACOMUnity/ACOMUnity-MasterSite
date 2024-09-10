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

type Type = "text" | "outlined";

type IBtn = {
  fullwidth?: string;
  $elevated?: boolean;
  $type?: Type;
  $font?: string;
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
  text-transform: capitalize;
  width: ${(props) => (props.fullwidth === "true" ? "100%" : null)};
  min-height: 38px;
  font-size: ${({ $font }) => ($font ? $font : "14px")};
  font-weight: 500;
  transition: ease-in 0.3s;
  cursor: pointer;

  ${({ $elevated }) =>
    $elevated &&
    "box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"}

  ${({ disabled }) =>
    disabled &&
    css`
      &:disabled {
        background-color: rgba(255, 215, 0, 0.5);
      }
    `} 

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
