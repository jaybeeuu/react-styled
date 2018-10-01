import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import cssClasses from "./css-classes";

import "./_styles.scss";

const IconButton = ({ className, icon, onClick }) => (
  <button
    className={classNames(cssClasses.root, className, "material-icons")}
    onClick={onClick}
  >
    <span className={cssClasses.icon}>{icon}</span>
  </button>
);

IconButton.propTypes = {
  className: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default IconButton;
export { icons } from "./icons";