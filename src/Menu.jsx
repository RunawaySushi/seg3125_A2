import { useState } from "react";
import "./Menu.css";

const links = ["Home", "Studio Rentals", "Photo Sessions", "Gallery", "About Us", "Contact Us"];

export default function Menu({ setPage }) {
  const [open, setOpen] = useState(false);

  const handleLink = (link) => {
    setOpen(false);
    if (link === "Studio Rentals") 
    {
    setPage("rental");
    } 
    else if (link === "Photo Sessions") 
    {
      setPage("photoshoot");
    } 
    else if (link === "Contact Us") 
    {
      setPage("home");

      setTimeout(() => {
        document.getElementById("footer")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 0);
    } 
    else 
    {
      setPage("home");
    }
  };

  return (
    <>
      <button className="menu-btn" onClick={() => setOpen(true)}>
        Menu
      </button>
      <div className={`menu-overlay ${open ? "open" : ""}`}>
        <nav>
          {links.map((link) => (
            <a key={link} href="#" onClick={() => handleLink(link)}>
              {link}
            </a>
          ))}
        </nav>
        <button className="menu-close" onClick={() => setOpen(false)}>
          ↑
        </button>
      </div>
    </>
  );
}