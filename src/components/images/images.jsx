import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as fromImages from "../../redux/images/selectors";
import Image from "./image";
import preload from "../../api/preload";

class Images extends Component {
  static propTypes = {
    imageIds: PropTypes.arrayOf(PropTypes.string),
    imageUrls: PropTypes.arrayOf(PropTypes.string),
  };

  onComponentWillMount() {
    preload(...this.props.imageUrls);
  }

  render() {
    const { imageIds } = this.props;
    return (
      <ul>
        {imageIds.map(imageId => (
          <li key={imageId}>
            <Image imageId={imageId} />
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  imageIds: fromImages.getAllIds(state),
  imageUrls: fromImages.getAllUrls(state)
});

export default connect(mapStateToProps)(Images);