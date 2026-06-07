import "./includes.css";
import {
  Aperture,
  Zap,
  Layers,
  Sparkles,
  Armchair,
  ArrowUpToLine,
  UserRound,
  Wifi,
  LockKeyhole,
  Lightbulb,
  Square,
} from "lucide-react";

const items = [
  { icon: Square,         title: "Cyclorama wall",               desc: "Seamless infinity curve for clean, horizon-free shots" },
  { icon: Lightbulb,      title: "Professional lighting",        desc: "Studio strobes, continuous lights, and modifiers included" },
  { icon: Layers,         title: "Seamless backdrops",           desc: "Curated palette of paper rolls in multiple colorways" },
  { icon: Sparkles,       title: "Seasonal & editorial sets",    desc: "Rotating styled scenes for campaigns and lookbooks" },
  { icon: Armchair,       title: "Props & furniture",            desc: "Curated pieces for lifestyle, portrait, and product work" },
  { icon: ArrowUpToLine,  title: "High ceilings",                desc: "5m clearance for overhead rigs and wide-angle freedom" },
  { icon: UserRound,      title: "Changing area",                desc: "Private space with mirror, steamer, and garment rail" },
  { icon: Wifi,           title: "High-speed Wi-Fi & tethering", desc: "Dedicated gigabit connection for live tethered shooting" },
  { icon: LockKeyhole,    title: "Secure equipment storage",     desc: "Locked cases and shelving for gear between bookings" },
];

export default function Includes() {
  return (
    <div className="studio-page">
      <div className="studio-header">
        <p className="studio-the-space">The space</p>
        <h1 className="studio-heading">What's included</h1>
        <p className="studio-subheading">
          A purpose-built studio for photographers,<br />
          creators, and visual storytellers.
        </p>
        <div className="studio-line" />
      </div>

      <div className="studio-grid">
        {items.map(({ icon: Icon, title, desc }, i) => (
          <div key={i} className="item-card">
            <Icon className="item-icon" aria-hidden="true" strokeWidth={1} />
            <p className="item-title">{title}</p>
            <p className="item-desc">{desc}</p>
          </div>
        ))}
      </div>

      <p className="studio-footnote">
        All amenities included with every booking — no hidden add-ons.
      </p>
    </div>
  );
}