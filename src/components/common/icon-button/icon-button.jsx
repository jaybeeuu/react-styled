import classNames from "classnames";
import PropTypes from "prop-types";
import React, { Component } from "react";
import cssClasses from "./css-classes";

import "./_styles.scss";

class IconButton extends Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  onClick = (event) => {
    event.preventDefault();
    this.props.onClick(event);
  };

  render() {
    const { className, icon } = this.props;
    return (
      <button
        className={classNames(cssClasses.root, className, "material-icons")}
        onClick={this.onClick}
      >
        <span className={cssClasses.icon}>{icon}</span>
      </button>
    );
  }
}

export default IconButton;
export { icons } from "./icons";