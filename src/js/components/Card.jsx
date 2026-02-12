const Card = ({ title, text, imageUrl, buttonText, buttonUrl }) => {
	return (
		<div className="card h-100">
			<img
				className="card-img-top"
				src={imageUrl || "https://placehold.co/500x325"}
				alt={title}
			/>
			<div className="card-body text-center d-flex flex-column align-items-center">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{text}</p>
				<a href={buttonUrl || "#"} className="btn btn-primary mt-auto">
					{buttonText || "Find Out More!"}
				</a>
			</div>
		</div>
	);
};

export default Card;
