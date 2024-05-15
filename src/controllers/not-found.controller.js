import notFoundView from "../views/not-found.html";

export default () => {
  const div = document.createElement("div");
  div.innerHTML = notFoundView
  return div;
};
