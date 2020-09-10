function News() {
  return (
    <div>
      <div className="py-4 px-3 flex justify-between">
        <div className="flex-col">
          <h1 className=" animate-wiggle font-medium">News</h1>
          <span className="text-xs text-gray-400">Braking & Trending</span>
        </div>
   
      </div>

      <div className="flex-col py-4 px-3 ">

        <div className="flex mb-4">
          <img className="w-20 h-20 rounded-lg" src="https://images.cointelegraph.com/images/638_aHR0cHM6Ly9zMy5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbS9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjAtMDkvMzIwZWI1OGQtOWRhYy00ZjBjLTlmMTctNWY5Yjc2OGE1NDY2LmpwZw==.jpg" />
          <div className="pl-4 flex-col">
            <h1 className="">Ren and UMA launch a Bitcoin-backed yield dollar</h1>
            <span className="text-xs text-gray-400">Cointelegraph &bull; 3d ago</span>
          </div>
        </div>

        <div className="flex mb-4">
          <img className="w-20 h-20 rounded-lg" src="https://images.cointelegraph.com/images/638_aHR0cHM6Ly9zMy5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbS9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjAtMDkvNDQ5M2ZhZDYtMWFhMy00OTYzLWJiYTItZWFhYmUyM2I3MjRmLmpwZw==.jpg" />
          <div className="pl-4 flex-col">
            <h1 className="">US legislators approve bills for study of blockchain in commerce</h1>
            <span className="text-xs text-gray-400">Cointelegraph &bull; 3d ago</span>
          </div>
        </div>

        <div className="flex mb-4">
          <img className="w-20 h-20 rounded-lg" src="https://www.tbstat.com/cdn-cgi/image/q=80/wp/uploads/2020/06/20200601_The_Logbook-Research-1196x675.jpg" />
          <div className="pl-4 flex-col">
            <h1 className="">The Logbook: The first time the SEC sued a minor</h1>
            <span className="text-xs text-gray-400">The Block &bull; 3d ago</span>
          </div>
        </div>

        <div className="flex mb-4">
          <img className="w-20 h-20 rounded-lg" src="https://images.cointelegraph.com/images/638_aHR0cHM6Ly9zMy5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbS9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjAtMDkvYWQ3MzIxMmItNTRmOS00YzJjLWE0OGQtMDI1MjUzZDMzNjY1LmpwZw==.jpg" />
          <div className="pl-4 flex-col">
            <h1 className="">ETC labs announces partnership with Chainalysis</h1>
            <span className="text-xs text-gray-400">Cointelegraph &bull; 3d ago</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News;