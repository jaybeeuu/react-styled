const asClassSelector = (cssClass) => `.${cssClass}`;

const prefix = (class) => `cy-${class}`;

export const classes = {
  carousel: {
    image: {
      root: prefix('carousel-image'),
      title: prefix('carousel-title'),
      editButton: prefix('carousel-edit-button'),
      description: prefix('carousel-description')
    },
    nextButton: prefix('carousel-next-button'),
  },
  imageForm: {
    title: prefix(image-form-title)
  },
};

export const selectors = {
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