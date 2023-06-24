import React, { ReactNode } from "react";
import { styled } from "styled-components";

interface Props {
  children?: ReactNode;
  id?: string;
  nobg?: boolean;
}

const SectionContainer: React.FC<Props> = ({ children, id, nobg }) => {
  return (
    <Container id={id} nobg={nobg}>
      {children}
    </Container>
  );
};

export default SectionContainer;

const Container = styled.section<Props>`
  width: 100%;
  padding: 0 24px;
  padding-top: 128px;
  background-image: ${(props) =>
    props.nobg
      ? "transparent"
      : "linear-gradient(175deg,rgb(16, 17, 35) 100%,rgb(4, 7, 16) calc(100% + 2px));"};
`;
