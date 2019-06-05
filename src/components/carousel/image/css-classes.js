import cssClass from "shared/css-class";

const rootCssClass = cssClass("image");

const cssClasses = {
  root: rootCssClass(),
  detailsContainer: rootCssClass.element("details-container"),
  title: rootCssClass.element("title"),
  editButton: rootCssClass.element("edit-button"),
  details: rootCssClass.element("details"),
  image: rootCssClass.element("image"),
  description: rootCssClass.element("description"),
  tags: rootCssClass.element("tags"),
  tag: rootCssClass.element("tag")
};

export default cssClasses;