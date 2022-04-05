import "./Card.css";

export default function Card({ coverImg, stats, location, title, price, openSpots }) {
	let badgeText;
	if (openSpots === 0) {
		badgeText = "SOLD OUT";
	} else if (location === "Online") {
		badgeText = "ONLINE";
	}
	return (
		<>
			<div className="card">
				{badgeText && <div className="card-badge">{badgeText}</div>}
				<img className="card-image" src={`images/${coverImg}`} />
				<div className="card-info">
					<img src="images/star.png" className="rating-star" />
					<span className="rating-num">{stats.rating.toFixed(1)}</span>
					<span className="review-count">({stats.reviewCount}) &#8226; </span>
					<span className="country">{location}</span>
				</div>
				<p className="card-title">{title}</p>
				<p className="card-price">
					<strong>From ${price}</strong>/ Person
				</p>
			</div>
		</>
	);
}
