import cssClass from "./styles/css-class";

const rootCssClass = cssClass("app-container");

const cssClasses = {
  root: rootCssClass(),
  carouselPanel: rootCssClass.element("carousel-panel"),
  imageFormPanel: rootCssClass.element("image-form-panel")
};

export default cssClasses;