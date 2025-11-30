
import {Outlet} from "react-router-dom";
import Header from "./components/header/Header.tsx";
import StripeLayout from "./components/footer/Footer.tsx";

function App() {

  return (
    <>
        <Header />
        <Outlet />
        <StripeLayout />


    </>
  )
}

export default App
