##VueJs - 참조 : http://meetup.toast.com/posts/99

###개발/구동 환경
####의존성
 - 기본적으로 Vue.js는 사용할 때 신경 써야 할 의존성을 가지고 있지 않다. 2.0부터 Virtual DOM의 구현체인 Snabbdom을 사용하고 있지만, 필요에 의해 수정한 소스로 내장해 사용하고 있어 따로 설치하거나 버전을 신경 쓸 필요가 없다. Vue.js는 템플릿 엔진을 따로 사용하지 않고 웹 컴포넌트 스펙과 유사하게 구현된 HTML 형식의 커스텀 엘리먼트를 이용해 Virtual DOM 렌더 함수로 컴파일하도록 내부에서 구현했다.
 
####추가도구
 - vue-cli
    -  $ npm install -g vue-cli
   
            - webpack : Webpack, vue-loader, 정적 분석, 테스트 등 기본 빌드 프로세스 대부분을 설정
            - webpack-simple : Webpack과 vue-loader로 구성된 간단한 조합
            - browserify : Browserify, vueify, 정적 분석, 테스트 등 기본 빌드 프로세스 대부분을 설정
            - browserify-simple : Browserify와 vueify로 구성된 간단한 조합
            - simple : 특별한 모듈 관리 도구를 사용하지 않고 HTML 파일 1개로 구성하는 제일 간단한 조합
            - 사용법 : $ vue init webpack projectName
        
 - Vuex
    - Vue.js는 인스턴스 생성 시 인자로 전달받는 data 객체를 이용해 상태를 관리하게 되는데, data 안의 내용이 변경되면 내부에서 인지하고 그 데이터를 사용하는 컴포넌트들이 스스로 업데이트를 한다. 이때 디버깅의 편의를 위해 data에 직접 접근하지 않고 따로 스토어 패턴을 이용해서 데이터를 관리하는 객체를 구현할 수 있으며, 결국 Flux 아키텍처와 유사한 구조도 생각해 볼 수 있다. 이렇게 간단하게 스토어를 구현할 수 있으나 직접 만들지 않고, Flux와 Elm 아키텍처에서 영감을 얻어 Vue.js를 확장한 Vuex 사용도 가능하다. 여기서 직접 다루진 않겠지만, 문서 내용을 보면 Flux 아키텍처를 알고 있는 사람이라면 익숙한 단어와 그림이 보일 것이다.
    
 - 단일 파일 컴포넌트를 위한 빌드 환경
    - Vue.js에서는 단일 파일 컴포넌트(Single File Components)를 제공하는데, 이 단일 파일 컴포넌트를 정상적으로 사용하려면 Webpack이나 Browserify를 통해 빌드한 후 브라우저에서 사용 가능한 자바스크립트를 한 파일로 번들링하는 과정을 거쳐야 한다. 여기서 필요한 각 도구의 설정들은 직접 할 필요 없이 vue-cli를 이용해 쉽게 세팅 적용이 가능하다.
    
 - 구동 환경
    - React, Angular 2와 마찬가지로 대부분의 모던 브라우저를 지원하며 인터넷 익스플로러는 9 버전부터 지원한다. Compatibility Note에 적혀있는 내용에 따르면 ES5 기능 중에 폴리필이 불가능한 기능을 이용하기 때문이라고 한다. 그래서 추가적인 폴리필을 이용해도 낮은 버전의 인터넷 익스플로러 지원은 불가능해 보인다.
    ![구동환경](/image/vuejs_browser.png)
    

