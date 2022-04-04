import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import RecipeList from "./components/RecipeList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Carousel />
      <RecipeList />
      <Footer />
    </div>
  );
}

export default App;
