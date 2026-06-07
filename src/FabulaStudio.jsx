import "./FabulaStudio.css";

export default function FabulaStudio({ setPage }) {
  return (
    <button onClick={() => setPage("home")} className="fabula-logo">
      Fabula Studio
    </button>
  );
}