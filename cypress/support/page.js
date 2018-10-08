const address = "http://localhost:3000";

const navigate = () => {
  cy.clearLocalStorage("state");
  cy.visit(address);
};

export default {
  address,
  navigate,
  carousel: {
    image: {
      selector: ".image__image",
      title: ".image__title",
      editButton: ".image__edit-button",
      description: ".image__description",
    },
    nextButton: ".carousel__nav-button"
  },
  imageForm: {
    title: ".image-form__field[name=\"image-title\"]"
  },
};