import "./styles.css";
import NavbarComponent from "./components/NavbarComponent";
import { Product } from "./components/Product.js";

export default function App() {
  return (
    <div className="App">
      <NavbarComponent isim="Steve Jobs" />
      <Product />
    </div>
  );
}
