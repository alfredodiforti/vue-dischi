const app = new Vue({
    el: "#app",
    data: {
        album: [],
    },
    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then( response => {
    console.log(response.data);
    this.album = response.data.response;
    })
    .catch( error => {
    console.log(error);
    });
}


});