import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

const cardsData = [
	{
		title: "Card title",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
	},
	{
		title: "Card title",
		text: "Explicabo magni sapiente, tempore debitis beatae culpa dolores blanditiis.",
	},
	{
		title: "Card title",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
	},
	{
		title: "Card title",
		text: "Explicabo magni sapiente, tempore debitis beatae culpa dolores blanditiis.",
	},
];

const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />

			<div className="container my-4">
				<div className="row">
					{cardsData.map((card, index) => (
						<div className="col-lg-3 col-md-6 mb-4" key={index}>
							<Card {...card} />
						</div>
					))}
				</div>
			</div>

			<footer className="bg-dark py-4 mt-4">
				<div className="container text-center">
					<p className="text-white mb-0">Copyright &copy; Your Website 2018</p>
				</div>
			</footer>
		</div>
	);
};

export default Home;
