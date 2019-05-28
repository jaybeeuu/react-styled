import carouselCssClasses from "../../src/components/carousel/css-classes";
import imageCssClasses from "../../src/components/carousel/image/css-classes";
import imageFormCssClasses from "../../src/components/image-form-panel/image-form/css-classes";

const address = "http://localhost:3000";

const navigate = () => {
  cy.clearLocalStorage("state");
  cy.visit(address,  {
    onBeforeLoad: (win) => {
      win.sessionStorage.clear();
    }
  });
};

const asClassSelector = (cssClass) => `.${cssClass}`;

export default {
  address,
  navigate,
  carousel: {
    image: {
      selector: asClassSelector(imageCssClasses.image),
      title: asClassSelector(imageCssClasses.title),
      editButton: asClassSelector(imageCssClasses.editButton),
      description: asClassSelector(imageCssClasses.description)
    },
    nextButton: asClassSelector(carouselCssClasses.navButtonRight)
  },
  imageForm: {
    title: `${asClassSelector(imageFormCssClasses.field)}[name=\"image-title\"]`
  },
};