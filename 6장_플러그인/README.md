# 플러그인: 자신만의 벽돌로 집 짓기

뷰 플러그인이 어떻게 동작하는지와 어떻게 생성돼야 하는지 알아본다.  
이미 존재하는 플러그인을 사용해보고 우리만의 플러그인을 생성해 본다.
- 플러그인의 특징을 이해한다.
- 쇼핑 목록 애플리케이션에서 resource 플러그인을 사용한다.
- 희색, 분홍색, 갈색 노이즈를 생성하는 플러그인을 제작하고 포모도로 애플리케이션에 적용한다.

## 뷰 플러그인의 특징

뷰에서 제공하지 못하는 특정 기능을 제공한다.  
전역으로 제공되는 메소드 정의와 인스턴스 메소드부터 시작해 새로운 지시자 필터들과 전환 기능들을 포함한다.  

기존 플러그인 사용을 위한 설치
```
npm install some-plugin --save-dev
```

사용을 위한 선언
``` js
var Vue = require('vue');
var SomePlugin = require('some-plugin');

Vue.use(SomePlugin);
```

## 플러그인 생성
생성하는 플러그인은 전역 메소드나 인스턴스 메소드 또는 커스텀 지시자를 정의하는  install 메소드를 제공해야 한다.  

```js
MyPlugin.install = (Vue, options) => {
    // 1. 전역 메소드나 속성 추가
    Vue.myGlobalMethos = _=>{};
    // 2. 전역 지시자 추가
    Vue.directive('my-directive', {});
    // 3. 인스턴스 메소드 추가
    Vue.prototype.$myMethod = _=>{}
}
```

## 쇼핑 목록 애플리케이션에서 vue-resource 플러그인  사용하기

resource 플로그인을 사용하면 REST를 생성과 메소드 호출을 손쉽게 할 수 있다.  
쇼핑 목록을 추가하고 지웠을 때 갱신된 정보들이 저장되어 애플리케이션을 다시 시작해도 이전에 보던 정보들이 그대로 보이도록 하자.  

- 저장소를 가지고 있는 서버가 필요하다.  
- vue-resource 플러그인을 설치하고, 사용을 위한 액션을 생성한다.  
- 데이터 정합성을 휘해 쇼핑목록이 갱신될 때마다 상태를 갱신할 수 있는 액션을 호출한다.  
- 애플리케이션이 시작하면 서버에서 쇼핑 목록을 가져와서 상태 값에 할당한다.  
- 쇼핑 목록을 생성하고 기존 목록을 삭제하는 방법도 제공한다.  

### 간단한 서버 생성.
[json-server](https://github.com/typicode/json-server)를 설치해 보자.
#npm install --save-dev json-server
npm install -g json-server

스크리립트 추가
"scripts" : {
    "server" : json-server --watch server/db.json
}

서버시작
npm run server

데이터 확인
http://localhost:3000/shoppinglists

## vue-resource 설치와 자원 및 메소드 생성
[vue-resource](https://github.com/vuejs/vue-resource/blob/master/docs/resource.md)

npm install vue-resource --save-dev


## 플러그인을 직접 만들어 포모도로에서 사용하기

웹 오디오 API를 이용해 백색, 분홍색, 갈색 소을을 생성하는 뷰 플러그인을 제작해본다.

### NoiseGenerator 플러그인 제작

우리가 만드는 플러그인은 자바스크립트 파일 하나에 들어가게 된다.  
플러그인은 세 가지 메소드를 포함하는데 
그 첫 번째는 지시자와 필요한 뷰 메소드 들이 정의되는 Vue.install 메소드,  
그리고 각 소음들의 생성을 담당한다.

pomodoro를 기반으로 플러그인을 제작해 본다.

src/plugins 폴더를 추가  

VueNoiseGeneratorPlugin.js 파일을 추가한다음 세가지 메소드를 생성한다.
(코드는 인터넷에서 찾아서 활용한다.)
- generateWhiteNoise
- generatePinkNoise
- generateBrownNoise

### 포모도로 애플리케이션에서 플러그인 사용

main.js 파일을 열어서 VueNoiseGeneratorPlugin을 선언하고 뷰가 사용하도록 한다.
```js
import NGplugin from './plugins/VueNoiseGeneratorPlugin'

Vue.use(NGplugin);
```

Vue.noise 메소드를 사용하면 어디서나 noise 지시자를 사용할 수 있다.

```html
<!-- App.vue -->
<template>
    <div id="app" class="container" v-noise="'brown'">
    ...
    </div>
</template>
```

지시자 명으로 v-noise를 사용한 것에 유의 하자.  
지시자 사용을 위해서는 v접두사를 지시자 이름 앞에 붙여야 한다.  
큰따옴표 내부에 작은따옴표를 사용해서 brown 문자열을 감싸준다. 이렇게 하지 않으면 뷰는 brown 이라는 이름을 가지는 데이터 속성을 검색하는데, 이것이 뷰가 동작하는 방식이다.  




