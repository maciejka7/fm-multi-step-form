import React from "react";
import s from "./Steps.module.scss";

type Props = {
  currentStep: number;
  numberOfSteps: number;
};

export const Steps = (props: Props) => {
  return (
    <div className={s.container}>
      {new Array(props.numberOfSteps).fill(".").map((_, index) => {
        return (
          <div
            className={`${s.circle} ${
              index + 1 === props.currentStep ? s.active : ""
            }`}
          >
            {index + 1}
          </div>
        );
      })}
    </div>
  );
};
