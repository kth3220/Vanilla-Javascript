# Vanilla-Javascript

순수 **Vanilla JavaScript**로 SPA 프레임워크를 직접 만들어보는 학습용 예제입니다. React와 비슷한 방식의 JSX, 가상 DOM, 라우터, 상태관리 등을 직접 구현해보는 것이 목표입니다.

##  주요 기능

- 커스텀 JSX 문법: `@jsx createVNode`
- 가상 DOM 기반 렌더링 & diff 알고리즘
- 클라이언트 사이드 라우팅 (`/`, `/login`, 404 처리)
- 인증 검사(AuthGuard) 및 `ForbiddenError` 클래스
- 전역 상태 관리(`globalStore`)와 옵저버 패턴
- `localStorage` 래퍼를 통한 간단한 로그인 유지
- 게시글 CRUD & 검색 기능
- 이벤트 유틸리티, 헬퍼 함수 등

##  프로젝트 구조

```
index.html
package.json
vite.config.js
src/
  main.jsx           # 앱 진입점
  render.jsx
  router.js
  components/
    layouts/Headers.jsx
    posts/            # 게시글 관련 컴포넌트
      PostList.jsx
      PostItem.jsx
      PostForm.jsx
      PostDeleteButton.jsx
      PostSearch.jsx
      PostHeaders.jsx
  page/
    HomePage.jsx
    LoginPage.jsx
    NotFoundPage.jsx
  lib/                # 프레임워크 코어
    createVNode.js
    renderElement.js
    updateElement.js
    createRouter.js
    createStore.js
    createStorage.js
    createObserver.js
    createElement.js
    normalizeVNode.js
    eventManager.js
  stores/
    globalStore.js
  storages/
    userStorage.js
  util/
    eventUtils.js
  error/
    ForbiddenError.js
```

##  설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 모드(Hot-Reload)
npm run dev

# 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

브라우저에서 `http://localhost:5173`(기본)로 접속하면 애플리케이션을 확인할 수 있습니다.

##  확장 & 학습 팁

- 컴포넌트/라우트 추가 → `src/page`와 `src/components`에 파일 추가, `router.set`에 경로 등록
- 전역 상태에 속성 추가 후 `globalStore`를 통해 구독/갱신
- `createVNode`/`renderElement`를 수정해 성능 최적화 연습
- 인증 흐름 개선, 폼 유효성 검사, API 연동 등으로 기능 확장

##  기타

- 저자: kim tae hee
- 목적: Vanilla JS 기반 SPA 구조 이해 및 교육용
