const initialState = {
  collection: [
    { id: 1, title: "Microbreweries", desc: "19 Places", image: "https://b.zmtcdn.com/data/collections/bb6a35086c983af31c536a3cfe886f1b_1631616165.jpg" },
    { id: 2, title: "Where's The Party?", desc: "29 Places", image: "https://b.zmtcdn.com/data/collections/b05dc8713287671124d8408fb6198bb3_1631608443.jpg" },
    { id: 3, title: "Bar-gain", desc: "16 Places", image: "https://b.zmtcdn.com/data/collections/4e1df9d915b25858fbc9acd2154d1dff_1631511179.jpg" },
  ],
  restaurants: [
    {
      id: 1,
      title: "Tamasha",
      desc: "Asian, North Indian, Continental",
      rating: 4.3,
      price: "1600 for two",
      image: "https://b.zmtcdn.com/data/pictures/8/18238278/8492a4372251d8a8e14395e1eb4d9089_featured_v2.jpg",
    },
  ],
  filters: [
    { id: 1, label: "Filters", icon: <i className="fas fa-sliders-h"></i> },
    { id: 2, label: "Pro Offers" },
    { id: 3, label: "Distance", icon: <i className="fas fa-stopwatch"></i> },
    { id: 4, label: "Rating 4.0+" },
    { id: 5, label: "Pubs & Bars" },
  ],
};

const nightlifeReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default nightlifeReducer;
