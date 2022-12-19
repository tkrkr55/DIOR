import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsCart} from 'react-icons/bs';

export default function ProductCard({item}) {
    const navigate = useNavigate()
    const showDetail = ()=>{
        navigate(`/product/${item.id}`)
    }
    return (
    
    
    <div className='productItem' onClick={showDetail}>
      <div className='img'>
      <img src={item?.img}/>
      </div>
      <div className='Card_box'>
      <div>{item?.title}</div>
      <div className='Card_1'><BsCart/></div>
      </div>
      <div className='Card_2'>₩ {item?.price}</div>
    </div>
  
  )
}
