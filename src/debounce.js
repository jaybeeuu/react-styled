export const debounce = (actor, delay) => {
  let timeout = null;
  return () => {
    if (timeout) {
      return;
    }

    timeout = setTimeout(() => {
      timeout = null;
      actor();
    }, delay);
  };
};