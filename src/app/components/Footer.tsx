export default function Footer() {
  return (
       <footer className="bg-[#1a1a1a] py-10 px-6 border-t border-gray-700">
       <div className="max-w-7xl mx-auto">
         <div className="flex flex-col md:flex-row justify-between items-center">
           <div className="mb-4 md:mb-0">
             <p className="text-gray-400">
               Powered by <a href="https://www.npmjs.com/package/yahoo-finance2" 
                           className="text-blue-400 hover:underline" 
                           target="_blank">hermantoXYZ</a>
             </p>
           </div>
           <div className="flex space-x-6">
             <a href="https://github.com/hermantoXYZ/api_yahoo_finance" 
                target="_blank" 
                className="text-gray-400 hover:text-white">GitHub</a>
             <a href="#docs" className="text-gray-400 hover:text-white">Documentation</a>
             <a href="#" className="text-gray-400 hover:text-white">Examples</a>
           </div>
         </div>
       </div>
     </footer>
  );
}