import { colors } from "../constants";
import { CarType, filterType } from "../types";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a40479d2b8mshc4b883a4f9191d1p1d92b1jsn4316bb916aee",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

export async function fetchCars(filters: filterType) {
  const {
    make = "bmw",
    model = "",
    limit = "",
    year = "",
    fuel = "",
  } = filters;

  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&fuel_type=${fuel}&year=${year}&limit=${limit}`,
    options
  );
  return await res.json();
}

export const generateImage = (car: CarType, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model);
  url.searchParams.append("zoomType", "fullscreen");

  if (angle) {
    url.searchParams.append("angle", angle);
  }

  const i = Math.round(Math.random() * colors.length);
  url.searchParams.append("paintId", colors[i]);

  return String(url);
};
