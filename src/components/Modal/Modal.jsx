import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

import formatter from "../../utils/numberFormatter";
import { countryCodes } from "../../utils/countryNames";

import "./modal.css";

const ResultModal = forwardRef(function ResultModal({ region, onClose }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} onClose={onClose}>
      <form method="dialog" onSubmit={onClose}>
        <button className="dialog--button">
          <FontAwesomeIcon icon={faArrowLeftLong} />
          <span>Back</span>
        </button>
      </form>

      <section className="modal">
        <img
          src={region.flags.svg}
          alt={`${region.name.common} Flag`}
          className="modal--image"
        />
        <div>
          <h2 className="modal--title">{region.name.common}</h2>
          <div className="modal--list-container">
            <ul className="modal--list">
              <li className="modal--list-item">
                <strong>Native Name: </strong>{" "}
                {Object.values(region.name.nativeName).slice(-1)[0]?.common}
              </li>
              <li className="modal--list-item">
                <strong>Population: </strong>{" "}
                {formatter.format(region.population)}
              </li>
              <li className="modal--list-item">
                <strong>Region: </strong> {region.region}
              </li>
              <li className="modal--list-item">
                <strong>Sub Region: </strong> {region.subregion}
              </li>
              <li className="modal--list-item">
                <strong>Capital: </strong> {region.capital}
              </li>
            </ul>
            <ul className="modal--list">
              <li className="modal--list-item">
                <strong>Top Level Domain: </strong> {region.tld}
              </li>
              <li className="modal--list-item">
                <strong>Currencies: </strong>{" "}
                {Object.values(region.currencies).slice(-1)[0]?.name}
              </li>
              <li className="modal--list-item">
                <strong>Languages: </strong>{" "}
                {Object.values(region.languages).join(", ")}
              </li>
            </ul>
          </div>
          {region.borders && (
            <div className="modal--borders">
              <h3 className="modal--borders-title">Border Countries: </h3>
              <ul className="modal--borders-list">
                {region.borders.map((border, index) => (
                  <li key={index} className="modal--borders-list-item">
                    {countryCodes[border]}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
