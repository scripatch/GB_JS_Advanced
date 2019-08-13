Vue.component('error', {
    data() {
        return {
            errorMsg: '',
            showErrorFlag: false,
        }
    },
    methods: {
        showError(errorMsg) {
            this.errorMsg = errorMsg;
            this.showErrorFlag = true;
        }
    },
    template: `<div v-show="showErrorFlag" class="error-bar">Ошибка загрузки данных с сервера: {{ errorMsg }}</div>`,
});