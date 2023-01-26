import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BusinessCardStore from 'pages/BusinessCardStore';
import GlobalStyle from 'styles/globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<BusinessCardStore />} path="/" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
