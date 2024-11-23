# 인터넷턴 프론트엔드

### 목차
 - [**Members**](#members)
 - [**Stacks**](#stacks)
 - [**커밋 메세지 컨벤션**](#커밋-메세지-컨벤션)
 - [**폴더 구조**](#폴더-구조)

## Members
| 정채희 | [노은서](https://github.com/podkeke) | [송윤석](https://github.com/karpitony) | [한상협](https://github.com/hans6988) | 이태균 | [이현규](https://github.com/hy30nq) |
|:---:|:---:|:---:|:---:|:---:|:---:|
| <img width=100 src="./public/Favicon.svg"/> | <img width=100 src="https://avatars.githubusercontent.com/u/151901774?v=4"/> | <img width=100 src="https://avatars.githubusercontent.com/u/87839885?v=4"/> | <img width=100 src="https://avatars.githubusercontent.com/u/144535698?v=4"/> | <img width=100 src="./public/Favicon.svg"/> | <img width=100 src="https://avatars.githubusercontent.com/u/121498814?v=4"/> |
| 디자인 | 프론트엔드 | 프론트엔드 | 프론트엔드 | 백엔드 | 백엔드 |

## Stacks
TBD

## 커밋 메세지 컨벤션

| 이름 | 역할 |
|:---:|:---:|
| **FEAT** | 새로운 기능 추가 |
| **FIX** | 버그 수정 |
| **HOTFIX** | 급하게 버그를 고치는 경우 |
| **DOCS** | 문서 수정 |
| **STYLE** | 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 |
| **REFACTOR** | 코드 리펙토링 |
| **CHORE** | 빌드 업무 수정, 패키지 매니저 수정 등 개발과 상관없는 잡일 |

- 커밋 메세지의 제목만 자세히 쓰고, 본문이나 꼬리말 등은 번거로우니 생략해도 됩니다.
> ex)
> `feat: 새로운 기능 추가`
> `refactor: 기존 검색 기능 비효율성 수정`

## 폴더 구조
```
📦src
 ┣ 📂assets
 ┣ 📂components
 ┣ 📂hooks (커스텀 훅 보관 폴더)
 ┣ 📂pages (라우팅 페이지 폴더)
 ┣ 📂stores (전역 상태 관리 저장 폴더)
 ┣ 📂services (api 로직 저장 폴더)
 ┣ 📂utils (정규표현식, 공통함수등을 저장)
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┣ 📜main.jsx
 ┗ 📜Routers.jsx (라우팅 설정 파일)
```