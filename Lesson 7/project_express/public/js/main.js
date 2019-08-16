// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const API = '/api';

const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
    },
    methods: {
        getJson(url, options){
            return fetch(url, options)
                .then(result => {
                    if (result.ok) {
                        return result.json();
                    }
                    this.$refs.error.setError(result.status + ': ' + result.statusText);
                    throw new Error(result.status + ': ' + result.statusText);
                })
                .catch(error => {
                    this.$refs.error.setError(error);
                })
        },
    },
    mounted() {
        console.log(this);
    }
});

