export default function Header() {
  return (
    <header className="backdrop-blur-md bg-white/10 border-b border-white/20 px-4 py-3 fixed top-0 w-full z-50 mb-44">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white drop-shadow-lg">HermantoXYZ</span>
        </div>
        <nav className="flex items-center space-x-6">
          <a href="#history" className="text-white hover:text-blue-300 transition">History API</a>
          <a href="#quote" className="text-white hover:text-blue-300 transition">Quote API</a>
          <a href="#search" className="text-white hover:text-blue-300 transition">Search API</a>
          <a 
            href="https://github.com/hermantoXYZ/api-yahoo-finance" 
            target="_blank" 
            className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-4 py-2 rounded-b-xl shadow-md transition">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
