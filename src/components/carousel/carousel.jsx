import PropTypes from "prop-types";
import radium from "radium";
import React, { Component } from "react";
import { connect } from "react-redux";
import preload from "../../api/preload";
import * as fromImages from "../../redux/images/selectors";
import { setSelectedImageId } from "../../redux/ui/actions";
import * as fromUi from "../../redux/ui/selectors";
import IconButton, { icons } from "../common/icon-button/icon-button";
import cssClasses from "./css-classes";
import Image from "./image/image";

import * as styles from "./styles";

@radium
class Carousel extends Component {
  static propTypes = {
    imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
    setSelectedImageId: PropTypes.func.isRequired,
    selectedImageId: PropTypes.number.isRequired,
    style: PropTypes.object
  };

  state = {
    leftNavButtonHovered: false,
    rightNavButtonHovered: false
  };

  componentDidMount() {
    preload(...this.props.imageUrls);
  }

  selectNextImage() {
    const { setSelectedImageId, selectedImageId } = this.props;
    setSelectedImageId(selectedImageId + 1);
  }

  selectPreviousImage() {
    const { setSelectedImageId, selectedImageId } = this.props;
    setSelectedImageId(selectedImageId - 1);
  }

  render() {
    const {
      imageUrls,
      selectedImageId,
      style
    } = this.props;

    const isFirstImage = !selectedImageId;
    const isLastImage = selectedImageId === imageUrls.length - 1;

    return (
      <div style={{ ...styles.root, ...style }} >
        { !isFirstImage ? (
          <IconButton
            className={cssClasses.navButtonLeft}
            icon={icons.CHEVRON_LEFT}
            onClick={this.selectPreviousImage.bind(this)}
            style={styles.navButton.left}
          />
        ) : null }
        <Image className={cssClasses.image} imageId={selectedImageId} />
        { !isLastImage ? (
          <IconButton
            className={cssClasses.navButtonRight}
            icon={icons.CHEVRON_RIGHT}
            onClick={this.selectNextImage.bind(this)}
            style={styles.navButton.right}
          />
        ) : null }
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

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);