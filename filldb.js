var casual = require('casual')

module.exports = () => {
    const data = {todos: []}
    //create 25 posts
    for(let i=0; i<25; i++){
        data.todos.push({id:i , todo : casual.sentences(n=1) })
    }
    return data
}