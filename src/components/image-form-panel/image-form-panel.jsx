import PropTypes from "prop-types";
import React from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import * as fromUi from "../../redux/ui/selectors";
import durations from "../styles/durations";
import ImageForm from "./image-form/image-form" ;
import cssClasses from "./css-classes";

import "./_styles.scss";

const ImageFormPanel = ({ selectedImageId, isEditing }) => (
  <div className={cssClasses.root}>
    <CSSTransition
      in={isEditing}
      timeout={durations.COMPLEX}
      classNames={cssClasses.form}
      unmountOnExit
    >
      <ImageForm
        imageId={selectedImageId}
        className={cssClasses.form}
      />
    </CSSTransition>
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