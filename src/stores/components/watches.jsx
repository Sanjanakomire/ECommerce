import React from "react";
import { watchesData } from '../data/watches';

const Watches = () => {
    const firstFiveImages = watchesData.slice(0,5)
return(
    <>
            <h2>Watches</h2>
            <div className='proSection'>
                {
                    firstFiveImages.map((item)=>{
                        return(
                            <div className='imgBox'>
                                <img className='proImage' src={item.image} alt=""/>
                                </div>
                        )

                            })
                        
                            }
                            </div>
    </>
)
                    }
export default Watches;
