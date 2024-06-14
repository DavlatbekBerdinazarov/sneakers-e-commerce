import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Nav from "./components/Nav";
import ProductDetail from "./components/ProductDetail";
import SwiperProduct from "./components/SwiperProduct";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className=" container-css">
      <div>
        <Modal show={showModal} handleClose={handleClose} title="Modal title">
          <p>Modal body content goes here.</p>
        </Modal>
      </div>
      <header>
        <Nav />
      </header>

      <main
        className="my-4 p-5 d-flex justify-content-between align-items-center"
        style={{ gap: "120px" }}
      >
        <div>
          <SwiperProduct handleShow={handleShow}/>
        </div>
        <div>
          <ProductDetail />
        </div>
      </main>
    </div>
  );
}

export default App;
