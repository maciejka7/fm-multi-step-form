import { ReactNode } from "react";
import s from "./MainLayout.module.scss";

type Props = {
  children: ReactNode;
};

export const MainLayout = (props: Props) => {
  return <main className={s.container}>{props.children}</main>;
};
