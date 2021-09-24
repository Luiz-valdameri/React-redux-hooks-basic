import { createStore } from 'redux';

const INITIAL_STATE = {
    courses: [
        'React - REDUX',
        'React - REDUX HOOKS'
    ],
};

function courses(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_COURSE':
            return { ...state, courses: [ ...state.courses, action.title ] };

        default: 
            return state;
    }
};

const store = createStore(courses);

export default store;