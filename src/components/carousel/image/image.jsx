import classNames from "classnames";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as fromImages from "../../../redux/images/selectors";
import { setIsEditing, setImageDetailsVisible } from "../../../redux/ui/actions";
import * as fromUi from "../../../redux/ui/selectors";
import IconButton, { icons } from "../../common/icon-button/icon-button";
import cssClasses from "./css-classes";

import "./_styles.scss";

class Image extends Component {
  static propTypes = {
    className: PropTypes.string,
    description: PropTypes.string,
    imageDetailsVisible: PropTypes.bool.isRequired,
    imageId: PropTypes.number.isRequired,
    isEditing: PropTypes.bool.isRequired,
    setImageDetailsVisible: PropTypes.func.isRequired,
    setIsEditing: PropTypes.func.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string,
    url: PropTypes.string.isRequired
  };

  toggleImageDetailsVisible = () => {
    this.props.setImageDetailsVisible(!this.props.imageDetailsVisible);
  };

  toggleIsEditing = () => {
    this.props.setIsEditing(!this.props.isEditing);
  };

  render() {
    const {
      className,
      imageDetailsVisible,
      imageId,
      url,
      title,
      description,
      tags
    } = this.props;

    return (
      <div
        className={classNames(cssClasses.root, className)}
        data-image-id={imageId}
      >
        { imageDetailsVisible ? (
          <div className={cssClasses.title}>
            <h1>{title}</h1>
            <IconButton
              className={cssClasses.editButton}
              icon={icons.EDIT}
              onClick={this.toggleIsEditing}
            />
          </div>
        ) : null }
        <img
          className={cssClasses.image}
          src={url}
          alt={title}
          onClick={this.toggleImageDetailsVisible}
        />
        { imageDetailsVisible ? (
          <div className={cssClasses.details}>
            <p className={cssClasses.description}>{description}</p>
            <ul className={cssClasses.tags}>
              {tags.map((tag, index) => (
                <li className={cssClasses.tag} key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        ) : null }
      </div>
    );
  }
}

const mapStateToProps = (state, { imageId }) => ({
  ...fromImages.getImage(state, imageId),
  isEditing: fromUi.getIsEditing(state),
  imageDetailsVisible: fromUi.getImageDetailsVisible(state)
});

const mapDispatchToProps = ({
  setImageDetailsVisible,
  setIsEditing
});

export default connect(mapStateToProps, mapDispatchToProps)(Image);