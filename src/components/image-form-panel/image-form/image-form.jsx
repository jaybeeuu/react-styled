import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as fromImages from "../../../redux/images/selectors";
import { setDescription, setTags, setTitle } from "../../../redux/images/actions";
import { setIsEditing } from "../../../redux/ui/actions";
import IconButton, { icons } from "../../common/icon-button/icon-button";
import cssClasses from "./css-classes";

import * as styles from "./styles";

class ImageForm extends Component {
  static propTypes = {
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string,
    setDescription: PropTypes.func.isRequired,
    setTags: PropTypes.func.isRequired,
    setTitle: PropTypes.func.isRequired,
    setIsEditing: PropTypes.func.isRequired,
    style: PropTypes.object
  };

  onDescriptionChanged = (event) => {
    this.props.setDescription(event.target.value);
  };

  onTagsChanged = (event) => {
    this.props.setTags(event.target.value.split(","));
  };

  onTitleChanged = (event) => {
    this.props.setTitle(event.target.value);
  };

  onCloseClicked = (event) => {
    this.props.setIsEditing(false);
    event.preventDefault();
  };

  render() {
    const {
      title,
      description,
      tags,
      style
    } = this.props;
    return (
      <form style={{ ...styles.root, ...style }}>
        <IconButton
          id={cssClasses.closeButton}
          className={cssClasses.closeButton}
          icon={icons.CHEVRON_RIGHT}
          onClick={this.onCloseClicked}
          style={styles.closeButton}
        />
        <p>
          <label
            className={cssClasses.label}
            htmlFor="image-title"
            style={styles.label}
          >
            Title
          </label>
          <input
            className={cssClasses.field}
            name="image-title"
            onChange={this.onTitleChanged}
            style={styles.field}
            value={title}
          />
        </p>
        <p>
          <label
            className={cssClasses.label}
            htmlFor="description"
            style={styles.label}
          >
            Description
          </label>
          <textarea
            className={cssClasses.field}
            name="description"
            onChange={this.onDescriptionChanged}
            style={styles.textarea}
            value={description}
          />
        </p>
        <p>
          <label
            className={cssClasses.label}
            htmlFor="tags"
            style={styles.label}
          >
            Tags
          </label>
          <input
            className={cssClasses.field}
            name="tags"
            onChange={this.onTagsChanged}
            value={tags}
            style={styles.field}
          />
        </p>
      </form>
    );
  }
}

const mapStateToProps = (state, { imageId }) => ({
  ...fromImages.getImage(state, imageId),
});

const mapDispatchToProps = (dispatch, { imageId }) => ({
  setDescription: (description) => dispatch(setDescription(imageId, description)),
  setTags: (tags) => dispatch(setTags(imageId, tags)),
  setTitle: (title) => dispatch(setTitle(imageId, title)),
  setIsEditing: (isEditing) => dispatch(setIsEditing(isEditing))
});


export default connect(mapStateToProps, mapDispatchToProps)(ImageForm);