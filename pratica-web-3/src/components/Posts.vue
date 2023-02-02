<template>
    <button @click="fetchPosts">Fetch Posts</button>
    <ul>
        <div v-for="user in users" :key="user.id">
            <li>
                <h2>Nome: {{user.name}}</h2>
                <div v-for="post in posts" :key="post.id">
                    <div>
                        <ul>
                            <li v-if="post.userId === user.id">
                                <h4>Title: {{post.title}}</h4>
                                <h4>Body: {{post.body}}</h4>
                                <h6>Comentários: </h6>
                                <ul>
                                    <div v-for="comment in comments" :key="comment.id">
                                        <li v-if="comment.postId === post.id">
                                            <p>Nome: {{comment.name}}</p>
                                            <p>Email: {{comment.email}}</p>
                                            <p>Body: {{comment.body}}</p>
                                        </li>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr>
            </li>
        </div>
    </ul>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Posts',
        data() {
            return {
                posts: [],
                users:[],
                comments:[]
        }; 
    },
    methods:{
        fetchPosts (){
            axios.all([
                axios.get('https://jsonplaceholder.typicode.com/posts'),
                axios.get('https://jsonplaceholder.typicode.com/users'),
                axios.get('https://jsonplaceholder.typicode.com/comments')
            ]).then(axios.spread((postsRes, usersRes, commentsRes)=>{
                this.posts = postsRes.data
                this.users = usersRes.data
                this.comments = commentsRes.data
            }))
        }

    },
};
</script>

<style>

</style>