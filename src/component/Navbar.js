import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


export default function Navbar() {
  const menuList =["여성패션","남성패션","가방","향수","뷰티","뉴스 및 패션쇼","기프트&서비스"]
  
  
  const navigate = useNavigate();
  const search =(event)=>{
    if(event.key === "Enter"){
     let keyword = event.target.value
     navigate(`/?q=${keyword}`)
    }
   }
 
  return (
     
    <div className='nav-bar_top'>
      <div className='login-button'>
      <div><FontAwesomeIcon icon={faUser}/></div>
      <Link  to="/login" style={{ textDecoration: 'none',color:'black'}}>
      <div className='login'>로그인</div>
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
      <ul className='menu-list'>
      {menuList.map((item)=>(
         <li>{item}</li>
        ))}
      </ul>
       
      </div>
      <div className='input_box'>
        <FontAwesomeIcon icon={faSearch}/>
        <input type="text" placeholder="제품검색" onKeyUp={(event)=>search(event)}/>
        </div>
      
   

    </div>
  
  )
}
