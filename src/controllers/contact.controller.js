import contactView from "../views/contact.html";

export default () => {
  const div = document.createElement("div");
  div.innerHTML = contactView;
  return div;
};
