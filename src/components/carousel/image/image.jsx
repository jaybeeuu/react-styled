import classNames from "classnames";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as fromImages from "../../../redux/images/selectors";
import { setImageDetailsVisible } from "../../../redux/ui/actions";
import * as fromUi from "../../../redux/ui/selectors";
import cssClasses from "./css-classes";

import "./_styles.scss";

class Image extends Component {
  static propTypes = {
    className: PropTypes.string,
    description: PropTypes.string,
    imageDetailsVisible: PropTypes.bool.isRequired,
    setImageDetailsVisible: PropTypes.func.isRequired,
    imageId: PropTypes.number.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string,
    url: PropTypes.string.isRequired
  };

  toggleImageDetailsVisible = () => {
    this.props.setImageDetailsVisible(!this.props.imageDetailsVisible);
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
      <div className={classNames(cssClasses.root, className)} data-image-id={imageId} onClick={this.toggleImageDetailsVisible} >
        { imageDetailsVisible ? (
          <h1 className={cssClasses.title}>{title}</h1>
        ) : null }
        <img className={cssClasses.image} src={url} alt={title} />
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
  imageDetailsVisible: fromUi.getImageDetailsVisible(state)
});

const mapDispatchToProps = ({
  setImageDetailsVisible
});

export default connect(mapStateToProps, mapDispatchToProps)(Image);