import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

const IconButton = ({ className, icon, onClick }) => (
  <button
    className={classNames(className, "material-icons")}
    onClick={onClick}
  >
    {icon}
  </button>
);

IconButton.propTypes = {
  className: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default IconButton;
export { icons } from "./icons";