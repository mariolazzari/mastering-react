// object destructoring
const address = {
  street: "Via Giovanni Paolo II, 20",
  city: "Coccaglio",
  country: "Italy"
};

const { street: via } = address;
console.log(via);
