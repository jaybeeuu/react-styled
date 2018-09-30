import cssClass from "../../styles/cssClass";

const rootCssClass = cssClass("image");

const cssClasses = {
  root: rootCssClass(),
  title: rootCssClass.element("title"),
  editButton: rootCssClass.element("edit-button"),
  image: rootCssClass.element("image"),
  description: rootCssClass.element("description"),
  details: rootCssClass.element("details"),
  tags: rootCssClass.element("tags"),
  tag: rootCssClass.element("tag")
};

export default cssClasses;