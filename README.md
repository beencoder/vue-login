# 🔐 AuthFlow: Firebase & Pinia 기반 전역 인증 시스템

> **파편화된 인증 로직을 전역 상태 관리(Pinia)로 통합하고, Firebase Observer를 통해 데이터 무결성을 확보한 인증 아키텍처 리팩토링 프로젝트입니다.**

## 🔗 Link

- **Live Demo:** [https://auth-flow-blond.vercel.app/](https://auth-flow-blond.vercel.app/)

## 🛠 Tech Stack

- **Framework:** Vue 3 (Composition API)
- **State Management:** Pinia (Centralized Auth Store)
- **Backend Service:** Firebase v10 (Authentication)
- **Routing:** Vue Router (Navigation Guard)
- **Library:** pinia-plugin-persistedstate (Session Persistence)

## 🔥 핵심 구현 사항

- **Centralized Auth Store:** Pinia를 활용하여 유저 정보(Profile)와 로그인 상태를 전역화하여 컴포넌트 간 데이터 의존성 해결
- **Real-time Auth Observer:** Firebase의 `onAuthStateChanged` 리스너를 앱 진입점에 배치하여 서버-클라이언트 간 인증 상태 실시간 동기화
- **Secure Navigation Guard:** 라우터 메타 필드(`requiresAuth`)를 설계하여 미인증 사용자의 특정 페이지 접근을 원천 차단하는 보안 로직 구축
- **Dynamic Profile Management:** `updateProfile` 연동으로 가입 및 수정 시 닉네임을 동적으로 반영하고 스토어와 즉시 동기화하는 반응형 UI 구현

## 📋 핵심 트러블슈팅 (Refactoring)

### 1. 비동기 인증 체크와 앱 마운트 시점 불일치 해결

- **문제:** 페이지 새로고침 시 Firebase의 인증 확정(비동기)보다 Vue 앱의 마운트가 먼저 일어나, 로그인 상태임에도 순간적으로 '방문자' UI가 노출되거나 보호된 경로에서 튕겨나가는 현상 발생.
- **해결:** `onAuthStateChanged` 콜백 내부에서 유저 상태가 확인된 시점에만 앱 인스턴스를 마운트(`app.mount`)하도록 초기화 로직을 설계하여 비정상적인 UI 깜빡임 및 리다이렉트 원천 차단.

### 2. 컴포넌트 간 데이터 불일치 및 전역 상태 동기화 개선

- **문제:** 회원정보 수정(EditProfile) 후 서버 데이터는 변경되나 헤더(Header) 등 다른 컴포넌트의 닉네임이 즉시 갱신되지 않는 데이터 파편화 현상 발생.
- **해결:** 기존 컴포넌트 내부에서 수동으로 관리하던 로컬 state를 제거하고, 모든 유저 정보를 Pinia 스토어로 단일화(Single Source of Truth). 정보 수정 시 스토어에 새로운 유저 객체를 할당하는 방식으로 전체 UI가 실시간 반응하도록 리팩토링.

### 3. 무분별한 API 호출 및 로직 중복 제거 (SoC)

- **문제:** 모든 페이지(Login, Edit, SignUp)마다 Firebase 인증 객체를 직접 호출하고 `getCurrentUser` 등의 비동기 함수를 중복 선언하여 유지보수 효율 저하.
- **해결:** 스토어 내부에 `setUser`, `clearUser` 액션을 정의하고 컴포넌트는 오직 스토어의 상태값만 바라보게 하는 관심사 분리(SoC)를 통해 코드량을 약 40% 절감하고 로직 가시성 확보.

### 4. SPA 특성에 따른 메모리 누수 방지

- **문제:** 메인 페이지의 마우스 인터랙션(Mouse Parallax) 이벤트 리스너가 페이지 이동 후에도 제거되지 않고 남아 성능 저하 및 예외 에러 유발.
- **해결:** `onUnmounted` 생명주기 훅에서 `removeEventListener`를 명확히 호출하여 메모리 누수를 방지하고, 단일 책임 원칙에 의거하여 애니메이션 로직을 깔끔하게 정리.

## 📂 Project Structure

```text
src/
├── stores/          # Pinia 기반 전역 상태 관리 (Auth Store)
├── router/          # Vue Router 설정 및 Navigation Guard (보안)
├── components/      # UI 컴포넌트 및 기능별 화면 (Login, SignUp, Edit)
├── services/        # Firebase 초기화 및 공통 로직 관리
├── App.vue          # 최상위 컴포넌트 및 인증 상태 감시자 레이아웃
└── main.js          # 앱 엔트리 포인트 및 비동기 마운트 제어