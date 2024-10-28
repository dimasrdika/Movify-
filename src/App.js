import "./App.scss";
import Swiper from "swiper";
import "./asset/boxicons-2.0.7/css/boxicons.min.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Routes from "./config/Routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
