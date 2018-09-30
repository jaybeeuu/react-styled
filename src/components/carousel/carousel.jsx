import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as fromImages from "../../redux/images/selectors";
import * as fromUi from "../../redux/ui/selectors";
import { setSelectedImageId } from "../../redux/ui/actions";
import Image from "./image";
import preload from "../../api/preload";

import "./_carousel.scss";

class Images extends Component {
  static propTypes = {
    imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectImage: PropTypes.func.isRequired,
    selectedImageId: PropTypes.number.isRequired
  };

  onComponentWillMount() {
    preload(...this.props.imageUrls);
  }

  selectNextImage() {
    const { selectImage, selectedImageId } = this.props;
    selectImage(selectedImageId + 1);
  }

  selectPreviousImage() {
    const { selectImage, selectedImageId } = this.props;
    selectImage(selectedImageId - 1);
  }

  render() {
    const { selectedImageId, imageUrls } = this.props;

    return (
      <div>
        {selectedImageId ? (
          <button onClick={this.selectPreviousImage.bind(this)}>{"<"}</button>
        ) : null}
        <Image imageId={selectedImageId} />
        {selectedImageId === imageUrls.length - 1? (
          <button onClick={this.selectNextImage.bind(this)}>{">"}</button>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  imageUrls: fromImages.getAllUrls(state),
  selectedImageId: fromUi.getSelectedImageId(state),
});

const mapDispatchToProps = {
  setSelectedImageId
};

export default connect(mapStateToProps, mapDispatchToProps)(Images);