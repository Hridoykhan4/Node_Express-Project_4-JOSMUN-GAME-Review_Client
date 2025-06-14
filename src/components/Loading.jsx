import loadImg from '../assets/collected/gamming.webp'
const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-black">
      <div className="relative">
      
        <div className="absolute animate-spin rounded-full h-36 w-36 border-4 border-t-transparent border-b-transparent border-l-purple-500 border-r-blue-500 shadow-lg"></div>

      
        <div className="absolute h-28 w-28 rounded-full bg-gradient-to-br from-purple-900 to-indigo-900 blur-md opacity-30"></div>

   
        <img
          src={loadImg}
          alt="loading-avatar"
          className="relative h-28 w-28 rounded-full z-10 border-4 border-purple-700 shadow-purple-600 shadow-md"
        />
      </div>
    </div>
  );
};

export default Loading;
