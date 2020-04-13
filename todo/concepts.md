At the end of this module, you should be able to:

explain what immutability is in programming and demonstrate its benefits

    After an immutable object has been created, it can never change.
        One benefit is Predicability: Immutability is free of unnoticed side effects, making it easier to predict how state will change based on certain events.

        A second benefit is  Mutation Tracking: Immutability makes it easy to check if anything (including props), have changed.

describe reducer functions

    Default Reducer function: takes in multiple inputs and output a single piece of data.

    Purpose: a state management pattern that allows us to write pure functions (return value is only determined by its input values, without observable side effects.) to manage state changes in a predictable manner, without changing the initial state. 

    Structure: Reducer functions take two arguments, current state and action, and return a new, updated state object based on both arguments. All this is done without mutating the original state. The reducer is a pure function.

        (state, action) => newState

        the dispatch method  will "dispatch" an an action to our reducer when specific events occur in our application. the dispatch allows us to combine the reducer function from our previous section with the ability to maintain our state at the level of the component.

                        
        Ex:     let currentState = { make: "Chevy", model: 'Corvette', year: 2020 }

                  how react source code works: dispatch function takes in an action, calls a reducer, and whatever that reducer returns is what the state gets updated with
                      
                 const dispatch = (action) => {currentState = reducer(currentState, action)}

employ the `useReducer` hook to manage state in a component

    useReducer takes in a reducer function built by us, and an initialState and returns both the current state and a dispatch method in an array, just like useState.

    const [state, dispatch] = useReducer(reducer, initialState);
