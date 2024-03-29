Vue.component('search', {
  data() {
      return {
          userSearch: '',
      }
  },
  template: `<form action="#" class="search-form" @submit.prevent="$root.$refs.products.filter(userSearch)">
                <input type="text" class="search-field" v-model="userSearch">
                <button class="btn-search" type="button">
                    <i class="fas fa-search"></i>
                </button>
            </form>`,
});