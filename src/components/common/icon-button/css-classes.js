import cssClass from "../../styles/cssClass";

const rootCssClass = cssClass("icon-button");

const cssClasses = {
  root: rootCssClass(),
  icon: rootCssClass.element("icon")
};

export default cssClasses;