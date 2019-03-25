import React from "react";
import PropTypes from "prop-types";
// import TabButton from "rsg-components/TabButton";

var UsageTabButton = function UsageTabButton(props) {
  // var component = props.props;
  var showButton = true; // component.props || component.methods && component.methods.length > 0 || component.slots && Object.keys(component.slots).length > 0 || component.events && Object.keys(component.events).length > 0;
  return showButton
    ? React.createElement("h2", props, "Properties, methods and events")
    : null;
};

UsageTabButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  props: PropTypes.shape({
    props: PropTypes.array,
    methods: PropTypes.array
  }).isRequired,
  active: PropTypes.bool
};
export default UsageTabButton;
