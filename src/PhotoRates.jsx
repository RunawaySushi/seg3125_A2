import "./StudioRates.css";
import RateCard from "./RateCard.jsx";
import NavBar from "./NavBar.jsx"
import Footer from "./Footer.jsx"

export default function PhotoRates({ setPage }) {
  return (
    <div className="rr-wrap">
      <NavBar setPage={setPage}/>
      <div className="rr-header">
        <p className="rr-eyebrow">Pricing</p>
        <h1 className="rr-title">Photoshoot Sessions</h1>
        <p className="rr-sub">
          Rather have someone else handle the camera? Each package covers studio rental,
          a photographer, and basic editing, so you can just show up and enjoy it.
        </p>
        <div className="rr-divider" />
      </div>
      <div className="rr-grid">
        <RateCard price="from $225" duration="~1-2 Hours" name="Portrait" desc="Just you, looking like yourself, only better. Let's make something you'll actually want to frame." popular />
        <RateCard price="from $250" duration="~1-2 Hours" name="Family" desc="Chaos, laughter, and all the good stuff in between. We'll catch the real moments." />
        <RateCard price="from $250" duration="~1-2 Hours" name="Newborn" desc="They won't stay this tiny for long. Let's make sure you never forget it." />
        <RateCard price="from $275" duration="~1-2 Hours" name="Birthday" desc="You only turn this age once, might as well have photos that show it off." />
        </div>
      <p className="rr-footnote">
        All sessions include basic edited photos - Delivery within 7 business days
      </p>
      <Footer/>
    </div>
  );
}