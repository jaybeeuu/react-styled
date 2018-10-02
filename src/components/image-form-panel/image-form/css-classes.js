import cssClass from "../../styles/css-class";

const rootCssClass = cssClass("image-form");

const cssClasses = {
  root: rootCssClass(),
  fieldGroup: rootCssClass.element("field-group"),
  label: rootCssClass.element("label"),
  field: rootCssClass.element("field"),
  closeButton: rootCssClass.element("close-button")
};

export default cssClasses;