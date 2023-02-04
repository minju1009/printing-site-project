- 프린팅 사이트를 클론한 프로젝트
- 원본 사이트 : [오프린트미](https://www.ohprint.me/store/business-card/search/square?paperShapeType=SOFT&backCode=&luxeColorCode=&glossyType=&frameCode=504001&paperCode=160033&productCode=101003000001&offsetPrint=N&quantity=50&accessory=&sizeQuantitys=)
- 개발 인원 : 1인 (김민주)
- 개발 기간 : 22.2.2 ~ 2.5 (4일)
- 아토믹 디자인 패턴과 합성컴포넌트 패턴을 이용한 컴포넌트 재사용을 학습하기 위해 진행



https://user-images.githubusercontent.com/90900882/216752374-37357666-0624-460c-8f88-8de6bc36e85b.mp4




## 사용한 기술 스택

클라이언트 상태는 recoil을 사용하였으며, 데이터는 컴포넌트 폴더 내에 `constants.ts` 파일을 만들어 보관 후 사용함. (해당 파일 안에 있는 데이터를 추후 react-query로 가져와서 사용한다고 가정)

- react, typescript
- 상태관리 : recoil
- 스타일 :  styled-components



## 컴포넌트를 만들 때 고려한 내용

추후 페이지를 추가했을 때 사용가능성이 높은 공통 컴포넌트는 `아토믹 디자인 패턴` 과 `합성 컴포넌트 패턴` 을 활용하였음.

- 아토믹 디자인 패턴 [(참고한 글)](https://fe-developers.kakaoent.com/2022/220505-how-page-part-use-atomic-design-system/)
<img width="642" alt="image" src="https://user-images.githubusercontent.com/90900882/216752229-b53eb001-6168-4ca6-840c-90dabc4336e2.png">

- 합성 컴포넌트 패턴
    - 서브 컴포넌트로 분해한 후, 필요한 것만 조합해서 사용
    
    ```jsx
    // CheckboxFilter 
    const CheckboxFilter = Object.assign(Layout, {
      List,
      Title,
      Checkbox,
    });
    
    // 사용
    <CheckboxFilter key={`filter-${keyName}`}>
    	<CheckboxFilter.Title>{title}</CheckboxFilter.Title>
    	  <CheckboxFilter.List>
    	    {child.map(({ label, value }) => (
        <CheckboxFilter.Checkbox
           key={`filter-checkbox-${value}`}
           isChecked={isIncludedInFilterList(keyName, value)}
           label={label}
           onChange={() => handleCheckboxClick(keyName, label, value)}
         />
         ))}
      </CheckboxFilter.List>
    </CheckboxFilter>
    
    // 스타일 override 하여 사용
    const ColorCheckboxWrap = styled(CheckboxFilter.List)`
      ${flex('flex-start', 'center')}
      flex-wrap: wrap;
      gap: 20px;
      padding: 0 50px 0 10px;
    `;
    
    ```
    

## 구현사항

### 1. Layout

- 반복되는 `헤더, 바디, 푸터` 템플릿화
- components/templates/Layout



### 2. CardTemplate 보여주기

- 제공받은 `Info.txt` 와 이미지들을 활용하여, API로 부터 다음과 같은 정보를 받을 수 있다고 가정, mock 데이터를 만들어 작업

```jsx
const TEMPLATE_LIST = [
  {
    templateCode: '01',
    templateName: '굿 컴퍼니',
    templateDescription: '기본 도형과 이니셜을 사용하여 누구나 손쉽게 사용할 수 있는 레이아웃입니다.',
    templateProduct: '정사각사이즈 명함',
    templateOption: '소프트 / 직각 모서리',
    price: 2900,
    designList: [
      { itemType: 'FRONT', templateCode: '01', imgURL: '/template/굿 컴퍼니/image01.png', designCode: '001' },
      { itemType: 'BACK', templateCode: '01', imgURL: '/template/굿 컴퍼니/image02.png', designCode: '002' },
      { itemType: 'BACK', templateCode: '01', imgURL: '/template/굿 컴퍼니/image03.png', designCode: '003' },
      { itemType: 'BACK', templateCode: '01', imgURL: '/template/굿 컴퍼니/image04.png', designCode: '004' },
    ],
  },
  {
    templateCode: '02',
    templateName: '비장의 카드',
    templateDescription: '유니크한 디자인으로 금융업종에서 사용해 보세요. 유쾌함을 동시에 전달할 수 있을 거예요',
    templateProduct: '정사각사이즈 명함'

	...

]
```

### 3. 모달 컴포넌트 생성

- [Portals](https://ko.reactjs.org/docs/portals.html)를 이용하여 모달 컴포넌트를 만든 후 사용
- 모달 오픈시 생성한 Portal은 모달이 닫힐 때 다시 삭제
- 모달 오픈시 스크롤이 되지 않도록 root의 body에 `overflow:hidden` 스타일 추가
- 기존 root div로 이벤트 버블링 되지 않도록 처리

```jsx
export default function Modal({ children, closeModal }: IModalProps) {
  const portalElRef = useRef<HTMLDivElement>(document.createElement('div'));

  const handleClickCloseBtn = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    closeModal();
  };

  useEffect(() => {
    const { body } = document;
    portalElRef.current.id = 'modal';

    const makePortal = () => {
      body.style.overflow = 'hidden';
      body.appendChild(portalElRef.current);
    };

    const removePortal = () => {
      body.style.overflow = '';
      body.removeChild(portalElRef.current);
    };

    makePortal();
    return () => {
      removePortal();
    };
  }, []);
```

### 4. 템플릿 모달 보여주기

- 사용자가 템플릿 선택시, 해당 템플릿에 대한 데이터를 recoil에 저장 후 사용
- 사용자에게 해당 템플릿에 대한 정보 보여준 후, 서버에 사용자가 선택한 뒷면 디자인(designCode[]) 및 템플릿 코드를 보내주는 것을 목적으로 함
- 하단 디자인 클릭 시 해당 디자인이 메인에 보이도록 함
<img width="719" alt="image" src="https://user-images.githubusercontent.com/90900882/216752255-1ddb248c-79a5-47a7-9075-d97526ad8725.png">

### 5. Nav 드롭다운 구현

- 오프린트미 네트워크탭의 `group` 데이터를 참고하여 사용자가 메뉴 위 hover 시 드롭다운 메뉴 구현
- category 유무에 따라 다른 뷰 구현

```jsx
// 테스트 기준 페이지 네트워크 탭에서 불러와지는 group 데이터에 데이터 추가하여 사용
export const NAV_MENU_GROUP = [
  { menuId: 1, name: '표준사이즈', value: '101', attr: 'BUSINESS_CARD', isNew: false, category: '사이즈' },
  { menuId: 1, name: 'OPM사이즈', value: '107', attr: 'TRANS_BUSINESS_CARD', isNew: false, category: '사이즈' },
  { menuId: 1, name: '정사각사이즈', value: '101', attr: 'BUSINESS_CARD', isNew: false, category: '사이즈' },
  { menuId: 1, name: '소프트', value: '107', attr: 'TRANS_BUSINESS_CARD', isNew: false, category: '용지' },
  { menuId: 1, name: '프리미엄 소프트', value: '107', attr: 'TRANS_BUSINESS_CARD', isNew: false, category: '용지' },
  { menuId: 1, name: '프리미엄 매트', value: '107', attr: 'TRANS_BUSINESS_CARD', isNew: false, category: '용지' },
  { menuId: 1, name: '오리지널', value: '107', attr: 'TRANS_BUSINESS_CARD', isNew: false, category: '용지' },
  { menuId: 1, name: '럭스', value: '107', attr: 'TRANS_BUSINESS_CARD', isNew: false, category: '용지' },
  { menuId: 1, name: '리넨', value: '107', attr: 'TRANS_BUSINESS_CARD', isNew: false, category: '용지' },
.
....
]]
```
<img width="730" alt="image" src="https://user-images.githubusercontent.com/90900882/216752270-86a3c8b5-22a8-40f4-8b0d-3a8a0201bc66.png">

### 6. 필터 기능 구현

- 위에서 언급한 합성 컴포넌트를 이용하여 색상 필터의 경우 체크박스 아이템이 달라도 동일한 뷰의 컴포넌트 사용
- 사용자가 체크박스 선택 후  `적용` 을 선택하면, 타이틀(정사각사이즈 명함) 옆에 해당 선택사항이 보여짐
- 선택한 필터 데이터는 `recoil`에 관리, 추후 서버에 데이터 보내는 것이 용이하도록 아래와 같이 저장

```jsx
export const filterListState = atom<IFilterList>({
  key: 'filterListState',
  default: {
    jobCodes: [{ label: '예술/엔터테인먼트', value: '501001' },],
    themeCodes: [],
    usageCodes: [],
    colorCodes: [],
  },
});
```

<img width="720" alt="image" src="https://user-images.githubusercontent.com/90900882/216752274-a32b67dc-3f03-46d4-a526-d4cb0ec92360.png">

### 7. 스크롤 버튼 구현

- 사용자가 스크롤 내릴 시 우측 하단에 제일 상단으로 갈 수 있는 스크롤 버튼 애니메이션 구현
- 다른 페이지로 넘어갈 때는 이벤트가 발생하지 않도록 구독 해제

```jsx
const [position, setPosition] = useState(0);

  const handleScrollUp = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handlePosition = () => {
      setPosition(window.scrollY);
    };

    window.addEventListener('scroll', handlePosition);
    return () => {
      window.removeEventListener('scroll', handlePosition);
    };
  }, []);
```
<img width="725" alt="image" src="https://user-images.githubusercontent.com/90900882/216752306-8e17c9ff-5f1a-466d-b865-9b783dea4064.png">

## 프로젝트 관리

- 짧은 시각 효율적으로 할 일 관리를 하기 위해 Jira 

<img width="706" alt="image" src="https://user-images.githubusercontent.com/90900882/216752316-fdd69f87-d310-40c4-ad1c-b7beb0edb118.png">

