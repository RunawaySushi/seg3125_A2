import "./StudioRates.css";
import RateCard from "./RateCard.jsx";
import NavBar from "./NavBar.jsx"
import Footer from "./Footer.jsx"

export default function StudioRates({ setPage }) {
  return (
     
      <div className="rr-wrap">
         <NavBar setPage={setPage}/>
      
        <div className="rr-header">
          <p className="rr-eyebrow">Pricing</p>
          <h1 className="rr-title">Studio Rental Rates</h1>
          <p className="rr-sub">
            Clear, all-inclusive pricing designed to support creators of all levels.
            No hidden fees, just pure creative space.
          </p>
          <div className="rr-divider" />
        </div>
        <div className="rr-grid">
          <RateCard price="$70" duration="1 Hour" name="The Quick Rental" desc="Need something fast? Perfect for headshots, casting, or a quick product shoots." />
          <RateCard price="$120" duration="2 Hours" name="Standard Rental" desc="Most people start here, great for portraits, content days, and everyday shoots." popular />
          <RateCard price="$225" duration="Half Day" name="4 Hour Block" desc="Got a bigger project? This gives you the time and space to make it happen." />
          <RateCard price="$400" duration="Full Day" name="8 Hour Access" desc="The whole studio, all yours for the day. Bring the whole crew." />
        </div>
        <p className="rr-footnote">
          Lighting, backdrops & amenities included - 48hr notice required
        </p>

        <Footer/>
      </div>

     
  );
}