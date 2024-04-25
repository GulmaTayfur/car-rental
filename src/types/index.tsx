// CustomButton bileşeninin aldığı propsların typenı tanımlayalım

import { MouseEventHandler } from "react";

export type ButtonProps = {
  title: string;
  designs?: string;
  btnType?: "button" | "submit";
  rIcon?: string;
  handleClick?: MouseEventHandler;
};

export type CarType = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: "gas" | "diesel" | "electricity";
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};

export type OptionType = {
  label: string;
  value: string;
};

export type filterType = {
  make?: string;
  model?: string;
  limit?: string;
  fuel?: string;
  year?: string;
};
