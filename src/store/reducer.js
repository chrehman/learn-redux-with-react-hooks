import { INCREMENT, DECREMENT, INCREMENT_BY_VALUE,DECREMENT_BY_VALUE } from "./action";

const initialState = {
    counter: 0
}

// user={name:"abdul-rahman"}
// newUser=user  Copy Reference changing in new user will reflect in user object

// oldUser={...userEvent,name:"Habib"} making copy of user and rename a name object

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state, counter: state.counter += 1
            }
        case DECREMENT:
            return {
                ...state, counter: state.counter -= 1
            }
        case INCREMENT_BY_VALUE:
            return {
                ...state, counter: state.counter += action.payload
            }
        case DECREMENT_BY_VALUE:
            return {...state, counter: state.counter -= action.payload}

        default:
            return { ...state }
    }
}

