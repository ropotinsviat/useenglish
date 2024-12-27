import { ReactNode, HTMLProps } from "react";

interface TitleProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

function Title({ children, ...rest }: TitleProps) {
  return (
    <div
      {...rest}
      className={`selected-bg text-white shadow-sm text-center uppercase font-bold text-2xl md:text-3xl py-6 my-10 ${rest.className}`}
    >
      {children}
    </div>
  );
}

export default Title;
