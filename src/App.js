import logo from "./logo.svg";
import "./App.css";
import PreLoader from "./components/PreLoader";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import DashBaord from "./views/DashBoard";

function App() {
  return (
    <>
      <PreLoader />

      <Nav />

      <main>
        <Slider />

        <DashBaord />
      </main>

      <Footer />
    </>
  );
}

export default App;
