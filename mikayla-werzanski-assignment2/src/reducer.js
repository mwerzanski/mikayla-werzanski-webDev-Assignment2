import { createStore } from 'redux';

/**
 * This is a basic reducer, which only exists as a function.
 * Notice that it accepts a STATE and an ACTION
 * It describes how an action transforms the state into the next state.
 *
 * The state can be anything we want (string, number, object, array, etc.),
 * but it just contains any relevant information that will want.
 *
 * It is a good practice to not CHANGE the state, but to
 * rather create an entirely new state and return that
 */
function count(state = 10, action) {
    switch (action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            return state;
    }
}
// Create a store with all of our reducers (currently we only have one).
// The store is holding all of the data in our app.
let store = createStore(count);

// We're using subscribe here to listen to the store as it changes
// and then print out whatever is given
store.subscribe(() => console.log(store.getState()));

// We DISPATCH actions to the store to change its state.  Since we're accessing the
// store directly here, we can call store.provide directly.  React provides
// tools to make this easier
store.dispatch({ type: 'INCREASE' }); // will print 2
store.dispatch({ type: 'INCREASE' }); // print 3
store.dispatch({ type: 'DECREASE' }); // print 2
