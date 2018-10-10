import cssClass from "../styles/css-class";

const rootCssClass = cssClass("carousel");
const navButtonCssClass = cssClass(rootCssClass.element("nav-button"));

const cssClasses = {
  navButtonLeft: navButtonCssClass.modifier("left"),
  navButtonRight: navButtonCssClass.modifier("right")
};

export default cssClasses;