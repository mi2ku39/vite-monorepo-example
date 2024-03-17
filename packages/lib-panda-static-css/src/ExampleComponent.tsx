import React from "react";
import { css } from "../styled-system/css";

export const ExampleComponent: React.FC<React.PropsWithChildren> = ({
  children,
}) => (
  <div
    className={css({
      color: "red",
    })}
  >
    {children}
  </div>
);
