import cssClass from "shared/css-class";

const rootCssClass = cssClass("image-form-panel");

const cssClasses = {
  root: rootCssClass(),
  form: rootCssClass.element("form")
};

export default cssClasses;