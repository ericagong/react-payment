<p align="middle" >
  <img src="https://techcourse-storage.s3.ap-northeast-2.amazonaws.com/0fefce79602043a9b3281ee1dd8f4be6" width="400">
</p>
<h2 align="middle">페이먼츠</h2>
<p align="middle">React 모바일 페이먼츠 애플리케이션</p>
</p>

## 🚀 Getting Started

> `Component-Driven Development` 에 따라 UI를 구성하고 재사용 가능한 `Component`를 작성합니다.

:ballot_box_with_check: `모바일 타겟`의 웹 앱을 구현하며 사용하기 `편리한 모바일 UI/UX`에 대해 고민해봅니다.  
:ballot_box_with_check: 다른 라이브러리나 프레임워크 없이 오로지 `React`만으로 상태를 관리하고 컴포넌트를 설계합니다.  
:ballot_box_with_check: `재사용 가능한 Component`를 직접 작성하고 사용합니다.  
:ballot_box_with_check: `Controlled` & `Uncontrolled Components`에 입각하여 `Form`을 핸들링합니다.  

# 진행 방향
## :white_check_mark: STEP 1 

### 구현 순서
> `Storybook 기반으로 TDD 사이클`을 통해 안전하게 구현을 확장시켜나간다.  

1. Primitive UI(Atom) 구현  
2. Molecule / Organism: 기본 블록을 조합  
3. Headless UI 훅 (로직 분리)  
4. Context + Compound Pattern 도입  
5. TDD 사이클을 최적화(유닛 테스트, e2e 테스트 도입)  
6. 최종 확장: Template & Page 구현  


### 비기능적 요구사항
:ballot_box_with_check: step1은 화면(UI) 구현 중심 -> 기능별 폴더 분리  
:ballot_box_with_check: 상향식 컴포넌트 계층(Atom, Molecule, Organism, Template, Page)으로 설계  
:ballot_box_with_check: 스토리북 기반 Primitive UI 테스트 -> 상태에 따른 컴포넌트 변화 테스트로 확장하며 TDD 사이클로 구현  
:ballot_box_with_check: Headless UI 훅으로 로직 분리 = 각 입력항목별 입력 처리 & 포맷팅을 훅으로 역할 분리  
:ballot_box_with_check: 카드 번호, 만료일, 카드 소유자 이름,보안코드, 카드 비밀번호 앞 두자리 모두 Controlled로 구현 (모든 입력은 실시간으로 UI에 반영되거나 검증이 필요)  
:ballot_box_with_check: Context + Compound Pattern으로 각 단계 컴포넌트에 상태 공유  (부모가 로직/상태 관리 - 자식은 UI 관리)  

### 리팩토링 방향성
:ballot_box_with_check: 관심사 변화에 따라 폴더 구조 점진적 리팩토링 (도메인, 역할 등...)  
:ballot_box_with_check: 향후 step2, 3 진행할 때 stepper 구조 도입(Context로 전역 상태 공유하는 형태)
