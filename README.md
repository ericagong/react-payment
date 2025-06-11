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


### 기능적 요구사항

카드 번호를 입력 받을 수 있다.  
:ballot_box_with_check: 카드 번호는 숫자만 입력가능하다.  
:ballot_box_with_check: 카드 번호 4자리마다 - 가 삽입된다.  
:ballot_box_with_check: 카드 번호는 실시간으로 카드 UI에 반영된다.  
:ballot_box_with_check: 카드 번호는 앞 8자리만 숫자로 보여지고, 나머지 숫자는 *로 보여진다.  

만료일을 입력 받을 수 있다.  
:ballot_box_with_check: MM / YY 로 placeholder를 적용한다.  
:ballot_box_with_check: 월, 년 사이에 자동으로 /가 삽입된다.  
:ballot_box_with_check: 만료일은 실시간으로 카드 UI에 반영된다.  
:ballot_box_with_check: 월은 1이상 12이하 숫자여야 한다.

보안코드를 입력 받을 수 있다.  
:ballot_box_with_check: 보안코드는 *으로 보여진다.  
:ballot_box_with_check: 보안코드는 숫자만 입력가능하다.  

카드 비밀번호의 앞 2자리를 입력 받을 수 있다.
:ballot_box_with_check: 카드 비밀번호는 각 폼마다 한자리 숫자만 입력가능하다.  
:ballot_box_with_check: 카드 비밀번호 입력 시, *으로 보여진다.  

카드 소유자 이름을 입력 받을 수 있다.  
:ballot_box_with_check: 선택적으로 입력여부를 결정할 수 있다.  
:ballot_box_with_check: 이름은 30자리까지 입력할 수 있다.  
:ballot_box_with_check: 이름 입력 폼 위에, 현재 입력 자릿수와 최대 입력 자릿수를   실시간으로 보여준다.  

페이지 이동  
:ballot_box_with_check: <(뒤로가기) 버튼 클릭 시, 카드 목록 페이지로 이동한다.  
:ballot_box_with_check: 카드 추가 완료시 카드 등록 완료 페이지로 이동한다.

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