###아키텍처
####Vue생성자 
 - 뷰 모델(View Model) : MVVM패턴
    ![MVVM패턴](/image/vuejs_mvvm.png)
    
    (출처: https://en.wikipedia.org/wiki/Model-view-viewmodel)
        
        - 뷰 관련 옵션 : el, template
        - 데이터 관련 옵션 : data, methods, computed
        - 컴포넌트 관련 옵션 : components
        - 생명 주기 훅 : created, mounted, updated, destroyed
        
 - 생명주기
 
        - beforeCreate ~ created : 데이터 및 이벤트 초기화
        - created ~ beforeMount : 뷰 생성
        - mounted ~ updated : 데이터 바인딩, 데이터 변경 주시 및 뷰 업데이트
        - destroyed : 자식 컴포넌트, 이벤트 리스너 해제
        
 - 템플릿
    - Vue.js의 데이터를 외부로 보여주기 위해서 어떻게 해야 될까? 뷰 모델 생성에 필요한 옵션 중 template 혹은 el 프로퍼티를 기억하는가? Vue.js에서 데이터는 렌더링 된 DOM에 바인딩 되어 처리되는데, 이러한 처리를 위해 템플릿이 사용되며 HTML 기반의 템플릿 사용을 권장한다. 이는 JSX와 같은 문법을 따로 배우지 않아도, 애플리케이션 개발자가 알고 있는 HTML 기초 지식 안에서 프로그래밍할 수 있다는 뜻이다. (물론 JSX 사용도 가능하다)
    
 - 데이터 플로우
    - 뷰 모델과 템플릿으로 Vue.js의 외형을 살펴보았다면, 이번에는 깊은 범위에서 데이터를 살펴보려고 한다. 지시자를 설명하는 부분에서 반응적(Reactive)이라는 표현이 사용되었는데, 이는 Vue.js가 데이터를 다루는 방식을 명확하게 보여준다. Vue.js에서는 데이터가 변경되었을 때 해당 데이터를 참조하고 있는 뷰도 함께 업데이트된다. 직접 DOM 엘리먼트를 찾아 텍스트를 변경해야만 하던 수고의 과정들을 Vue.js가 대신 처리하고 있는 셈이다. 어떻게 이러한 동작이 가능할까? 
    - 뷰 모델 인스턴스는 watcher 객체를 포함하고, 인스턴스 옵션 중 data는 Vue.js의 데이터로써 순수한 자바스크립트 객체이다. watcher의 역할은 데이터의 변경을 감시하고 있다가 값이 변경되면 지시자에게 이를 알리고 해당 지시자를 가진 DOM을 업데이트할 수 있도록 도와준다. 2.0 버전에서는 Virtual DOM을 사용하면서 DOM 업데이트 방식이 변경되었으나, watcher라는 중요한 게이트를 두고 데이터가 이동된다는 핵심은 변함이 없다.
    
###컴포넌트
  - 컴포넌트에 대해서 들어본 적이 있는가? 컴포넌트는 웹 애플리케이션을 구성하는 최소의 단위이자, 얼마나 UI를 깔끔하게 정리하고 재사용할 수 있는가에 대한 척도가 되는 중요한 기능이다. Vue.js에서도 컴포넌트가 제공되며, 컴포넌트를 사용했을 때 비로소 Vue.js를 제대로 만져보았다고 할 수 있다. 이번 목차를 따로 분류한 이유는 아키텍처에서 설명한 뷰 모델과 템플릿을 기초로 컴포넌트가 생성되기 때문이다. 응용 단계의 스텝을 밟아보자.
  
    
        <div id="example">
            <my-component></my-component>
        </div>
        
        
        // 컴포넌트 등록
        Vue.component('my-component', {
            template: '<p>My framework is Vue.js!</p>'
        });
        
        // 뷰 모델 인스턴스 생성
        var vm = new Vue({
            el: '#example'
        });
    
.
     
       <div id="example">
           <simple-counter></simple-counter>
           <simple-counter></simple-counter>
           <simple-counter></simple-counter>
       </div>
       
       Vue.component('simple-counter', {
           template: '<button v-on:click="increase">{{ counter }}</button>',
           data: function() {
               return {
                   counter: 0
               };
           },
           methods: {
               increase: function() {
                    this.counter += 1;
               }
           }
       });
       
       var vm = new Vue({
           el: '#example'
       });