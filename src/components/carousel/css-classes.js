import cssClass from "../styles/cssClass";

const rootCssClass = cssClass("carousel");
const navButtonCssClass = cssClass(rootCssClass.element("nav-button"));

const cssClasses = {
  root: rootCssClass(),
  navButton: navButtonCssClass(),
  navButtonLeft: navButtonCssClass.modifier("left"),
  navButtonRight: navButtonCssClass.modifier("right")
};

export default cssClasses;