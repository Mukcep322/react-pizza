// Libraries
import React from "react"

// Components
import Header from "./components/Header.jsx"
import Categories from "./components/Categories.jsx"
import Sort from "./components/Sort.jsx"
import PizzaItem from "./components/PizzaItem.jsx"

// Styles
import "./scss/app.scss"
import pizzasItems from "./assets/pizzas.json"

// App
function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzasItems.map((obj) => {
              return <PizzaItem key={obj.id} {...obj} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
