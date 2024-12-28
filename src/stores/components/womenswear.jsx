import React from "react";
import { womenswearData } from '../data/womenswear';
import { Link } from 'react-router-dom'

const Womenswear = () => {
    const firstFiveImages = womenswearData.slice(0,5)
return(
    <>
      <div className="proTitle">
       
            <h2>Womenswear</h2>
            </div>
            <div className='proSection'>
                {
                    firstFiveImages.map((item)=>{
                        return(
                            <div className='imgBox'>
                                <Link to='/womenswear'>
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
export default Womenswear;
