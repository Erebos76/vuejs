### defineProperty, gettter, setter

뷰가 어떤 변환을 통해 View 계층에 자동으로 연동시키는지 알아보자.  

문자열의 변경이 있을 때마다 DOM 엘리먼트에 변환을 수행하고 싶다.  
어떻게 구현할까??  

```js
var obj = {};
var text = '';

//변수에 h2 DOM엘리먼트를 저장하자.
var h2 = document.getElementsByTagName('h2')[0];
```

text를 obj.text 속성에 할당한다면 어떻게 속성이 변경될 때마다 h2의 innerHTML 속성도 같이 변경시킬 수 있을까?  

Object.defineProperty 메소드 활용해 게터와 세터 함수를 생성할 수 있다.  
그러므로 속성이 변경되거나 접근됬을 때 수행돼야 하는 작업들을 명시하자.

```js
Object.defineProperty(obj, 'text', {
    get: function() {
        return text;
    },
    set: function(newVal) {
        text = newVal;
        h2.innerHTML = text;
    }
})
```
