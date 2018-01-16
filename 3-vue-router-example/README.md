# Vue-cli로 구축한 vue-router 과제

이번 과제는 vue-cli로 template을 사용하여 구축 후 vue-router를 사용하는 과제이다.

## vue-cli가 무엇인가?

**CLI (Command Line Interface)** 는 텍스트 터미널을 통해서 사용자와 컴퓨터가 상호작용 하는 방식을 말함.

말 그대로 vue-cli는 vue프로젝트를 간단하게 CLI를 통해서 스캐폴딩을 할 수 있는 어플리케이션.

> 스케폴딩 : DB영역에서 말하는 스캐폴딩이 아닌, 일반적인 발판을 만들어 준다는 뜻으로 쓰임.

vue-cli를 쓰는 이유는 CLI를 사용하여 vue project의 반복되는 초기 설정을 빠르게 설정하기 위해서고, 그 빠르게 반복작업을 할 때 옵션을 몇 개 주어 커스터마이즈를 약간 가능하게 만들어 놓았음.

## vue-cli 설치

```
$ npm install -g vue-cli
```

전역으로 설치해준다.

## 어떠한 Boilerplate(보일러플레이트) or Template이 있는가?

vue-cli에서는 기본적인 Template을 지원합니다 (Boilerplate 라고도 하지만 vue 에서는 template으로 칭합니다.) 기본적인 template의 확인은 아래의 명령어로 확인하면 됩니다.

```
$ vue list
```

[어떤 것이 있나? Github Vue-Templates 방문](https://github.com/vuejs-templates)

- PWA

```
$ vue init pwa test
```

PWA는 Prograsive Web App의 약자로써 webpack, hot-reload, lint-on-save, unit testing & css 와 함께 기본적 PWA을 구축하는 앱을 만들어 둔 템플릿입니다.

- Browserify

```
$ vue init browserify test
```

Browserify+vueify 조합으로 hot-reload, linting(ESLint), unit testing(karma-jasmine) 지원 템플릿 (설치시 사용여부 선택)

vueify 는 Browserify 변환을 위한 하나의 Vue 컴포넌트 이다.

### Browserify-simple

```
$ vue init browserify-simple test
```

빠른 프로토타이핑을 위한 간단한 Browserify+vueify 조합 템플릿 (hot-reload 포함)

### Simple

```
$ vue init simple test
```

하나의 index.html 파일 생성 (script 포함)

### Webpack

```
$ vue init webpack test
```

webpack+vue-loader 조합으로 hot-reload, linting(ESLint), unit testing(karma+mocha), e2e test(Nightwatch) 지원 템플릿

설치시 선택사항

ESLint preset : Standard, AirBNB, none (사용자 설정)
unit test (Karma + Mocha) (Yes/No)
e2e test (Nightwatch) (Yes/No)
vue-loader 는 webpack 에서 사용하는 Vue 컴포넌트 로더 이다.

### webpack-simple

```
$ vue init webpack-simple test
```

빠른 프로토타이핑을 위한 간단한 webpack+vue-loader 조합 템플릿 (hot-reload 포함)

## 설정 (Webpack Template 기준)

여기서 우리는 router 및 기본적인 설정과 빌드를 해봐야 하므로 Webpack으로 설치 하겠다.

### 일반 설정

```
Project Name : 프로젝트 이름
Project Description : 프로젝트 설명
Author : 제작자
```

### Vue Build 설정

```
vue-build :
 - Runtime + compiler : 스텐다드 선택
 - Runtime only : 이 옵션은 미니멀 버전으로써 예외 처리 및 템플릿이 .vue 안에서만 실행됨.
```

### 라우터 설정

```
vue-router : 뷰 라우터를 넣을지 안넣을지 선택하면 됩니다. 한페이지짜리면 안넣는게 좋을 듯.
```

### ESLint 표준 코딩 컨벤션 옵션

```
ESlint lint :
 - Standard : 기본 ESLint를 사용.
 - AirBnB : AirBnB ESLint를 기본으로 사용 (추천)
 - none : 사용자 커스터마이징 된 파일을 (.eslintrc)를 로드함.
```

### 테스트 설정

```
Unit test : 사용하면 Karma + Mocha를 사용하게 됨.
E2E test : NightWatch를 사용한 시스템 테스트. -> 브라우저 호환성 테스트
```

## 프로젝트 분석

프로젝트를 받았으면 제일 처음 까봐야 하는게 package.json 파일이다.

### Package.json

#### Dev Dependencies

 - AutoPrefixer : css 브라우저 호환 구문을 자동으로 컴파일시에 붙여주는 모듈
 - babel들 : ES6 트랜스 컴파일러 역할
 - Chalk : 터미널에서 색상 커스터마이즈 할 때 사용하는 모듈
 - extract-text-webpack-plugin : 파일을 extract 하는 모듈
 - file-loader : 이미지 파일을 import, require로 불러와서 사용할 수 있게 해쉬값으로 웹팩 번들링 하는 로더.
 - optimized css.. : css asset들의 용량 최적화 로더
 - ora : terminal 안에서 로딩 애니메이션 주는 모듈
 - portfinder : 현재 포트가 실행되어 있는지 알아오는 모듈
 - postcss : js내부의 css를 transform 해서 css로 변환해주는 모듈
 - rimraf : nodejs의 유틸을 rm -rf 사용할 수 있게 하는 모듈
 - SemVer : 'Semantic Versioning'의 줄임말로 체계적인 버저닝 이름 규칙을 위한 제안
 - ShellJS : node.js terminal에서 shall 문법을 쓰도록 하는 모듈
 - UglifyJS-webpack-loader : 못생긴 뭄법을 바꿔주는 (번들링 시) 로더

#### Scripts

 - dev : webpack dev server를 여는데 속성값을 build/dev 값을 가져와서 오픈함.
 - start : local sever를 열어서 테스트 계속 할 수 있도록 함.
 - lint : Lint 표준 (설정값에 따라) 맞는지 체크하여 로컬에 띄움
 - build : product 파일로 가공해서 제작함.

### build/

빌드시 파일들을 minimize 및 trans compiling 하는 소스코드들을 구현해놓은 파일들의 집합.
빌드 타입 변경은 process.env.NODE.ENV를 이용해서 스위치 하며, npm script의 build, start 명령에 따라 설정값을 config/ 폴더에서 불러와서 데이터를 삽입하여 상황마다 다르게 결과가 나오도록 됨.

### config/

npm script command시 dev와 prod의 설정값들을 담아놓은 파일들을 모아둔 폴더
