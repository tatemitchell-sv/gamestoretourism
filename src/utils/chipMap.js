const chipMap = (products) => {
  products.forEach((element) => {
    switch (element.name) {
      case "Magic: The Gathering":
        element.chipColor = "red";
        element.chipIcon = "fa-solid fa-check";
        break;

      case "Settlers of Catan":
        element.chipColor = "blue";
        element.chipIcon = "fa-solid fa-check";
        break;

      case "Yu-Gi-Oh!":
        element.chipColor = "orange";
        element.chipIcon = "fa-solid fa-check";
        break;

      case "Dungeons & Dragons":
        element.chipColor = "purple";
        element.chipIcon = "fa-solid fa-check";
        break;

      case "Pokemon":
        element.chipColor = "green";
        element.chipIcon = "fa-solid fa-check";
        break;

      default:
        element.chipColor = "gray";
        element.chipIcon = "fa-solid fa-check";
        break;
    }
  });
  return products;
};
export default chipMap;
