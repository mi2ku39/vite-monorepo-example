import React from "react";
import { css } from "panda-external-styled-system/css";

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
