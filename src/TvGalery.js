import TvBox from "./tvBox";

function TvGalery(props) {

  return (
    <div className='d-flex p-3 text-center' style={{ overflowX: "auto" }}>
      <div className='d-flex flex-row' >
        {props.tv.filter(tv => tv.name.includes(props.query)).map((tv) => <TvBox key={tv.id} {...tv} />)}
      </div>
    </div>
  )
}

export default TvGalery;