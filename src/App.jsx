import { Outlet, useLocation, useNavigation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import bodyBg1 from "../src/assets/collected/gamming.webp";
import bodyBg2 from "../src/assets/collected/wild.webp";
import bodyBg3 from "../src/assets/collected/shoot.jpg";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

function App() {
  const { pathname } = useLocation();
  const photos = [bodyBg1, bodyBg2, bodyBg3];
  const navigation = useNavigation();

  const [choosePhoto, setChoosePhoto] = useState(bodyBg1);

  useEffect(() => {
    const filteredPhotos = photos.filter((photo) => photo !== choosePhoto);

    const newPhoto =
      filteredPhotos[Math.floor(Math.random() * filteredPhotos.length)];

    setChoosePhoto(newPhoto);
  }, [pathname]);

  return (
    <>
      <header
        className="bg-gray-800 bg-cover bg-right"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url(${choosePhoto})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
      </header>

      <div
        className="relative min-h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${bodyBg1}), url(${bodyBg2})`,
          backgroundSize: "cover, contain, cover",
          backgroundPosition: "center, left bottom, bottom right",
          backgroundRepeat: "no-repeat, no-repeat, no-repeat",
        }}
      >
        <main className="relative z-10  text-white">
          {navigation.state === "loading" ? <Loading></Loading> : <Outlet />}
        </main>

        <footer className="relative z-10">
          <Footer />
        </footer>

        {/* Optional overlay effect */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      </div>
    </>
  );
}

export default App;
