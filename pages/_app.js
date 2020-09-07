import "tailwindcss/tailwind.css";
import { Link } from "../components/Link";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex justify-between items-center px-4 py-3 border-b">
        <MenuIcon className="p-px text-blue-500 w-7 h-7" />
        <img className="h-10"
          src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg?_=61a2093"
        />
        <SearchIcon className="p-px text-blue-500 w-7 h-7" />
      </header>
      <main className="flex-1">
        <Component {...pageProps} />
      </main>

      {/* <footer className="flex border-t border-gray-200">

        <Link to="/">
          <a className="flex items-center justify-center w-1/4 py-3 text-center" href="">
            <HomeIcon className="w-7 h-7" />
          </a>
        </Link>

        <Link to="/market"><a className="flex items-center justify-center w-1/4 py-3 text-center" href="">
          <ChartIcon className="w-7 h-7" />
        </a>
        </Link>

        <Link to="/portfolio">
          <a className="flex items-center justify-center w-1/4 py-3 text-center" href="">
            <PieIcon className="w-7 h-7" />
          </a>
        </Link>

        <Link to="/settings">
          <a className="flex items-center justify-center w-1/4 py-3 text-center" href="">
            <DotsIcon className="w-7 h-7" />
          </a>
        </Link>

      </footer> */}
      <footer className="flex border-t border-gray-200">
        <Link
          href="/"
          className="flex items-center justify-center w-1/4 py-5"
        >
          {({ isActive }) =>
            isActive ? (
              <HomeIcon className="p-px text-blue-500 w-7 h-7" />
            ) : (
                <HomeIconEmpty className="p-px text-gray-500 w-7 h-7" />
              )
          }
        </Link>
        <Link
          href="/market"
          className="flex items-center justify-center w-1/4 py-3 text-gray-500"
        >
          {({ isActive }) =>
            isActive ? (
              <ChartIcon className="p-px text-blue-500 w-7 h-7" />
            ) : (
                <ChartIconEmpty className="p-px text-gray-500 w-7 h-7" />
              )
          }
        </Link>
        <Link
          href="/portfolio"
          className="flex items-center justify-center w-1/4 py-3 text-gray-500"
        >
          {({ isActive }) =>
            isActive ? (
              <PieIcon className="p-px text-blue-500 w-7 h-7" />
            ) : (
                <PieIconEmpty className="p-px text-gray-500 w-7 h-7" />
              )
          }
        </Link>
        <Link
          href="/news"
          className="flex items-center justify-center w-1/4 py-3 text-gray-500"
        >
          {({ isActive }) =>
            isActive ? (
              <NewsIcon className="p-px text-blue-500 w-7 h-7" />
            ) : (
                <NewsIconEmpty className="p-px text-gray-500 w-7 h-7" />
              )
          }
        </Link>
        <Link
          href="/settings"
          className="flex items-center justify-center w-1/4 py-3 text-gray-500"
        >
          {({ isActive }) =>
            isActive ? (
              <DotsIcon className="p-px text-blue-500 w-7 h-7" />
            ) : (
                <DotsIconEmpty className="p-px text-gray-500 w-7 h-7" />
              )
          }
        </Link>
      </footer>
    </div>
  )
}

export default MyApp

function MenuIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="menu-alt3 w-6 h-6"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
  );
}


function SearchIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="search w-6 h-6"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
  );
}

function HomeIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor"  className={`fill-current stroke-current stroke-0 ${className}`}><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
  );
}


function HomeIconEmpty({ className }) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"  className={`stroke-0 ${className}`}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
  );
}

function PieIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20"
      fill="currentColor"
      className={`fill-current stroke-current stroke-0 ${className}`}>
      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></svg>);
}
function PieIconEmpty({ className }) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="chart-pie w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
  );
}

function ChartIconEmpty({ className }) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="chart-bar w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

function ChartIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20"
      fill="currentColor"
      className={`fill-current stroke-current stroke-0 ${className}`}><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
    </svg>
  );
}

function DotsIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20"
      fill="currentColor"
      className={`fill-current stroke-current stroke-0 ${className}`}><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" /></svg>
      );
}


function DotsIconEmpty({ className }) {
  return (
    <svg viewBox="0 0 20 20"
      fill="currentColor"
      className={`fill-current stroke-current stroke-0 ${className}`}><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" /></svg>
      );
}


function NewsIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor"  className={`fill-current stroke-current stroke-0 ${className}`}><path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" /><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" /></svg>
    );
}


function NewsIconEmpty({ className }) {
  return (
<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="newspaper w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
      );
}