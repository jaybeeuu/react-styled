import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import * as fromUi from "../../redux/ui/selectors";
import ImageForm from "./image-form/image-form" ;

const ImageFormPanel = ({ selectedImageId, isEditing }) => (
  <div>
    { isEditing ? (
      <ImageForm imageId={selectedImageId}/>
    ) : null }
  </div>
);

ImageFormPanel.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  selectedImageId: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  selectedImageId: fromUi.getSelectedImageId(state),
  isEditing: fromUi.getIsEditing(state)
});

export default connect(mapStateToProps)(ImageFormPanel);