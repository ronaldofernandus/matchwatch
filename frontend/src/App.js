import React, { useEffect, useState } from 'react'
import MainPage from './pages/MainPage';
import MainPageAfterLogin from './pages/MainPageAfterLogin';


function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  const loginCbHandler = (result) => {
    setLoginStatus(result);
  };
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }, [loginStatus]);
  return (
    <>
     {/* <MainPage></MainPage> Sebelum Login */}
     { loginStatus ? (
        <MainPageAfterLogin ></MainPageAfterLogin>
      ) : (
        <MainPage></MainPage>
      )}
    </>
  );
}

export default App;
