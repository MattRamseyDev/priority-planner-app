
export const getVisibleTodos = (todos, {list, completed = false, goal = ''}) => {
    return todos.filter((todo) => {
        return todo.lists.includes(list) && todo.completed === completed && todo.goal === goal;
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