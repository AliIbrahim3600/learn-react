import data from "./data";
import "./Entry.css";
import marker from "./images/marker.png";
export default function Entries() {
  function Entry(props) {
    return (
      <article className="entry">
        <figure>
          <img className="main-img" src={props.img.src} alt={props.img.alt} />
        </figure>
        <div className="info-container">
          <img className="marker" src={marker} alt="map marker icon" />

          <span className="country">{props.country}</span>

          <a href={props.googleMapsLink} target="_blank">
            View On Google Maps
          </a>

          <h2 className="entry-title">{props.title}</h2>

          <p className="trip-dates">{props.dates}</p>

          <p className="entry-text">{props.text}</p>
        </div>
      </article>
    );
  }

  const entries = data.map((entry) => {
    return <Entry key={entry.id} {...entry} />;
  });

  return <>{entries}</>;
}
