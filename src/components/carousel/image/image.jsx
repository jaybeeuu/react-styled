import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Transition } from "react-transition-group";
import * as fromImages from "../../../redux/images/selectors";
import { setIsEditing, setImageDetailsVisible } from "../../../redux/ui/actions";
import IconButton, { icons } from "../../common/icon-button/icon-button";
import * as fromUi from "../../../redux/ui/selectors";
import { durations } from "../../styles/constants";

import cssClasses from "./css-classes";
import * as styles from "./styles";

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
      imageDetailsVisible,
      imageId,
      url,
      title,
      description,
      tags
    } = this.props;

    return (
      <div
        style={styles.root}
        data-image-id={imageId}
      >
        <img
          className={cssClasses.image}
          style={styles.image}
          src={url}
          alt={title}
          onClick={this.toggleImageDetailsVisible}
        />
        <Transition
          in={imageDetailsVisible}
          timeout={durations.complex}
          unmountOnExit
        >
          {(state) => (
            <div
              style={{
                ...styles.detailsContainer.default,
                ...styles.detailsContainer[state]
              }}
            >
              <div
                className={cssClasses.title}
                style={styles.title}
              >
                <h1>{title}</h1>
                <IconButton
                  className={cssClasses.editButton}
                  style={styles.editButton}
                  icon={icons.EDIT}
                  onClick={this.toggleIsEditing}
                />
              </div>
              <div style={styles.details}>
                <p
                  className={cssClasses.description}
                  style={styles.description}
                >
                  {description}
                </p>
                <ul style={styles.tags}>
                  {tags.map((tag, index) => (
                    <li key={index} style={styles.tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </Transition>
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