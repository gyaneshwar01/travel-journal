export default function Card(props) {
  return (
    <div className="card">
      <img src={props.imageUrl} alt="" />
      <div className="card-text">
        <p>
          <span className="location">{props.location}</span>{" "}
          <span className="gray">View on Google Maps</span>
        </p>
        <h1>{props.title}</h1>
        <h3>
          {props.startDate} - {props.endDate}
        </h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
