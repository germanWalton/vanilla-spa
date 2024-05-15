import { pages } from "../controllers/index";

let content = document.getElementById("root");

const router = async(route) => {
  content.innerHTML = "";
  switch (route) {
    case "#/home":
      return content.appendChild(pages.home());
    case "#/contact":
      return content.appendChild(pages.contact());
    case "#/products":
      return content.appendChild(await pages.products());
    default:
      return content.appendChild(pages.notFound());
  }
};

export { router };
