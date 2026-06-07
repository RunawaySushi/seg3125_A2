import { useState } from "react";
import "./App.css";
import Includes from "./includes.jsx";
import Footer from "./Footer.jsx";
import NavBar from "./NavBar.jsx";
import StudioRates from "./StudioRates.jsx";
import PhotoRates from "./PhotoRates.jsx";

function App() {
  const [page, setPage] = useState("home");

  if (page === "rental") return <StudioRates setPage={setPage} />;
  if (page === "photoshoot") return <PhotoRates setPage={setPage} />;

  return (
    <div>
        <NavBar setPage={setPage} />
          <div className="hero">
            <img
              src="/src/assets/dark-studio.jpeg"
              alt=""
              className="hero-image"
            />

            <div className="name-box">
              <h1 className="name">Photo Studio</h1>
            </div>

            <div className="overlay">
              <div className="overlay-layout">
                <h2>A Studio for Modern Photography</h2>
                <h1>Your Story, <br />Framed</h1>
                <button className="btn-rental" onClick={() => setPage("rental")} style={{ cursor: "pointer" }}>Studio Rental</button>
                <button className="btn-session" onClick={() => setPage("photoshoot")} style={{ cursor: "pointer" }}>Book A Photoshoot</button>
              </div>
            </div>
          </div>

          <div className="choose">
            <h1>Your Story, Your Way</h1>
            <p className="choose-text">Create freely in our studio or enjoy a custom, guided photoshoot designed just for you.</p>
            <div className="choose-boxes">

              <div className="choose-box" onClick={() => setPage("rental")} style={{ cursor: "pointer" }} >
                <img
                  src="/src/assets/studio-rental.jpeg"
                  alt=""
                  className="studio-rental-image"
                />
                <div className="choose-box-text">
                  <h2>Rental</h2>
                  <div className="choose-line" />
                  <p>Book now</p>
                </div>
              </div>

              <div className="choose-box" onClick={() => setPage("photoshoot")} style={{ cursor: "pointer" }}>
                <img
                  src="/src/assets/photoshoot.jpeg"
                  alt=""
                  className="photoshoot-image"
                />
                <div className="choose-box-text">
                  <h2>Photoshoot</h2>
                  <div className="choose-line" />
                  <p>Book now</p>
                </div>
              </div>
            </div>
          </div>

            <Includes />

          <Footer id="footer"/>
          
        </div>
  
  );
}

export default App;