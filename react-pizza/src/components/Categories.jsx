import React from "react"

function Categories() {
  const [activeCategory, setActiveCategory] = React.useState(0)

  const categoties = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые"
  ]

  return (
    <div className="categories">
      <ul>
        {categoties.map((value, index) => (
          <li
            key={index}
            onClick={() => setActiveCategory(index)}
            className={activeCategory === index ? "active" : ""}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
