
function Home() {
  return (
    <div className="bg-black">
      <div className="px-4 py-5 flex justify-between text-white">
        <h1 className="animate-bounce font-medium text-white">Home</h1>
        <SearchIcon className="animate-pulse text-gray-400 w-6 h-6" />
      </div>
      <div className="bg-blue-500 rounded-t-lg text-white">
        {/* <div className="translate-x-0 animate-slideshow text-xs inline-block whitespace-no-wrap">
          <p className="px-4 py-1">
            <strong>Market Cap: </strong> $332,907,359,21624h &bull;
            <strong> Vol: </strong> $129,040,363,032BTC &bull;
            <strong> Dominance:</strong>  57.0% &bull;
            <strong> Cryptocurrencies:</strong>  6,978 &bull;
            <strong> Markets:</strong> 28,647</p>
        </div> */}
        <marquee className="text-xs py-1"behavior="scroll" direction="left"><strong>Market Cap: </strong> $332,907,359,21624h &bull;
            <strong> Vol: </strong> $129,040,363,032BTC &bull;
            <strong> Dominance:</strong>  57.0% &bull;
            <strong> Cryptocurrencies:</strong>  6,978 &bull;
            <strong> Markets:</strong> 28,647
            </marquee>

        <div className="p-3 bg-white rounded-t-lg text-black">


          <div className="flex">
            <div className="w-2/4 p-3 m-2 rounded-lg flex shadow-lg align-middle">
              <div className="bg-teal-400 rounded-full w-8 h-8">
                <PriceIcon className="animate-pulse text-white m-2 w-4 h-4" /></div>
              <p className="py-2 px-4 text-xs align-text-middle">Price Alerts</p>
            </div>
            <div className="w-2/4 p-3 m-2 rounded-lg flex shadow-lg align-middle">
              <div className="bg-pink-500 rounded-full w-8 h-8">
                <CompareIcon className="animate-pulse text-white m-2 w-4 h-4" /></div>
              <p className="py-2 px-4 text-xs align-text-middle">Compare</p>
            </div>
          </div>
          <div className="flex">
            <div className="w-2/4 p-3 m-2 rounded-lg flex shadow-lg align-middle">
              <div className="bg-blue-500 rounded-full w-8 h-8">
                <ConvertIcon className="animate-pulse text-white m-2 w-4 h-4" /></div>
              <p className="py-2 px-4 text-xs align-text-middle">Convert</p>
            </div>
            <div className="w-2/4 p-3 m-2 rounded-lg flex shadow-lg align-middle">
              <div className="bg-purple-400 rounded-full w-8 h-8">
                <EyeIcon className="animate-pulse text-white stroke-1 m-2 w-4 h-4" /></div>
              <p className="py-2 px-4 text-xs align-text-middle">Watchlist</p>
            </div>
          </div>
          <h1 className="py-4 px-3 animate-wiggle font-medium">Top Coins</h1>

          <div className="flex animate-flow">
            <div className="flex-col p-4 m-2 rounded-lg flex shadow-lg align-middle">
              <div className="bg-orange-400 rounded-full w-8 h-8">
                <USDIcon className="animate-pulse text-white stroke-1 m-2 w-4 h-4" /></div>
              <p className="pt-4 mr-15 text-sm align-text-middle">Bitcoin</p>
              <p className="text-gray-400 text-xs align-text-middle">$10,267.64</p>
              <p className="pt-3 text-xs align-text-middle"><span className="text-green-400">&#9650;</span> 2.63%</p>
            </div>
            <div className="flex-col p-4 m-2 rounded-lg flex shadow-lg align-middle">
              <div className="bg-gray-600 rounded-full w-8 h-8">
                <USDIcon className="animate-pulse text-white stroke-1 m-2 w-4 h-4" /></div>
              <p className="pt-4 mr-15 text-sm align-text-middle">Ehereum</p>
              <p className="text-gray-400 text-xs align-text-middle">$355.34</p>
              <p className="pt-3 text-xs align-text-middle"><span className="text-red-600">&#9660;</span> -12.63%</p>
            </div>
            <div className="flex-col p-4 m-2 rounded-lg flex shadow-lg align-middle">
              <div className="bg-green-600 rounded-full w-8 h-8">
                <USDIcon className="animate-pulse text-white stroke-1 m-2 w-4 h-4" /></div>
              <p className="pt-4 mr-15 text-sm align-text-middle">Tether</p>
              <p className="text-gray-400 text-xs align-text-middle">$10,267.64</p>
              <p className="pt-3 text-xs align-text-middle"><span className="text-green-400">&#9650;</span> 2.63%</p>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}

export default Home;

function SearchIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20"
      fill="currentColor"
      className={`fill-current stroke-current stroke-0 ${className}`}>
      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
  );
}

function EyeIcon({ className }) {
  return (
    <svg
      className={`fill-current stroke-current stroke-0 ${className}`}
      fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
  );
}
function PriceIcon({ className }) {
  return (
    <svg
      className={`fill-current stroke-current stroke-0 ${className}`}
      fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"></path></svg>
  );
}
function CompareIcon({ className }) {
  return (
    <svg className={`fill-current stroke-current stroke-0 ${className}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
  );
}

function ConvertIcon({ className }) {
  return (
    <svg className={`fill-current stroke-current stroke-0 ${className}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
  );
}


function USDIcon({ className }) {
  return (
    <svg className={`fill-current stroke-current stroke-0 ${className}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" /><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
    </svg>
  );
}