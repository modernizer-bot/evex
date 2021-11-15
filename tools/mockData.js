const users = [
  {
    id: 1,
    name: "mario",
    lastName: "herrera",
    cityId: 1,
  },
  {
    id: 2,
    name: "Liam",
    lastName: "herrera",
    cityId: 1,
  },
  {
    id: 3,
    name: "Shirley",
    lastName: "Barbas",
    cityId: 1,
  },
  {
    id: 4,
    name: "Leah",
    lastName: "herrera",
    cityId: 1,
  },
  {
    id: 5,
    name: "Roscalia",
    lastName: "Quintana",
    cityId: 2,
  },
];

const cities = [
  {
    id: 1,
    name: "Denton",
  },
  {
    id: 2,
    name: "Camargo",
  },
  {
    id: 3,
    name: "Dallas",
  },

  {
    id: 4,
    name: "Houston",
  },
];

const newUser = {
  id: null,
  name: "",
  lastName: "",
  cityId: null,
};

module.exports = {
  users,
  newUser,
  cities,
};
