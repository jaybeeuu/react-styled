import cssClass from "../../styles/css-class";

const rootCssClass = cssClass("image-form");

const cssClasses = {
  root: rootCssClass(),
  fieldGroup: rootCssClass.element("field-group"),
  label: rootCssClass.element("label"),
  field: rootCssClass.element("field"),
  button: rootCssClass.element("button")
};

export default cssClasses;