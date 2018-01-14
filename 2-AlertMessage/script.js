Vue.component('button-component', {
    name: 'button-component',
    template: '<button @click="this.clickEvent">Alert Print!</button>',
    methods: {
        clickEvent: function() {
            EventBus.$emit('addAlert', { description: Math.random().toString()});
        }
    }
});

Vue.component('alert-box', {
    name: 'alert-box',
    props: {
        index: '',
        description: ''
    },
    mounted: function() {
        setTimeout(function() {
            EventBus.$emit('deleteAlert');
        }, 2000);
    },
    template: '<div :class="`alert-box-${this.index}`" class="alert-box alert-box-start flex-container flex-center-sort flex-column">' +
        '<div class="title flex-container flex-center-sort flex-column"><div class="title-image-background"></div><img class="title-image" src="image.png"/></div>' +
        '<div class="description flex-container flex-center-sort flex-column">{{this.description}}</div>' +
    '</div>'
});

Vue.component('alert-box-list', {
    name: 'alert-box-list',
    data: function() {
        return {
            alertList: []
        };
    },
    methods: {
        addAlert: function({ description }) {
            this.alertList.push({ description });
        },
        deleteAlert: function() {
            this.alertList.shift();
        }
    },
    created: function() {
        this.alertList = [];
        EventBus.$on('addAlert', this.addAlert);
        EventBus.$on('deleteAlert', this.deleteAlert);
    },
    template: '<ul><li v-for="(value, index) in alertList">' +
    '<alert-box :description="value.description" :index="index" :key="index">' +
    '</alert-box>' +
    '</li></ul>'
});

var EventBus = new Vue();

new Vue({
    el: '#app'
});