import _ from 'underscore';

export const getVisibleTodosForGoal = (todos, {list, completed = false, goal= ''}) => {
    return todos.filter((todo) => {
        let goalID = '';
        if (!_.isEmpty({...todo.goal})) {
            goalID = todo.goal.id;
        }
        const listMatch = todo.lists.includes(list);
        const completedMatch = todo.completed === completed;
        const goalMatch = goalID === goal;
        return listMatch && completedMatch && goalMatch;
    })
}

export const getVisibleTodos = (todos, { list, completed = false}) => {
  return todos.filter((todo) => {
    const listMatch = todo.lists.includes(list);
    const completedMatch = todo.completed === completed;
    return listMatch && completedMatch;
  })
}

export const getTodosInList = (todos, list) => {
    return todos.filter((todo) => {
        return todo.lists.includes(list);
    })
}

export const getTodosForGoal = (todos, goalID) => {
    return todos.filter(todo => todo.goal.id === goalID)
}