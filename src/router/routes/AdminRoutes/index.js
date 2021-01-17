import Admin      from "../../../views/AdminViews/index.vue";
import Products   from "../../../views/AdminViews/Products/index.vue";
import categories from "../../../views/AdminViews/categories/index.vue";

export default [
  {
    path: "/admin",
    component: Admin,
    name: "admin",
    children: [
      {
        path: "products",
        component: Products,
        name: "products"
      },
      {
        path: "categories",
        component: categories,
        name: "categories"
      },
    ]
  }
];
