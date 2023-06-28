import React, { useState, useEffect } from "react";
import TvBox from "./tvBox";

const tvUrl = "https://api.themoviedb.org/3/tv/popular?api_key=8d97210e6edd66eb9e967278325836d0"

function TvGalery(props) {

  const [tv, setTv] = useState([]);

  useEffect(() => {
    fetch(tvUrl)
      .then((res) => res.json())
      .then(data => {
        setTv(data.results)
        console.log(data)
      })
  }, [])

  return (
    <div className='d-flex p-3 text-center' style={{ overflowX: "auto" }}>
      <div className='d-flex flex-row' >
        {tv.filter(tv => tv.name.includes(props.query)).map((tv) => <TvBox key={tv.id} {...tv} />)}
      </div>
    </div>
  )
}

export default TvGalery;