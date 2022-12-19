import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
 
  return (
   
      <div>
        {/* 상단 */}
        <video className='video' autoPlay loop muted playsInline  src="https://www.dior.com/couture/var/dior/storage/original/video/dae91737dd478a96c8517e0da8c9418d.mp4"></video>
         <div className='Home_top'>
          <p>홀리데이 시즌의 본질과 마법을 담은 마리아 그라치아 치우리의 여성복 아이템은 홀리데이 기간 동안 전용 패키지와 함께 만나볼 수 있습니다.<br/> 디올 하우스만의 선물의 예술을 떠올리게 하는 우아한 터치입니다.</p>
         </div>
         {/* 중간 */}
         <div className='product_list' >
         <Link to="/product" style={{ textDecoration: 'none',color:'black',textAlign:'center' }}>
          <img src="https://www.dior.com/couture/var/dior/storage/images/38706989/9-kor-KR/jewelry-timepieces6_1440_1200.jpg?imwidth=480" alt="쥬얼리" /> 
          <p>주얼리</p>
          </Link>
          <Link to="/productAC" style={{ textDecoration: 'none',color:'black',textAlign:'center'  }}>
           <img src='https://www.dior.com/couture/var/dior/storage/images/horizon/fashion/fashion-home-components/xmas-grid-%3E-4-pushs/bags/38727324-9-kor-KR/bags_1440_1200.jpg?imwidth=480' alt='핸드백'></img>
          <p>가방</p>
          </Link>
          <Link to="/productBAG" style={{ textDecoration: 'none',color:'black',textAlign:'center' }}>
            <img src='https://www.dior.com/couture/var/dior/storage/images/horizon/fashion/fashion-home-components/xmas-grid-%3E-4-pushs/accessories-woman/38744220-7-kor-KR/accessories-woman_1440_1200.jpg?imwidth=480' alt='악세사리'></img>
          <p>악세사리</p>
          </Link>
         </div>
         <hr></hr>
        {/* 하단 1-1 */}
        <div className='gift_bg'>
          <div className='gift_box'>
            <h3> 우아하게 전하는 제품</h3>
            <p>함께 나누는 순간의 마법을 기념하기 위해 정성스럽게 제작된 Dior 기프트 세트는 Dior의 꿈의 중심에 있는 선물과 기쁨의 예술에 경의를 표하며 가장 소중한 애정 어린 순간을 기립니다. </p>
            <button className='btn'> 감상하기 </button>
          </div>
          <img src='https://www.dior.com/couture/var/dior/storage/images/38584670/5-kor-KR/column-23_1440_1200.jpg?imwidth=960' alt=''></img>
        </div>

        <div className='foolt'>
          <p>
          크리스챤디올꾸뛰르코리아주식회사 | 04539 서울특별시 중구 을지로5길 19, 26층(수하동) | 사업자등록번호: 120-81-74197 <br/>
대표자: 트렁히엔트란, Khong May Wan Sharon | 통신판매업 <br/>
신고번호: 2021-서울중구-01116 | 사업자정보확인<br/>
개인정보관리책임자: 김지혜I 고객센터: 02-3280-0104 (contactdiorkr@dior.com) | 호스팅 서비스: Smile Hosting<br/>
COPYRIGHT © CHRISTIAN DIOR COUTURE KOREA ALL RIGHTS RESERVED.<br/>
토스페이먼츠 구매안전서비스 이용 확인증 확인하기<br/>
크리스챤디올꾸뛰르코리아㈜는 통신판매중개자로서 본 웹사이트와 연결된 사이트에서 엘브이엠에치코스메틱스(유)가 판매하는 뷰티 제품의 거래당사자가 아니며,<br/>
엘브이엠에치코스메틱스(유)가 등록한 상품, 거래정보 및 거래에 대해 크리스챤디올꾸뛰르코리아㈜는 일체 책임을 지지 않습니다.<br/>
          </p>
        </div>

      </div>
    
  )
}
