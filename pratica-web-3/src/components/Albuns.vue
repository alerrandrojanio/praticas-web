<template>
    <button @click="fetchAlbuns">Fetch Albuns</button>
        <div  v-for="user in users" :key="user.id">
            <li>
                <h2>Nome: {{user.name}}</h2>
                <div v-for="album in albuns" :key="album.id">
                    <div>
                        <ul>
                            <li v-if="album.userId === user.id">
                                <p>Título do album: {{album.title}}</p>

                                <h3>Fotos: </h3>
                                <ul>
                                    <div v-for="photo in photos" :key="photo.id">
                                        <li v-if="photo.albumId === album.id">
                                            <p>Título da foto: {{photo.title}}</p>
                                            <a :href="photo.url"><img :src="photo.thumbnailUrl"></a>
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
</template>
<script>
import axios from 'axios';

export default {
    name: 'Albuns',
        data() {
            return {
                albuns: [],
                users: [],
                photos: []
                
        }; 
    },
    methods:{
         fetchAlbuns (){
            axios.all([
                axios.get('https://jsonplaceholder.typicode.com/albums'),
                axios.get('https://jsonplaceholder.typicode.com/users'),
                axios.get('https://jsonplaceholder.typicode.com/photos')
            ]).then(axios.spread((albunsRes, usersRes, photosRes)=>{
                this.albuns = albunsRes.data
                this.users = usersRes.data
                this.photos = photosRes.data
            }))
        }
    },
};
</script>

<style>

</style>