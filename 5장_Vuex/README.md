# 5장 Vuex : 애플리케이션 상태 관리  
  
## 부모  자식 관계 컴포넌트 간의 통신, 이벤트, 그리고 어려운 문제들  
 - 자식 컴포넌트에서 부모 컴포넌트의 스코프를 직접 변경할 수 없으므로 변경사항을 이벤트를 이용하여 전파  
 	자식 컴포넌트 $emit 메소드 발생 => 부모 컴포넌트 v-on 지시자로 이벤트 리스닝
 - 자식 컴포넌트가 부모 컴포넌트 스코프에 대한 변경을 진행하게 되면 에러 발생  
	[Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "title"   
	=> 중복되어 값이 쓰여지므로 자식 요소에서 직접 호출하지 말고 특정 데이터 또는 계산된 속성을 사용하라는 경고  
- 따라서 자식 컴포넌트의 변경에 대해 App 컴포넌트까지 이벤트를 전파하여 상태를 변경해야 한다.  
	App 컴포넌트가 전파된 상태 변경을 위한 ID 값이 필요

## 전역 상태 관리가 필요한 이유는 무엇일까?  
- 각 컴포넌트의 자신만의 지역 변수 존재 / 애플리케이션은 전역 상태를 보유  
- 전역 상태에 대한 처리는 여러 곳에서 접근하게 되면 데이터 불일치 발생 가능  
- 이러한 각 변수에 대한 접근 및 수정을 쉽게 하기 위해 Vuex 아키텍처 구축  

## Vuex의 정체?
- 중앙 집중식 애플리케이션 상태 관리 아키텍처  
- 핵심컨셉 두가지는 상태, 변이  
- 상태는 데이터의 초기 상태  
- 변이는 상태에 변화를 주는 액션을 포함한 객체  
- Vuex 저장소는 순수 자바스크립트로 상태, 변이에 대한 부분만 노출  
- 상태 변경을 Vuex를 사용함으로서 에러 및 데이터 불일치 등의 상태 변경을 보호
- 반응형으로 상태변경에 대해 뷰에 갱신
- 컴포넌트는 저장소의 정의된 변이를 사용해서 변경 사항을 쉽게 추적
![Vuex architecture](https://vuex.vuejs.org/kr/images/vuex.png)

### 변이  
- 이벤트 핸들러 함수일 뿐
- 직접적인 호출은 될 수 없으며, 정의된 변이의 이름을 commit 함수로 호출  
	vuejs 2.0 이전 변이 처리 메소드 : dispatch
- 원하는 만큼 변이 생성 가능, 상수화하여 사용 가능  
- 제공하는 기능에 따라 변이를 분류 하고, 필요한 변이만 임포트 가능 => 이식성 및 유지보수 측면에서 최선의 접근

### 액션  
- 변이를 처리하는 함수 (dispatch 함수 호출)
- 비구조화 할당 : 배열 또는 객체에서 데이터를 별개 변수로 추출해서 할당하는 식  
참조 사이트  
https://vuex.vuejs.org/kr/actions.html  
https://blog.asamaru.net/2017/08/14/top-10-es6-features/  
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment  





