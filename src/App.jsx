import "./App.css";
import Nav from "./components/Nav";
import ProductDetail from "./components/ProductDetail";
import SwiperProduct from "./components/SwiperProduct";

function App() {
  return (
    <div className=" container-css">
      <header>
        <Nav />
      </header>

      <main className="my-4 p-5 d-flex justify-content-between">
        <div>
          <SwiperProduct/>
        </div>
        <div>
          <ProductDetail/>
        </div>
      </main>
    </div>
  );
}

export default App;
