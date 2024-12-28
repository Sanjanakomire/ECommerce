import React, { useState } from 'react'


import { booksData } from '../data/books'

import { Link } from 'react-router-dom' 
import Navbar from '../components/Navbar'

const BooksPage = () => {
    
    const [selectedProduct, setSelectedProduct] = useState([])
    const companyHandler=(cat) => {
        if(selectedProduct.includes(cat)) {
            setSelectedProduct(selectedProduct.filter(item => item !== cat))
        }else{
            setSelectedProduct([...selectedProduct, cat])

        }
        
    }
    
    const filteredProduct = selectedProduct.length===0?
            booksData : booksData.filter((lion)=>selectedProduct.includes(lion.company))

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
                        checked = {selectedProduct.includes(item.author)}
                        onChange={()=>companyHandler(item.author)}
                        />
                        {item.author}
                    </label>
                    </div>
            )
        })}
            </div>
    <div className='pageSection'>
        {filteredProduct.map((item)=>{
            return(
                <div>
                    <Link to={`/books/${item.id}`}>
                    <div className="pageImg">
                        <img src={item.image} alt=""/>
                    </div>
                    </Link>

                    <div className="proModel">
                        {item.author}, {item.category}
                                        </div>
                                        </div>
    
            )
        })}
        </div>
        </div>
        </>
        )
        }
        
export default BooksPage