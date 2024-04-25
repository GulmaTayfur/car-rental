import { useEffect, useState } from "react";
import CustomFilter from "../components/CostumFilter";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { fuels, years } from "../constants";
import { useSearchParams } from "react-router-dom";
import { fetchCars } from "../utils";
import { CarType } from "../types";
import ShowMore from "../ShowMore";

const MainPage = () => {
  const [cars, setCars] = useState<CarType[]>([]);

  const [params, setParams] = useSearchParams();

  useEffect(() => {
    // Bir obje içindeki değerleri anahtar/değer çifti şeklinde bir nesne oluşturur.
    const paramsObj = Object.fromEntries(params.entries());
    fetchCars(paramsObj).then((res: CarType[]) => setCars(res));
  }, [params]);
  return (
    <div>
      <Hero />

      <div id="catalogue" className="mt-12 padding-x padding-y max-width ">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p>Beğenebileceğin arabarlı keşfet</p>
        </div>
        {/* Filtreleme Alanı */}

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container ">
            <CustomFilter title="Yakıt Tipi" options={fuels} />
            <CustomFilter title="Yıl" options={years} />
          </div>
        </div>
        {!cars || cars.length < 1 ? (
          <div className="home__error-container">
            <h2>Üzgünüz Herhangi Bir sonuç Bulunamadı</h2>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car, i) => (
                <Card car={car} key={i} />
              ))}
            </div>
          </section>
        )}
        <ShowMore />
      </div>
    </div>
  );
};

export default MainPage;
