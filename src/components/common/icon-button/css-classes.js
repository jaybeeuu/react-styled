import cssClass from "../../styles/css-class";

const rootCssClass = cssClass("icon-button");

const cssClasses = {
  root: rootCssClass(),
  icon: rootCssClass.element("icon")
};

export default cssClasses;