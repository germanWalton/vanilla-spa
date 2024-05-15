import Home from "./home.controller";
import Products from "./products.controller";
import NotFound from "./not-found.controller";
import Contact from "./contact.controller";

const pages = {
  home: Home,
  products: Products,
  notFound: NotFound,
  contact: Contact,
};

export { pages };
