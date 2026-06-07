import "./RateCard.css";

export default function RateCard({ price, duration, name, desc, popular = false }) {
  return (
    <div className={`rr-card ${popular ? "popular" : ""}`}>
      {popular && <div className="rr-popular-badge">Popular</div>}
      <div className="rr-price">{price}</div>
      <div className="rr-duration">{duration}</div>
      <div className="rr-name">{name}</div>
      <div className="rr-desc">{desc}</div>
      <div className="rr-line" />
      <button className="rr-book-btn">Book This Rate</button>
    </div>
  );
}