import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Foooter/Footer";
import "./AppLayout.css";

const AppLayout = ({ setSearchTearm }) => {
  return (
    <div className="app-layout">
      <Header setSearchTearm={setSearchTearm} />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
