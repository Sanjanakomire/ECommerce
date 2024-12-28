import React from "react";
import { smartphonesData } from '../data/smartphones';

const Smartphones= () => {
    const firstFiveImages = smartphonesData.slice(0,5)
return(
    <>
            <h2>Smartphones</h2>
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
export default Smartphones;
