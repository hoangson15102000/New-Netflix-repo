import Navbar from "./components/Navbar";

import Home from './pages/Home';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from "./context/AuthContext";
import ProtectAccount from "./components/ProtectAccount";

function App() {
  return (
    <>
      <AuthContextProvider>
        {/* Nhắc tới children thì AuthContextProvider bọc
        cái Navbar Routes các component nhỏ thì gọi đó là các
        children */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Signup />} />


          <Route path='/account' element={<ProtectAccount><Account /></ProtectAccount>} />

        </Routes>
      </AuthContextProvider>

    </>
  );
}

export default App;
