import './App.css';
import Main from './pages/Main';
import Login from './pages/Login'

// react-responsive(반응형 웹을 만들기 위한 모듈 테스트)
import { useMediaQuery } from 'react-responsive'

function App() {

  // react-responsive(반응형 웹을 만들기 위한 모듈 테스트)
  const isDesktop = useMediaQuery({ minWidth: 992 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  const isMobile = useMediaQuery({ maxWidth: 767 })

  console.log("isDesktop: ", isDesktop);
  console.log("isTablet: ", isTablet);
  console.log("isMobile: ", isMobile);

  return (
    <div className="App">
      {/* <Main /> */}
      <Login />
    </div>
  );
}

export default App;
