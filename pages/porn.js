import fetch from 'isomorphic-unfetch'
import Link from "next/link";

const Newstest = (props) => {

    console.warn("porn", props.porn)

    return (

        <div className="py-4 px-3 bg-black flex justify-between">
            <div className="flex-col text-white">
                <h1 className="font-bold text-xl my-2">
                    Hot Porn Videos</h1>
                {
                    props.porn.map((data, index) => (
                        <Link href={data.video.embed_url}>
                        <div key={index} >
                            <div>
                                <div className="relative w-full h-48">
                                    <img
                                        className="relative w-full h-48 shadow-inner"
                                        src={data.video.default_thumb} />
                                    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-75' />
                                </div>
                            </div>
                            <p className="float-right relative"
                                style={{
                                    top: "-40px",
                                    margin: "10px"
                                }}
                            >{data.video.duration}</p>
                            <h2
                                className="text-gray-200 mt-2 ">
                                {data.video.title}</h2>
                            <div className="flex text-gray-400 mb-4 text-sm">
                                <p>{data.video.views} Views</p>
                                <LikeIcon className="mx-2 pt-1 h-5 w-5"/><p>{data.video.rating}%</p>
                            </div>
                            {/* <p>Tags: {data.video.tags.$tag_name}</p> */}
                        </div>
                        </Link>
                    ))
                }
                {/* <h2>{props.person.name.first}</h2>
                <h3>{props.person.name.last}</h3> */}
                {/* <h2>{props.actress}</h2> */}
            </div>
        </div>
    )
}

Newstest.getInitialProps = async () => {
    const res = await fetch('https://api.redtube.com/?data=redtube.Videos.searchVideos&output=json&search=hard&tags[]=Public&thumbsize=big');
    const data = await res.json();
    // this.setState({person: data.results[0]})
    return {
        porn: data.videos
    }
}

export default Newstest;


function LikeIcon({ className }) {
    return (
<svg className={`fill-current stroke-current stroke-0 ${className}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" /></svg>
    );
  }

