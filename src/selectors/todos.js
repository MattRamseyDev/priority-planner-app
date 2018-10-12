
export const getVisibleTodos = (todos, {list, completed}) => {
    return todos.filter((todo) => {
        return todo.lists.includes(list) && todo.completed === completed;
    })
}

export const getTodosInList = (todos, list) => {
    return todos.filter((todo) => {
        return todo.lists.includes(list);
    })
}

export const getTodosForGoal = (todos, goal) => {
    return todos.filter(todo => todo.goal.id === goal.id)
}