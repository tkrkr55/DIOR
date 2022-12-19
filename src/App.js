
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import Home from './page/Home';
import Product from './page/Product';
import Product_ac from './page/Product_ac';
import Product_bag from './page/Product_bag';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import PrivateRoute from './Route/PrivateRoute';


//1. 전체상품페이지, 로그인 페이지 ,상품상세 페이지 만들기
// 1-1 네이게이션 바 만들기
//2. 전체상품페이지 에는 전체 상품을 볼 수 있다.
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
//4. 상품 디테일을 눌렀으나, 로그인이 안되있을경우에는 로그인 페이지가 먼저 나온다.
//5. 로그인이 되어 있을경우 상품 디테일 페이지를 볼 수 있다.
//6. 상품 디테일 페이지에서 로그아웃을 하면 다시 로그인 페이지로 간다.
//7. 로그인을 하면 로그아웃으로 변하고 로그아웃을 하면 로그인으로 변한다. "글씨가"
//8. 상품을 검색할 수 있다.
function App() {
  const [authenticate,setAuthentifate]=useState(false)
  useEffect(()=>{
  },[authenticate])
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/productBAG" element={<Product_bag/>}></Route>
        <Route path="/productAC" element={<Product_ac/>}></Route>
        <Route path='/login' element={<Login setAuthentifate={setAuthentifate}/>}></Route>
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
