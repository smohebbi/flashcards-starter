import { createSlice } from "@reduxjs/toolkit";
import { addQuiztoTopic } from "../topics/TopicsSlice";

export const createQuiz = (quiz) => {
    return (dispatch) => {
        // dispatch({ type: 'quizzes/addQuiz', payload: quiz});
        dispatch(quizzesSlice.actions.addQuiz(quiz));
        dispatch(addQuiztoTopic({topicId: quiz.topicId, quizId: quiz.id}));
    }
}

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {
            
        }
    },
    reducers: {
        addQuiz: (state, action) => {
            // payload form: { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}
            state.quizzes[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                topicId: action.payload.topicId,
                cardIds: action.payload.cardIds
            }
            return state;
        }
    }
});

export const selectQuizzes = state => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;