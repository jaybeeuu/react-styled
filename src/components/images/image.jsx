import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import * as fromImages from "../../redux/images/selectors";

export const Image = ({ imageId, url, title, description, tags }) => (
  <div data-image-id={imageId}>
    <p>{title}</p>
    <img src={url} alt={title} />
    <p>{description}</p>
    <ul>
      {tags.map((tag, index) => <li key={index}>{tag}</li>)}
    </ul>
  </div>
);

Image.propTypes = {
  description: PropTypes.string,
  imageId: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  url: PropTypes.string
};

const mapStateToProps = (state, { imageId }) => ({
  ...fromImages.getImage(state, imageId)
});

export default connect(mapStateToProps)(Image);