// Libraries
import React from "react"

// Components
import Header from "./components/Header.jsx"
import Categories from "./components/Categories.jsx"
import Sort from "./components/Sort.jsx"
import PizzaItem from "./components/PizzaItem.jsx"

// Styles
import "./scss/app.scss"

// App
function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaItem />
            <PizzaItem />
            <PizzaItem />
            <PizzaItem />
            <PizzaItem />
            <PizzaItem />
            <PizzaItem />
            <PizzaItem />
            <PizzaItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
