import productsView from "../views/products.html";

const getProducts = async () => {
  const products = await fetch("https://fakestoreapi.com/products");
  return await products.json();
};

export default async () => {
  const div = document.createElement("div");
  div.innerHTML = productsView;
  const productsElement = div.querySelector("#products");
  const products = await getProducts();

  products.forEach((element) => {
    productsElement.innerHTML += `
    <div class="mt-4">
    <div class="card" style="width: 18rem;">
  <img src="${element.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    <p class="card-text">${element.description}</p>
    <h4 class="card-text">$${element.price}</h4>
    <a href="#/products" class="btn btn-primary">Agregar al carrito</a>
  </div>
</div>
</div>
    `;
  });
  console.log(products);
  return div;
};
