Vue.component('button-component', {
    template: '<button v-on:click="() => {this.clickEvent()}" v-bind:class="[this.check, this.bottomLine]">{{ this.name }}</button>',
    props: {
        title: {
            type: String
        },
        addStackList: {
            type: Function
        },
        makeString: {
            type: Function
        },
        reset: {
            type: Function
        },
        calculate: {
            type: Function
        },
        index: {
            type: Number
        }
    },
    data: function() {
        return {
            name: this.title,
            check: (this.index % 4 - 3 === 0) ? this.index === 19 ? 'operator-button-last' : 'operator-button' : 'button',
            bottomLine: (this.index / 4 < 4) ? 'button-bottom-line' : ''
        };
    },
    methods: {
        clickEvent: function() {
            if(this.name === '=') this.calculate();
            else if (this.name === 'AC') this.reset();
            else if (this.name !== '') this.addStackList(this.name);

            this.makeString();
        }
    }
});

Vue.component('display-component', {
    template: '<textarea class="display-text">{{ this.stringData }}</textarea>',
    props: {
        stringData: String
    }
});

new Vue({
    el: '#app',
    data: function() {
        return {
            calculateStack: [],
            orderList: [
                'AC', '', '%', '/',
                '7', '8', '9', '*',
                '4', '5', '6', '-',
                '1', '2', '3', '+',
                '0', '', '', '='
            ],
            stringData: ''
        };
    },
    methods: {
        splitMulti: function (str, tokens) {
            var tempChar = tokens[0]; // We can use the first token as a temporary join character
            for(var i = 0; i < tokens.length; i++){
                str = str.split(tokens[i]).join(tempChar);
            }
            str = str.split(tempChar);
            return str;
        },
        addStackList: function(func) {
            if((this.calculateStack[this.calculateStack.length - 1] === undefined &&
                (func === '%' || func === '+' || func === '-' || func === '*' || func === '/') === false) === false
                && ((func === '%' || func === '+' || func === '-' || func === '*' || func === '/') === true &&
                (this.calculateStack[this.calculateStack.length - 1] === '%'
                || this.calculateStack[this.calculateStack.length - 1] === '+'
                || this.calculateStack[this.calculateStack.length - 1] === '*'
                || this.calculateStack[this.calculateStack.length - 1] === '-'
                || this.calculateStack[this.calculateStack.length - 1] === '/') === true) === true)
                return;

            this.calculateStack.push(func);
        },
        makeString: function() {
            this.stringData = '';
            for(var data in this.calculateStack) {this.stringData += this.calculateStack[data];};
        },
        calculate: function() {
            if((this.calculateStack[this.calculateStack.length - 1] === '%'
            || this.calculateStack[this.calculateStack.length - 1] === '+'
            || this.calculateStack[this.calculateStack.length - 1] === '*'
            || this.calculateStack[this.calculateStack.length - 1] === '-'
            || this.calculateStack[this.calculateStack.length - 1] === '/') === true)
                this.calculateStack.pop();

            this.makeString();
            this.reset();
            this.calculateStack.push(eval(this.stringData).toString());
        },
        reset: function() {
            this.calculateStack = [];
        }
    }
});