import PropTypes from "prop-types";

function Header({ weatherData }) {
  return (
    <div className="header">
      <h1 className="title">Hello User</h1>
      {weatherData && (
        <div className="location">
          <p>
            <i className="fas fa-map-marker-alt"></i> {weatherData.name},{" "}
            {weatherData.sys.country}
          </p>
        </div>
      )}
    </div>
  );
}


Header.propTypes = {
  weatherData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sys: PropTypes.shape({
      country: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};



export default Header;