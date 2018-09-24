import PropTypes from "prop-types";
import React from "react";

const ImageForm = ({ title, description, tags }) => (
  <form>
    <p>
      <label htmlFor="title">Title</label>
      <input name="title" value={title} />
    </p>
    <p>
      <label htmlFor="description">Description</label>
      <input name="description" value={description} />
    </p>
    <p>
      <label htmlFor="tags">tags</label>
      <input name="tags" value={tags} />
    </p>
  </form>
);

ImageForm.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.string
};

export default ImageForm;