
import Pizza from "./Components/PizzaMenu/Pizza"
import Footer from "./Components/Footer/Footer";
import { data } from "react-router-dom";


const pizzaData = [
  {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "./src/assets/focaccia.jpg",
      soldOut: false,
  },
  {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "./src/assets/margherita.jpg",
      soldOut: false,
  },
  {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "./src/assets/spinaci.jpg",
      soldOut: false,
  },
  {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "./src/assets/funghi.jpg",
      soldOut: false,
  },
  {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "./src/assets/salamino.jpg",
      soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "./src/assets/prosciutto.jpg",
    soldOut: false,
  },
];



function App() {
  const pizza  = true
  return (

    <>
    <section className="menu-container">

          <h1 className="pizza-title">Pizza Menu</h1>
      <ul className= {`pizzas`}>
              {pizzaData.map((pizza) => (
                <Pizza
                key={pizza.name}
                name={pizza.name}
                ingredients={pizza.ingredients}
                price={pizza.soldOut? "SOLD OUT" : `${pizza.price} €` } 
                photoName={pizza.photoName} 
                soldOut = {pizza.soldOut}
                />
                
                
              ))}
          </ul>
             <button className="Order-btn">Order Now</button> 
            
      <section className="footer-container">
              <Footer></Footer>
              <p></p>
      </section>
              </section>
  </> 
);

}

export default App
