# Vue.js로 간단하게 만든 팝업 메시지

### CSS

css는 flex를 사용하여 구조를 잡고 정렬하였음.
오른쪽 상단 고정은 absolute로 right, top 정렬 후
안에 오브젝트를 relative로 정렬하였고, 알럿 박스 안의 이미지는 absolute로 중앙 고정 함.

### JS

특이점은 EventBus 라는 애를 전역으로 구현해서 전역에서 이벤트를 관리하는 인스턴스를 만들었음.
전역으로 만들었으므로 효율적인 통신이 가능해짐.

Vue instance 하위에 button-component와 alert-box-list가 있다.
alert-box-list에서는 alert-box를 리스트에 저장하고 삭제하고 하는 기능을 담당하며,
button-component에서 버튼을 클릭하면 EventBus가 동작하여 데이터를 추가함.