Vue.component('button-component', {
    name: 'button-component',
    template: '<button @click="this.clickEvent">Alert Print!</button>',
    methods: {
        clickEvent: function() {
            EventBus.$emit('addAlert', {title: 'test', description: 'test'});
        }
    }
});

Vue.component('alert-box', {
    name: 'alert-box',
    props: {
        title: {
            type: String
        },
        description: {
            type: String
        }
    },
    template: '<div class=""></div>'
});

Vue.component('alert-box-list', {
    name: 'alert-box-list',
    data: function() {
        return {
            alertList: {
                type: Array
            }
        };
    },
    methods: {
        addAlert: function({ title, description }) {
            this.alertList.push({ title, description });
            console.log(this.alertList);
        }
    },
    created: function() {
        this.alertList = [];
        EventBus.$on('addAlert', this.addAlert);
    },
    template: '<ul><li v-for="alert in alertList"><alert-box :title="alert.title" :description="alert.description"></alert-box></li></ul>'
});

var EventBus = new Vue();

new Vue({
    el: '#app'
});