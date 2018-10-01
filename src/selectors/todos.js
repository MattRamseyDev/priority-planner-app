
export default (todos, {list}) => {
    return todos.filter((todo) => {
        return todo.list === list;
    })
}