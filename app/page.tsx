import { fetchCars } from "@/utils";
import { CarCard, CustomFilter, Hero, SearchBar } from "./_components";

export default async function Home() {
  const allCars = await fetchCars();
  const isDataEmpty =
    !Array.isArray(allCars) || allCars.length === 0 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard
                  car={car}
                  key={`${car.make}-${car.model}-${car.year}-${car.transmission}`}
                />
              ))}
            </div>
          </section>
        ) : (
          <div className="home_error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>nope</p>
          </div>
        )}
      </div>
    </main>
  );
}
