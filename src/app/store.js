import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/topics/TopicsSlice';
import quizReducer from '../features/quizzes/quizzesSlice';
import cardsReducer from "../features/cards/cardsSlice";

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizReducer,
    cards: cardsReducer
  },
});
