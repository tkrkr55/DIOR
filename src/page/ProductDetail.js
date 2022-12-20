import React from 'react'
import { useEffect,useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { BsSearch,BsTelephone,BsGeoAlt } from 'react-icons/bs';
import {Button} from 'react-bootstrap'



export default function ProductDetail() {
  const[getid,setgetid]=useState([])
  let{id} = useParams()
    const getProductDetail =async ()=>{
    let url=`http://localhost:5000/products/${id}`
    let res = await fetch(url)
    let data = await res.json()

   setgetid(data)
    
    }
  useEffect(()=>{
      getProductDetail()
  },[])
  return (
    <div className='DetailPage'>
      <Container >
        <Row>
          <Col lg={6} className="product_img">
            <img src={getid?.img}></img>
          </Col>
          <Col lg={6}>
            <div className='Detail_list'>
            <div>{getid?.title}</div>
            <div>{getid?.price}</div>
            <div className='Detail-btn'>
            <Button variant="outline-secondary">문의하기</Button>{' '}
            </div>
            <p className='Detail_1'>부티끄에서만 만나보실 수 있습니다.</p>
            <div className='Detail_os'>
              <p><BsSearch/> 부띠크 구매 가능 여부</p>
              <p><BsTelephone/> 고객센터 +82 2 3280 0104</p>
              <p><BsGeoAlt/> 부띠크 찾기</p>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
