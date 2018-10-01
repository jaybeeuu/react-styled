import cssClass from "../../styles/cssClass";

const rootCssClass = cssClass("image-form");

const cssClasses = {
  root: rootCssClass(),
  fieldGroup: rootCssClass.element("field-group"),
  label: rootCssClass.element("label"),
  field: rootCssClass.element("field"),
  button: rootCssClass.element("button")
};

export default cssClasses;