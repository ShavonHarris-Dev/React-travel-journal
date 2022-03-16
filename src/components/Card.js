const Card = (props) => {
  console.log("des",props.entry.description)
  return (
<article className="card">
<img src={props.entry.imageUrl} alt=""/>
<div className="card--content">
  <div className="locale"> 
  <img src="src/images/icon-position.svg"  alt="icon" />
  <p>{props.entry.location.toUpperCase}</p>
  <a href={props.entry.googleMapsUrl}>View On Google Maps</a>
  </div>
  <h2 className="card--title">{props.entry.title}</h2>
  <div className="date">
    {props.entry.startDate} -
    {props.entry.endDate}
  </div>
  <div className="description">{props.entry.description}</div>
  </div>
  </article>
    
  )
}

export default Card
