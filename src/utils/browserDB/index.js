export const setBrowserData = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getBrowserData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};