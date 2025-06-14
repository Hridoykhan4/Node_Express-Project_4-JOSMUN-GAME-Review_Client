import randomImg from "../assets/collected/ban10.jpg";
import { Fade, Zoom } from "react-awesome-reveal";

const TrendingGames = () => {
  const trending = [
    {
      id: 1,
      title: "Elden Ring",
      image: `https://i.ibb.co/YFkNfDYg/cybepunk.jpg`,
      genre: "RPG",
    },
    {
      id: 2,
      title: "Cyberpunk 2077",
      image: "https://i.ibb.co/ycX3Qg99/elden-Ring.jpg",
      genre: "Action",
    },
    {
      id: 3,
      title: "Hogwarts Legacy",
      image: randomImg,
      genre: "Adventure",
    },
  ];

  return (
    <section className="bg-gray-950 text-white py-12 px-6">
      <Fade direction="down" cascade damping={0.2} triggerOnce>
        <h2 className="text-3xl font-bold text-purple-500 mb-8 text-center drop-shadow-lg">
          🔥 Trending Games
        </h2>
      </Fade>

      <div className="grid gap-6 overflow-hidden sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {trending.map((game, idx) => (
          <Zoom
            direction="up"
            delay={idx * 100}
            duration={700}
            cascade
            triggerOnce
            key={game.id}
          >
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-purple-700/50 transition-transform duration-300">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-yellow-300 drop-shadow">
                  {game.title}
                </h3>
                <p className="text-sm text-pink-400 mt-1">{game.genre}</p>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </section>
  );
};

export default TrendingGames;
