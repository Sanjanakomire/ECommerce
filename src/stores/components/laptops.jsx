import React from "react";
import { laptopsData } from '../data/laptops';
import {Link} from 'react-router-dom'
const Laptops = () => {
    const firstFiveImages = laptopsData.slice(0,5)
return(
    <>
    <div className="proTitle">
            <h2>Laptops</h2>
            </div>
            <div className='proSection'>
                {
                    firstFiveImages.map((item)=>{
                        return(
                            <div className='imgBox'>
                                <Link to='/laptops'>
                                <img className='proImage' src={item.image} alt=""/>
                                </Link>
                                </div>
                        )

                            })
                        
                            }
                            </div>
    </>
)
}
export default Laptops;
