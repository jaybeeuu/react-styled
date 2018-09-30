import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import * as fromImages from "../../../redux/images/selectors";
import cssClasses from "./css-classes";

import "./_styles.scss";

export const Image = ({ className, imageId, url, title, description, tags }) => (
  <div className={classNames(cssClasses.root, className)} data-image-id={imageId}>
    <h1 className={cssClasses.title}>{title}</h1>
    <img className={cssClasses.image} src={url} alt={title} />
    <div className={cssClasses.details}>
      <p className={cssClasses.description}>{description}</p>
      <ul className={cssClasses.tags}>
        {tags.map((tag, index) => (
          <li className={cssClasses.tag} key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  </div>
);

Image.propTypes = {
  className: PropTypes.string,
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