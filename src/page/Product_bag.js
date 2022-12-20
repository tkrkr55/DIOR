import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
export default function Product_bag() {

  return (
    <div >
  <div className='product_title'>
    <h3>액세서리 전체 보기</h3>
    <p>“우아한 여성이라면 액세서리를 그냥 지나칠 수 없을 것입니다.” 크리스챤 디올은 자신의 패션 소사전에서 액세서리에 관해 이렇게 말했습니다.</p>
  </div>
      <Container>
        <Row>
          <Col lg={4} className='bag_list'>
            <img src="https://media.dior.com/img/ko_kr/sku/couture/31JAR923X132_C082_T59?imwidth=460" alt="백" />
          <div>D-BOBBY 좁은 챙 버킷모자</div>
          <div>₩1600000</div>
          </Col>
          <Col lg={4} className='bag_list'>
            <img  src="https://media.dior.com/img/ko_kr/sku/couture/31REV920X131_C578_T59?imwidth=460" alt="백" />
          <div>DiorTravel 캡</div>
          <div>₩1500000</div></Col>
          <Col lg={4} className='bag_list'>
            <img src="https://www.dior.com/couture/var/dior/storage/images/pushs-editos/folder-cruise-vague-2-gifting/31jho106i612co90/38524531-1-eng-GB/31jho106i612co90_1440_1200.jpg" alt="백" />
          <div>Dior jardin d'Hiver 미차 스카프</div>
          <div>₩319000</div></Col>
        </Row>
      </Container>
    </div>
)}

