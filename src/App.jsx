import React from "react";
import Carousel from "./components/Carousel";
import View360Button from "./components/View360Button";
import PriceCalculator from "./components/PriceCalculator";
import CarOverview from "./components/CarOverview";

const App = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1>Veloce</h1>
      <section id="carousel">
        <Carousel />
      </section>
      <div style={{ margin: '20px 0' }}></div>
      <section id="car-overview">
        <CarOverview />
      </section>
      <div style={{ margin: '20px 0' }}></div>
      <section id="view360">
        <View360Button />
      </section>
      <div style={{ margin: '20px 0' }}></div>
      <section id="calculator">
        <PriceCalculator />
      </section>
    </main>
  );
};

export default App;
