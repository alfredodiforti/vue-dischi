const app = new Vue({
    el: "#app",
    data: {
        albums: [],
        genres: "all",
    },
    created() {
        
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then( response => {
    console.log(response.data.response);
    this.albums = response.data.response;
    })
    .catch( error => {
    console.log(error);
    });
},
    methods: {
        filtgen() {
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then( response => {
                let list = response.data.response;
                if(this.genres !== 'all') {
                    list = list.filter( album => album.genre.toLowerCase() === this.genres );

                }
                this.albums = list;
                })
                .catch( error => {
                console.log(error);
                });
            },

        }

    


});