import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import * as fromImages from "../../../redux/images/selectors";
import cssClasses from "./css-classes";

import "./_styles.scss";

const ImageForm = ({ title, description, tags }) => (
  <form className={cssClasses.root}>
    <p>
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
      />
    </p>
    <p>
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
      />
    </p>
    <p>
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
      />
    </p>
  </form>
);

ImageForm.propTypes = {
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string
};

const mapStateToProps = (state, { imageId }) => ({
  ...fromImages.getImage(state, imageId),
});


export default connect(mapStateToProps)(ImageForm);