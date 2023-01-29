import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import BusinessCardStore from 'pages/BusinessCardStore';
import GlobalStyle from 'styles/globalStyles';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<BusinessCardStore />} path="/" />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
