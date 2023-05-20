export function updateTitle(route) {
  switch (route) {
    case "/":
      document.title = "ToyHub";
      break;
    case "/alltoys":
      document.title = "ToyHub | All Toys";
      break;
    case "/addtoys":
      document.title = "ToyHub | Add Toys";
      break;
    case "/mytoys":
      document.title = "ToyHub | My Toys";
      break;
    case "/blogs":
      document.title = "ToyHub | Blogs";
      break;
    case "/login":
      document.title = "ToyHub | Log In";
      break;
    case "/signup":
      document.title = "ToyHub | Sign Up";
      break;
    default:
      document.title = "ToyHub";
      break;
  }
}
