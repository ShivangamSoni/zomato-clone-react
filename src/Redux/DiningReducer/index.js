const initialState = {
  collection: [
    { id: 1, title: "Newly Opened", desc: "19 Places", image: "https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015804.jpg?output-format=webp" },
    { id: 2, title: "Trending This Week", desc: "30 Places", image: "https://b.zmtcdn.com/data/collections/d7e3f1d03609fdd6672872662fa5bcf7_1637735044.png?output-format=webp" },
    { id: 3, title: "Best of Delhi NCR", desc: "160 Places", image: "https://b.zmtcdn.com/data/collections/c392056cfd7c02befe8d53f94ad2a908_1581933619.jpg?output-format=webp" },
    { id: 4, title: "Great Cafes", desc: "32 Places", image: "https://b.zmtcdn.com/data/collections/821a4a7a6a0f8c265f5bf804cf18dfa3_1631714127.jpg?output-format=webp" },
  ],
  restaurants: [
    {
      id: 1,
      title: "Tamasha",
      desc: "Asian, North Indian, Continental",
      rating: 4.3,
      price: "1600 for one",
      image: "https://b.zmtcdn.com/data/pictures/8/18238278/8492a4372251d8a8e14395e1eb4d9089_featured_v2.jpg",
    },
  ],
  filters: [
    { id: 1, label: "Filters", icon: <i className="fas fa-sliders-h"></i> },
    { id: 2, label: "Delivery Time", icon: <i className="fas fa-stopwatch"></i> },
    { id: 4, label: "Rating 4.0+" },
    { id: 3, label: "Online Booking" },
    { id: 6, label: "Cuisines" },
    { id: 7, label: "Pro Offers" },
    { id: 8, label: "Outdoor Seating" },
    { id: 9, label: "Serves Alcohol" },
    { id: 10, label: "Pure Veg" },
    { id: 11, label: "Open Now" },
    { id: 12, label: "More Filters" },
    { id: 13, label: "Cafes" },
  ],
};

const diningReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default diningReducer;
