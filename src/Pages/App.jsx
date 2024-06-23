import { Outlet } from "react-router-dom";

import NavBar from "../components/navigation/NavBar";
import Footer from "../components/navigation/Footer";

function App() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="w-full flex lg:px-24 justify-center">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default App;
