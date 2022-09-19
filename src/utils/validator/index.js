export const Validator = (fieldValues) => {
  let empty = Object.values(fieldValues).map((elem) => {
    if (elem === "") {
      return false;
    }
  });
  return empty.includes(false);
};
