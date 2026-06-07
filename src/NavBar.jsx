import FabulaStudio from "./FabulaStudio.jsx";
import Menu from "./Menu.jsx";
import "./NavBar.css";

export default function NavBar({ setPage }) {
  return (
    <div id="nav-bar">
      <FabulaStudio setPage={setPage} />

      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}> 
        <Menu setPage={setPage} /> 
        </div> 
        <div style={{ flex: 0 }} />

    </div>
  );
}