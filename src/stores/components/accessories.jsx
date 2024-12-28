import React from 'react'
import { accessoriesData } from '../data/accessories'
import { Link } from 'react-router-dom'

const Accessories = () => {
    const firstFiveImages = accessoriesData.slice(0,5)
    return(
        <>
                <div className="proTitle">
        <h2>Air Condition</h2>
        </div>
                
                <div className='proSection'>
                    {
                        firstFiveImages.map((item)=>{
                            return(
                                <div className='imgBox'>
                                    <Link to='/accessories'>
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
    
    

export default Accessories;
