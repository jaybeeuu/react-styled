// import log from "../../../api/logger";
import classNames from "classnames";
import radium from "radium";
import PropTypes from "prop-types";
import React, { Component } from "react";

import * as styles from "./styles";

@radium
class IconButton extends Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    style: PropTypes.object,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func
  };

  onClick = (event) => {
    event.preventDefault();
    this.props.onClick(event);
  };

  render() {
    const {
      className,
      icon,
      style
    } = this.props;

    return (
      <button
        className={classNames(className, "material-icons")}
        style={[styles.button, style]}
        key={"button"}
        onClick={this.onClick}
      >
        <span
          key={"icon"}
          style={[
            styles.icon
          ]}
        >
          {icon}
        </span>
      </button>
    );
  }
}

export default IconButton;
export { icons } from "./icons";