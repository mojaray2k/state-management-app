/**
 * @function createStore
 * @summary A mini state management library
 * @description The store should have four parts
 * 1. @private The state of the applicaiton
 * 2. @public Get the State
 * 3. @public Listen to changes on the state
 * 4. @public Update the state
 * @returns {object}
 */
function createStore(reducer) {
  let state;

  let listeners = [];

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  const dispatch = (action) => {
    // call a pure function like 'todos' which are reducers
    state = reducer(state, action);
    // loop over listeners and invoke them
    listeners.forEach((listener) => listener());
  };

  return {
    getState,
    subscribe,
    dispatch,
  };
}

// App Code
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const ADD_GOAL = "ADD_GOAL";
const REMOVE_GOAL = "REMOVE_GOAL";

// Action Creators
function addTodoAction(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}

function removeTodoAction(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}

function toggleTodoActon(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}

function addGoalAction(goal) {
  return {
    type: ADD_GOAL,
    goal,
  };
}

function removeGaolAction(id) {
  return {
    type: REMOVE_GOAL,
    id,
  };
}

/**
 * @summary Every thing below is @description App Code
 * Characteristics of a Pure Function
 * 1) They always return the same result fi the same arguments are passed in
 * 2) They depend only on the arguments passed into them
 * 3) Never produce any side effects
 *
 * for example @function todos and @function goals are both Reducers
 */

/**
 * @function todos
 * @param {array} state
 * @param {string} action
 * @returns {array}
 */
function todos(state = [], action) {
  // if (action.type === "ADD_TODO") {
  //   return state.concat([action.todo]);
  // } else if (action.type === "REMOVE_TODO") {
  //   return state.filter((todo) => todo.id !== action.id);
  // } else if (action.type === "TOGGLE_TODO") {
  //   return state.map((todo) =>
  //     todo.id !== action.id
  //       ? todo
  //       : // : Object.assign({}, todo, {
  //         //     complete: !todo.complete,
  //         //   })
  //         { ...todo, complete: !todo.complete }
  //   );
  // } else {
  //   return state;
  // }

  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]);
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id !== action.id ? todo : { ...todo, complete: !todo.complete }
      );
    default:
      return state;
  }
}

/**
 *
 * @param {array} state
 * @param {string} action
 * @returns {array}
 */
function goals(state = [], action) {
  switch (action.type) {
    case "ADD_GOAL":
      return state.concat([action.goal]);
    case "REMOVE_GOAL":
      return state.filter((goal) => goal.id !== action.id);
    default:
      return state;
  }
}

function rootReducer(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    goals: goals(state.goals, action),
  };
}

// const store = createStore(todos);
const store = createStore(rootReducer);
store.getState();
const unsubscribe = store.subscribe(() => {
  console.log("The new state of the store is :", store.getState());
});

// store.dispatch({
//   type: ADD_TODO,
//   todo: {
//     id: 0,
//     name: "Learn Redux",
//     complete: false,
//   },
// });

store.dispatch(
  addTodoAction({
    id: 0,
    name: "Learn Redux",
    complete: false,
  })
);

// store.dispatch({
//   type: ADD_TODO,
//   todo: {
//     id: 1,
//     name: "Learn React",
//     complete: false,
//   },
// });

store.dispatch(
  addTodoAction({
    id: 2,
    name: "Learn MongoDB",
    complete: false,
  })
);

// store.dispatch({
//   type: ADD_TODO,
//   todo: {
//     id: 2,
//     name: "Learn MongoDB",
//     complete: false,
//   },
// });

store.dispatch(
  addTodoAction({
    id: 2,
    name: "Learn MongoDB",
    complete: false,
  })
);

// store.dispatch({
//   type: ADD_GOAL,
//   goal: {
//     id: 0,
//     name: "Learn Elastic Search",
//   },
// });

store.dispatch(
  addGoalAction({
    id: 0,
    name: "Learn Elastic Search",
  })
);

// store.dispatch({
//   type: ADD_GOAL,
//   goal: {
//     id: 1,
//     name: "Learn GraphQL",
//   },
// });

store.dispatch(
  addGoalAction({
    id: 1,
    name: "Learn GraphQL",
  })
);

// store.dispatch({
//   type: TOGGLE_TODO,
//   id: 0,
// });

store.dispatch(toggleTodoActon(0));

// store.dispatch({
//   type: REMOVE_TODO,
//   id: 2,
// });

store.dispatch(removeTodoAction(2));

// store.dispatch({
//   type: REMOVE_GOAL,
//   id: 0,
// });

store.dispatch(removeGaolAction(0));
