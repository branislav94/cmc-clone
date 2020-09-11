import fetch from 'isomorphic-unfetch'
import Link from "next/link";

const Newstest = (props) => {

    console.warn("porn", props.porn)

    return (

        <div className="py-4 px-3 bg-black flex justify-between">
            <div className="flex-col text-white">
                <h1 className="font-bold text-lg my-2">
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
                            <div className="flex text-gray-400 mb-4">
                                <p>{data.video.views} Views</p>
                                <p className="mx-2">Rating: {data.video.rating}%</p>
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
