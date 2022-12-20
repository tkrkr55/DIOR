import React from 'react'
import { useEffect ,useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Container ,Row,Col} from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'




export default function Product() {

  const [productList,setProductList] =useState([])
  const [query,searchQuery] = useSearchParams();


  
  const getProduct = async()=>{

    let searchQuery =query.get("q")|| "";
    console.log("쿼리값은?",searchQuery)
    let url=`https://my-json-server.typicode.com/tkrkr55/DIOR/products?q=${searchQuery}`
    let res = await fetch(url)
    let data = await res.json()
    setProductList(data)
  }
  

  useEffect(()=>{
    getProduct()
  },[query])

  
  return (
    <>
    
      <div className='product_title'>
      <h3>파인 주얼리 전체 보기</h3>
      <p>크리스챤 디올이 손수 착수했던 역사를 눈부신 필치로 새겨나가는 빅투아르 드 카스텔란의 대담한 주얼리에는 여성미, 우아함과 정교한 아름다움의 자취가 섬세하게 깃들어 있습니다.</p>
    </div>
      <Container>
        <Row>
          {productList.map((menu)=>(
            <Col lg={4}><ProductCard item={menu}/></Col>
          ))}
          
        </Row>
      </Container>
      
    </>
  )}
