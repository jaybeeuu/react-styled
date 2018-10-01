import classNames from "classnames";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as fromImages from "../../../redux/images/selectors";
import { setDescription, setTags, setTitle } from "../../../redux/images/actions";
import { setIsEditing } from "../../../redux/ui/actions";
import cssClasses from "./css-classes";

import "./_styles.scss";

class ImageForm extends Component {
  static propTypes = {
    className: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string,
    setDescription: PropTypes.func.isRequired,
    setTags: PropTypes.func.isRequired,
    setTitle: PropTypes.func.isRequired,
    setIsEditing: PropTypes.func.isRequired
  };

  onDescriptionChanged = (e) => {
    this.props.setDescription(e.target.value);
  };

  onTagsChanged = (e) => {
    this.props.setTags(e.target.value.split(","));
  };

  onTitleChanged = (e) => {
    this.props.setTitle(e.target.value);
  };

  onDoneClicked = () => this.props.setIsEditing(false);

  render() {
    const {
      className,
      title,
      description,
      tags
    } = this.props;
    return (
      <form className={classNames(cssClasses.root, className)}>
        <p className={cssClasses.fieldGroup}>
          <label
            className={cssClasses.label}
            htmlFor="image-title"
          >
            Title
          </label>
          <input
            className={cssClasses.field}
            name="image-title"
            value={title}
            onChange={this.onTitleChanged}
          />
        </p>
        <p className={cssClasses.fieldGroup}>
          <label
            className={cssClasses.label}
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className={cssClasses.field}
            name="description"
            value={description}
            onChange={this.onDescriptionChanged}
          />
        </p>
        <p className={cssClasses.fieldGroup}>
          <label
            className={cssClasses.label}
            htmlFor="tags"
          >
            Tags
          </label>
          <input
            className={cssClasses.field}
            name="tags"
            value={tags}
            onChange={this.onTagsChanged}
          />
        </p>
        <p className={cssClasses.fieldGroup}>
          <button
            className={cssClasses.button}
            onClick={this.onDoneClicked}
          >
            Done
          </button>
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