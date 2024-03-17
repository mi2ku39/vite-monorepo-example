import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: red;
`;

export const ExampleComponent: React.FC<React.PropsWithChildren> = ({
  children,
}) => <Container>{children}</Container>;
