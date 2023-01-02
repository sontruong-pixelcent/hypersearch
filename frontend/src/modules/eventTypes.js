export const eventTypeList = [
  { id: "commissions", name: "Commission" },
  { id: "exhibitions", name: "Exhibition" },
  { id: "films", name: "Film" },
  { id: "fitnessWellness", name: "Fitness & Wellness" },
  { id: "foodDrink", name: "Food & Drink" },
  { id: "guestProjects", name: "Guest Project" },
  { id: "kids", name: "Kids" },
  { id: "music", name: "Music" },
  { id: "performance", name: "Performance" },
  { id: "talks", name: "Talk" },
  { id: "theatreDance", name: "Theatre & Dance" },
  { id: "tours", name: "Tour" },
  { id: "workshops", name: "Workshop" },
  { id: "grants", name: "Grants" },
];

export const getEventTypeFromID = (id) => {
  const list = eventTypeList.filter((x) => x.id === id);
  if (list.length) {
    return list[0].name;
  } else {
    console.error("Problem: ", id);
  }
};
