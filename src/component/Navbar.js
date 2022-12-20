import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


export default function Navbar({authenticate}) {
const menuList = ["주얼리","가방","악세사리","뉴스 및 패션쇼","기프트 이벤트"]
  
  
  const navigate = useNavigate();
 
  const search = (e)=>{
    if(e.key === "Enter"){
      let keyword = e.target.value
      

      navigate(`/product/?q=${keyword}`)
    }
  }

  const navbar_item =(item)=>{
    if(item === '주얼리'){
      return navigate(`/product`)
    }else if(item === '가방'){
      return navigate(`/productAC`)
    }else if(item ==='악세사리'){
      return navigate(`/productBAG`)
    }else if(item ==='뉴스 및 패션쇼'){
      return navigate(`/news`)
    }else if(item ==='기프트 이벤트'){
      return navigate(`/event`)
    }
  }
 
  return (
     
    <div className='nav-bar_top'>
      <div className='login-button'>
      <div><FontAwesomeIcon icon={faUser}/></div>
      <Link  to="/login" style={{ textDecoration: 'none',color:'black'}}>
      <div >
      {
        authenticate === true ? <div className='login'>로그아웃</div> :<div className='login'>로그인</div>
      
      }
      </div>
      </Link>
      
      </div>
      
    
      <div className='nav-setion'>
        <Link to ='/'>
      <img 
      width={200}
      src="https://www.dailypop.kr/news/photo/202007/45828_90109_27.png" alt="로고" />
      </Link>
      </div>
      
      <div className='nav-bar'>
       
      <ul className='menu-list' >
      {menuList.map((item)=>(
         <li key={item} onClick={()=>navbar_item(item)}>{item}</li>
        ))}
      </ul>
    
       
      </div>
      <div className='input_box'>
        <FontAwesomeIcon icon={faSearch}/>
        <input type="text" placeholder="제품검색" onKeyPress={(e)=>search(e)}/>
        </div>
      
   

    </div>
  
  )
}
