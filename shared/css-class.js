const cssClass = (cssClassName) => {
  const wrapper = () => cssClassName;

  wrapper.modifier = (modifier) => `${cssClassName}--${modifier}`;
  wrapper.element = (modifier) => `${cssClassName}__${modifier}`;

  return wrapper;
};

export default cssClass;