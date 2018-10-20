
const goalsReducerDefaultState = [];

export default (state= goalsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_GOAL':
            return [...state, action.goal];
        case 'EDIT_GOAL':
            return state.map((goal) => {
                if (goal.id === action.id) {
                    return {...goal, ...action.updates};
                } else {
                    return goal;
                }
            });
          case 'ADD_GOAL_TODO':
            return state.map((goal) => {
              if (goal.id === action.id) {
                return { ...goal, todos: [...goal.todos, action.todoId]};
              } else {
                return goal;
              }
            });
          case 'REMOVE_GOAL_TODO':
            return state.map((goal) => {
              if (goal.id === action.goalId) {
                const newTodos = goal.todos.filter(todo => todo !== action.todoId);
                return {...goal, todos: newTodos}
              } else {
                return goal;
              }
            })
        case 'REMOVE_GOAL':
            return state.filter(goal => goal.id !== action.id);
        default:
            return state;
    }
}

// goals schema
// goals = [
//   {
//     id: 'daflksafh',
//     description: 'do this',
//     todos: [
//       'gjkdlskj',
//       'dsfjalkhe'
//     ]
//   }, {
//     id: 'dsfa',
//     description: 'do that',
//     todos: [
//       'dssssss',
//       'grrgehrhr'
//     ]
//   }
// ]