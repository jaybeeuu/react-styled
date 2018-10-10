import classNames from "classnames";
import PropTypes from "prop-types";
import React, { Component } from "react";

import * as styles from "./styles";

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
      onMouseEnter,
      onMouseLeave,
      style
    } = this.props;

    return (
      <button
        className={classNames(className, "material-icons")}
        style={style}
        onClick={this.onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span style={styles.icon}>{icon}</span>
      </button>
    );
  }
}

export default IconButton;
export { icons } from "./icons";