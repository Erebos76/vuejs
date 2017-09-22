## 테스트 : 지금까지 해온 것들을 테스트할 시간!
쇼핑 목록 애플리케이션 모두의 품질을 검증하고, 해당 애플리케이션들을 다양한 기술들을 사용해 테스트 한다.  
Vuex에 관계된 코드들에 대해 전통적인 단위 테스트를 실행한다.  
나이트워치(Nightwatch)를 사용해 종단 대 종단 테스트를 수행하는 법을 배운다.  
- 단위 테스트와 종단 태 종단 테스트의 중요성 언급
- 포모도로, 쇼핑 목록 애플리케이션의 단위 테스트 작성
- 단위 테스트에서 서버 응답 모킹하는 법  
- 나이트워치를 사용한 종단 테스트 작성  

### 왜 단위 테스트를 작성하는가?

- 얻어지는 것
> 알고리즘이나 로직이 실패하는 이유를 파악하기 쉽게 도와준다.  
> 코드의 질을 향상시킨다.
> 테스트하기 쉬운 코드를 작성하게 해준다.
> 미래에 생길 수도 있는 변화가 기능을 망치는 것을 막아준다.
> 일정 추정이 좀 더 예측 가능해진다.

단위 테스트로 테스트하기 쉬운 코드는 동시에 읽기도 쉽다.  
읽기 쉬운 코드는 에러가 잘 발생하지 않고 유지 보수가 쉽다.  
유지 보수는 애플리케이션 품질 중에 가장 중요한 항목 중 하나다.

*카르마(Karma), 테스트 러너, 모카(Mocha) 테스트 프레임워크, 차이(Chai) 표현식 라이브러리, 그리고 모킹을 위해 시논(Sinon)을 사용해 단위 테스트를 작성해 본다.*
- 카르마 http://karma-runner.github.io
- 모카 https://mochajs.org
- 차이 http://chaijs.com
- 시논 http://sinonjs.org

간단한 함수의 단위테스트 예
```js
function sum(a, b) {
    return a + b;
}

// 단위 테스트 작성
it('파라미터 순서변경에 따른 결과 일치 확인', () => {
    let a = 2;
    let b = 3;

    expect(sum(a, b)).to.equal(5);
    expect(sum(b, a)).to.equal(5);
});
```

### 뷰 애플리케이션에서 단위 테스트
컴포넌트 인스턴스의 테스트를 작성하기 위해서는 인스턴스가 생성되야만 한다.
어떻게 뷰 컴포넌트를 생성해야 메소드에 쉽게 접근해서 테스트가 가능할 것인가??

컴포넌트의 초기 상태를 기본적으로 검증하려면 컴포넌트를 선언하고 해당 속성들을 검증해야 한다. 컴포넌트가 DOM에 바인딩되고 나서 동적으로 변하는 속성을 테스트하고 슆다면 다음 세가지를 따라야 한다.

1. 컴포넌트를 선언한다.
2. Vue 함수를 사용해 인스턴스를 생성한다.
3. 마운트한다.

> 뷰 인스턴스가 생성되면 DOM과 바인딩될 때 컴파일이 바로 일어난다. 우리의 경우 인스턴스를 실제 어떤 DOM 엘리먼트에도 바인딩하지 않고 수동으로 mount 메소드($method)를 호출함으로써 명시적으로 컴파일되게 만든다.

```js
import MyComponent from 'my-component'
var vm = new Vue(MyComponent).$mount();
```

ref 속설을 사용해 Vue 인스턴스와 컴포넌트를 연관시킬 수 있다. $refs를 통해 컴포넌트 인스턴스에 접근할 수 있다.
```js
import store from 'store'
import MyComponent from 'my-component'
// 뷰 인스턴스와 함께 컴포넌트를 로드한다.

var vm = nwe Vue({
    template : '<div><test :items="items" :id="id" ref=testcomponet></test></div>',
    components: {
        'test' : MyComponent
    },
    data() {
        return {
            items: [],
            id: 'myId'
        }
    },
    store
}).$mount();

var myComponent = vm.$regs.testcomponent;
```

### 쇼핑목록 애플리케이션의 단위 테스트 작성




### 액션, 게커 변이 테스트하기




### 좋은 테스트의 기준
좋은 단위 테스트는 코드를 수정했을 때 실패하는 테스트다. 예를 들어 새로운 쇼핑 목록을 배열에 넣기 전에 기본값을 제목에 할당하기로 결정했다고 가정했을 때 변이는 다음과 같이 변경된 것이다.
```js
[types.ADD_SHOPPING_LIST](state, newList) {
    if(_.isObject(newList)) {
        newList.title = 'New Shopping List'
        state.shoppinglists.push(newList);
    }
}
```

### 코드 커버리지
테스트를 실행하고 난 후에 테스트에 관한 통계 수치가 나오는 것을 봤을 것이다. 
이수치는 테스트 실행 시에 달성한 여러 종류의 커버리지를 출력한것이다.

### 서버 응답 흉내 내기 및 비동기 테스트 작성하기




### 컴포넌트 테스트하기

## 포모도로 애플리케이션의 단위 테스트 작성하기.
