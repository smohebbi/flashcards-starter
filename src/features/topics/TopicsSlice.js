import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {

        }
    },
    reducers: {
        addTopic: (state, action) =>
        {
            // action payload looks like: 
            // {id: '123456', name: 'name of topic', icon: 'icon url'}
            state.topics[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                quizIds: []
            };
            return state;
        },
        addQuiztoTopic: (state, action) => {
            // action payload looks like: 
            // {quizId: '123', topicId: '456'}  
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
            return state;
        }
    }
});

export const selectTopics = state => state.topics.topics;
export const { addTopic, addQuiztoTopic } = topicsSlice.actions;
export default topicsSlice.reducer;