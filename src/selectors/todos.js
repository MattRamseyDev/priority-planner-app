
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