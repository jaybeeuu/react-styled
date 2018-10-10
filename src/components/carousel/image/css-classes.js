import cssClass from "../../styles/css-class";

const rootCssClass = cssClass("image");

const cssClasses = {
  title: rootCssClass.element("title"),
  editButton: rootCssClass.element("edit-button"),
  image: rootCssClass.element("image"),
  description: rootCssClass.element("description"),
};

export default cssClasses;