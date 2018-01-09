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
            // = 누를시
            if(this.name === '=') this.calculate();
            // AC 누를시
            else if (this.name === 'AC') this.reset();
            // 숫자, 연산자 누를시
            else if (this.name !== '') this.addStackList(this.name);

            // 디스플레이에서 결과 도출하도록 String으로 결과 만듬.
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
        // 배열에 저장
        addStackList: function(func) {
            const last = this.calculateStack.length - 1;
            // 처음 입력받는게 연산자이거나 이미 연산자가 있는데 연산자를 한번더 등록하면 푸쉬 못하도록 리턴
            if((this.calculateStack[last] === undefined &&
                (func === '%' || func === '+' || func === '-' || func === '*' || func === '/') === false) === false
                && ((func === '%' || func === '+' || func === '-' || func === '*' || func === '/') === true &&
                (this.calculateStack[last] === '%'
                || this.calculateStack[last] === '+'
                || this.calculateStack[last] === '*'
                || this.calculateStack[last] === '-'
                || this.calculateStack[last] === '/') === true) === true)
                return;

            this.calculateStack.push(func);
        },
        // String 으로 만들어줌
        makeString: function() {
            this.stringData = '';
            for(var data in this.calculateStack) {this.stringData += this.calculateStack[data];}
        },
        // = 누를시 연산
        calculate: function() {
            const last = this.calculateStack.length - 1;
            // 만약 마지막 값이 연산자의 경우 맨 뒤 연산자를 삭제하고 결과 값 도출
            if((this.calculateStack[last] === '%'
            || this.calculateStack[last] === '+'
            || this.calculateStack[last] === '*'
            || this.calculateStack[last] === '-'
            || this.calculateStack[last] === '/') === true)
                this.calculateStack.pop();

            this.makeString();
            this.reset();
            this.calculateStack.push(eval(this.stringData).toString());
        },
        // 초기화
        reset: function() {
            this.calculateStack = [];
        }
    }
});