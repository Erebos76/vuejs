## 컴포넌트: 이해 및 사용

- 컴포넌트가 무엇인지 다시 한 번 알아본다.
- 예제 애플리케이션에서 사용할 컴포넌트를 생성한다.
- 단일 파일 컴포넌트에 대해 배운다.
- 특별한 속성을 사용해 CSS 트랜지션을 반응형으로 동작시키는 법을 배운다.

### 컴포넌트  
- 자신만의 데이터 스코프와 메소드를 가지는 뷰 애플리케이션의 특별한 구성요소
- 애플리케이션 전체에 걸쳐서 재사용 가능  
   
    ##### HTML로 템플릿 작성 [01-hello/02.phtml](./01-hello/02.phtml)  
        문자열로 작성된 복잡한 HTML은 유지 보수에 적합하지 않아 template으로 작성한다.
    ##### 컴포넌트의 data와 el 속성 처리하기 [01-hello/03.phtml](./01-hello/03.phtml)  
        컴포넌트 문법은 Vue 인스턴스의 문법과 동일하다. 다만 Vue를 직접 호출하는 대신 extend를 호출하여야 한다.
    ##### 컴포넌트의 범위
        모든 컴포넌트는 다른 컴포넌트가 접근할 수 없는 고유 영역을 가진다.
        그럼에도 불구하고 모든 컴포넌트는 애플리케이션 전역 범위에 접근이 가능하다.
    ##### 컴포넌트 내의 또 다른 컴포넌트 [01-hello/04.phtml](./01-hello/04.phtml)  
        컴포넌트의 장점 중 하나는 다른 컴포넌트 내에서 재사용할 수도 있다는 것이다.
    ##### 컴포넌트를 사용해 쇼핑 목록 재작성  [02-shopping-list/02.phtml](./02-shopping-list/02.phtml) 
        컴포넌트의 변수명은 카멜케이스로 선언하고, 변우에 대한 접근은 케밥케이스를 사용한다.
        카멜케이스 : CamelCase
        케밥케이스 : kebab-case
 
 ### 단일 파일 컴포넌트
 - 단일 파일 컴포넌트는 .vue 확장자를 가지는 파일이다.
 - 이와 같은 컴포넌트를 가지고 있는 애플리케이션은 webpack를 통해 빌드될 수 있다.  
   이런 구성을 가진 앱을 스캐폴딩하려고 할 때 가장 쉬운 방법은 vue-cli을 사용하는 것이다.  

[03-hello/](./03-hello/)  
[04-shopping-list/](./04-shopping-list/)

 - vue-cli  
    $ npm install -g vue-cli  
    $ vue init template-name project-name
    
            Template 종류
            - webpack : Webpack, vue-loader, 정적 분석, 테스트 등 기본 빌드 프로세스 대부분을 설정
            - webpack-simple : Webpack과 vue-loader로 구성된 간단한 조합
            - browserify : Browserify, vueify, 정적 분석, 테스트 등 기본 빌드 프로세스 대부분을 설정
            - browserify-simple : Browserify와 vueify로 구성된 간단한 조합
            - simple : 특별한 모듈 관리 도구를 사용하지 않고 HTML 파일 1개로 구성하는 제일 간단한 조합
    $ npm install  
    $ npm run dev

##### 뷰 컴포넌트
 - 세 가지 영역을 가질 수 있다.  

       <style> - 해당 컴포넌트를 위한 CSS 스타일 포함
           해당 컴포넌트 스코프 내에서만 스타일을 적용하고 싶다면 scoped 속성을 추가한다.
       <template> - HTML 템플릿 역할
       <script> - 뷰 컴포넌트, 메소드, 데이터, 속성들을 위한 자바스크립트 코드
       
 
 ##### 핫 리로딩
 - vue-cli를 이용해 웹팩 스캐폴딩을 사용할 경우 애플리케이션의 파일 변경을 감지하고 변화가 있을 때마다 브라우저에게 자동적으로 새로고침을 지시한다.
 ##### 전처리기
 - 전처리기를 사용하고 있다면 언제든지 .vue 컴포넌트에 적용할 수 있다. 이는 웹팩 로더를 사용할 수 있게 하는 vue-loader 때문에 가능하다.
 
 ### 요약
 - 카멜케이스 형식으로 컴포넌트 변수를 생성 후 템플릿 내부에서 해당 변수에 접근하기 위해서는 케밥케이스를 사용해야 한다.
 - 컴포넌트의 data와 el 속성은 반드시 객체가 아니라 함수여야 한다.
 - 컴포넌트의 스타일을 전역으로 노출하고 싶지 않다면 scoped 속성을 추가하면 된다.
 
 
 #### 참조 사이트
 - vue.js webpack ver  : https://github.com/vuejs-templates/webpack
 - vue-loader : https://vue-loader.vuejs.org/kr/