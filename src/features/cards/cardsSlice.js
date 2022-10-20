import { createSlice } from "@reduxjs/toolkit";


const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            //payload: { id: '123', front: 'front of card', back: 'back of card'}
            state.cards[action.payload.id] =
                { id: action.payload.id, front: action.payload.front, back: action.payload.back }
            return state;
        }
    }
});

export const selectCards = state => state.cards.cards;
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;