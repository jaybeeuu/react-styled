import PropTypes from "prop-types";
import React from "react";
import { Transition } from "react-transition-group";
import { connect } from "react-redux";
import * as fromUi from "../../redux/ui/selectors";
import { durations } from "../styles/constants";
import ImageForm from "./image-form/image-form" ;

import * as styles from "./styles";

const ImageFormPanel = ({ selectedImageId, isEditing }) => (
  <Transition
    in={isEditing}
    timeout={durations.complex}
    unmountOnExit
  >
    {(state) => (
      <ImageForm
        imageId={selectedImageId}
        style={{
          ...styles.form.default,
          ...styles.form[state]
        }}
      />
    )}
  </Transition>
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