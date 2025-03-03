import numberFormatter from "../../utils/numberFormatter.js";

const Article = ({
  countryName,
  image,
  population,
  region,
  capital,
  clickHandler,
  country,
}) => {
  return (
    <article
      key={countryName}
      className="article"
      role="button"
      onClick={() => {
        clickHandler(country);
      }}
    >
      <div
        className="article--image"
        style={{ backgroundImage: `url(${image})` }}
        role="img"
      ></div>
      <div className="article-text">
        <h2 className="article--title">{countryName}</h2>
        <ul className="article--list">
          <li className="article--list-item">
            <strong>Population: </strong> {numberFormatter.format(population)}
          </li>
          <li className="article--list-item">
            <strong>Region: </strong> {region}
          </li>
          <li className="article--list-item">
            <strong>Capital: </strong> {capital}
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Article;
