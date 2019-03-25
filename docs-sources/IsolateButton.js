import PropTypes from "prop-types";

var IsolateButton = function IsolateButton() {
  return "";
};

IsolateButton.propTypes = {
  name: PropTypes.string.isRequired,
  example: PropTypes.number,
  isolated: PropTypes.bool
};

export default IsolateButton;
