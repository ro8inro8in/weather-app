import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const ForecastDetails = ({ forecast }) => {
  const { date, humidity, temperature, wind } = forecast;
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-details__humidty">{humidity}</div>
      <div className="forecast-details__temperature">
        {temperature.min}
        &deg;C
      </div>
      <div className="forecast-details__temperature">
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-details__wind__speed">{wind.speed}</div>
      <div className="forecast-details__wind__direction">{wind.direction}</div>
    </div>
  );
};

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
