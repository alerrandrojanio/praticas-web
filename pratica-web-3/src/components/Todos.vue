<template>
    <button @click="fetchTodos">Fetch Todos</button>
    <ul>
        <li v-for="user in users" :key="user.id">
            <h2>Nome: {{user.name}}</h2>
            <ul v-for="todo in todos" :key="todo.id">
                <li v-if="user.id === todo.userId && todo.completed == true">
                    <h2>Title: {{todo.title}}</h2>
                    <h2>Completed: {{todo.completed}}</h2>
                </li>
            </ul>
            <hr>
        </li> 
    </ul>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Todos',
        data() {
            return {
                todos: [],
                users: [],
        }; 
    },
    methods:{
         fetchTodos (){
            axios.all([
                axios.get('https://jsonplaceholder.typicode.com/todos'),
                axios.get('https://jsonplaceholder.typicode.com/users'),  
            ]).then(axios.spread((todosRes, usersRes)=>{
                this.todos = todosRes.data
                this.users = usersRes.data
            }))
        }
    },
};
</script>

<style>

</style>