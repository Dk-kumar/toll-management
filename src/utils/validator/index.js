export const Validator = (fieldValues) => {
  let empty = Object.values(fieldValues).map((elem) => {
    if (elem === "") {
      return false;
    }
  });
  return empty.includes(false);
};

export const TypeChecker = (name, value) => {
  if (
    name === "singleJouurney_one" ||
    name === "returnJourney_one" ||
    name === "singleJouurney_two" ||
    name === "returnJourney_two" ||
    name === "singleJourney_three" ||
    name === "returnJourney_three" ||
    name === "singleJourney_four" ||
    name === "returnJourney_four"
  ) {
    return isNaN(value);
  }
};
