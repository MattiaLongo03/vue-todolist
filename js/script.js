new Vue({
    el: '#app',
    data: {
        todos: [ 
            {
                text: 'Fare la Spesa',
            },
            {
                text: 'Fare i compiti',
            },
            {
                text: 'Fare il bucato',
            },
        ],
        newTodo: '',
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim()) {
                this.todos.push({
                    text: this.newTodo,
                });
                this.newTodo = '';
            }
        },
        deleteTodo(index) {
            this.todos.splice(index, 1);
        },
    }
});