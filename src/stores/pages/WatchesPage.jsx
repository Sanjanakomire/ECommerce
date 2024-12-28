import React, { useState } from 'react'


import { watchesData } from '../data/watches'

import { Link } from 'react-router-dom' 
import Navbar from '../components/Navbar'

const WatchesPage = () => {
    
    const [selectedProduct, setSelectedProduct] = useState([])
    const companyHandler=(cat) => {
        if(selectedProduct.includes(cat)) {
            setSelectedProduct(selectedProduct.filter(item => item !== cat))
        }else{
            setSelectedProduct([...selectedProduct, cat])

        }
        
    }
    
    const filteredProduct = selectedProduct.length===0?
      
    watchesData : watchesData.filter((lion)=>selectedProduct.includes(lion.company))

    return (
        <>
        <Navbar />
        <div className="full">
    
        <div className='pro-selected'>
        {filteredProduct.map((item) => {
            return(
                <div>
                    <label>
                        <input type ="checkbox"
                        checked = {selectedProduct.includes(item.company)}
                        onChange={()=>companyHandler(item.company)}
                        />
                        {item.company}
                    </label>
                    </div>
            )
        })}
            </div>
    <div className='pageSection'>
        {filteredProduct.map((item)=>{
            return(
                <div>
                    <Link to={`/watches/${item.id}`}>
                    <div className="pageImg">
                        <img src={item.image} alt=""/>
                    </div>
                    </Link>

                    <div className="proModel">
                        {item.company}, {item.model}
                                        </div>
                                        </div>
    
            )
        })}
        </div>
        </div>
        </>
        )
        }
        
export default WatchesPage