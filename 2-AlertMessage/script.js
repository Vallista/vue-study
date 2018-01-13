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
            },
            stringData: {
                type: String
            }
        };
    },
    methods: {
        addAlert: function({ title, description }) {
            this.stringData = '';
            this.alertList.push('<alert-box v-bind:title="title" v-bind:description="description"></alert-box>');
            for(var i = 0; i < this.alertList.length; i++) {
                this.stringData += this.alertList[i];
            }

            console.log(this.stringData);
        }
    },
    created: function() {
        this.alertList = [];
        this.stringData = '';
        EventBus.$on('addAlert', this.addAlert);
    },
    template: '<div>{{this.stringData}}</div>'
});

var EventBus = new Vue();

new Vue({
    el: '#app'
});