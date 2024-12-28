import React from "react";
import { menswearData } from '../data/menswear';
import { Link } from 'react-router-dom'

const Menswear = () => {
    const firstFiveImages = menswearData.slice(0,5)
return(
    <>
      <div className="proTitle">
       
            <h2>Menswear</h2>
            </div>
            <div className='proSection'>
                {
                    firstFiveImages.map((item)=>{
                        return(
                            <div className='imgBox' key={item.id || index}>
                                <Link to='/menswear'>
                                <img className='proImage' src={item.image} alt={item.name}/>
                                </Link>
                                </div>
                        )

                            })
                        
                            }
                            </div>
    </>
)
}
export default Menswear;
