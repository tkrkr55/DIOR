import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

export default function Product_ac() {
  return (
    <div > <div className='product_title'>
    <h3>핸드백 전체 보기</h3>
    <p>팔에 착용하거나 손 끝에 드는 이브닝 백과 파우치는 여성스럽고 세련된 실루엣을 완성하는 마지막 터치입니다.
모든 의상에 어울리는 컬러와 스타일로 재해석된 백은 언제 어디서든 우아한 아름다움을 연출합니다.</p>
  </div>
      <Container>
        <Row>
          <Col lg={4} className='bag_list'>
            <img src="https://media.dior.com/img/ko_kr/sku/couture/M1296ZMDW_M884_TU?imwidth=460" alt="백" />
          <div>DIOR BOOK TOTE 미디엄 백</div>
          <div>₩4750000</div>
          </Col>
          <Col lg={4} className='bag_list'>
            <img  src="https://media.dior.com/img/ko_kr/sku/couture/M1296ZRVX_M933_TU?imwidth=460" alt="백" />
          <div>Dior Book Tote 미디엄 백</div>
          <div>₩4750000</div></Col>
          <Col lg={4} className='bag_list'>
            <img src="https://media.dior.com/img/ko_kr/sku/couture/M0538OCAL_M900_TU?imwidth=460" alt="백" />
          <div>Lady Dior미디엄 백</div>
          <div>₩8100000</div></Col>
        </Row>
      </Container>
    </div>
  )
}
