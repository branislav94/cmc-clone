import fetch from 'isomorphic-unfetch'

const Newstest = (props) => {

    console.warn("actress", props)

    return (

        <div className="py-4 px-3 flex justify-between">
            <div className="flex-col">
                <h1 className=" animate-wiggle font-medium">News</h1>
                <span className="text-xs text-gray-400">Testing</span>
                <img className="mt-1/2" src="images/undraw_join_of2w.png" />
                {
                    props.actress.map((data, index) => (
                        <div key={ index }>
                        <h1 className="text-black">
                            {index + 1}</h1>
                            <h2 className="text-black">
                            {data.star}</h2>
                            <img src={data.star_thumb} />
                        </div>
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
    const res = await fetch('https://api.redtube.com/?data=redtube.Stars.getStarDetailedList&output=json');
    const data = await res.json();
    // this.setState({person: data.results[0]})
    return {
       actress: data.stars
    }
}

export default Newstest;
