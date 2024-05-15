import homeView from "../views/home.html";

export default () => {
  const div = document.createElement("div");
  div.innerHTML = homeView
  return div;
};
