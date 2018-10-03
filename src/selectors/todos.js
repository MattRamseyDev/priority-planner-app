
export default (todos, {list, completed}) => {
    return todos.filter((todo) => {
        return todo.lists.includes(list) && todo.completed === completed;
    })
}