import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://christina-nc-games.herokuapp.com/api",
});

export const getReviews = () => {
  return gamesApi.get("/reviews").then((res) => {
    return res.data.reviews;
  });
};

export const getReview = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}`).then((res) => {
    console.log("hi");
    return res.data.review;
  });
};
