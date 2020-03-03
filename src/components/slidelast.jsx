import React from 'react'
import { Slide } from 'react-slideshow-image'
import img1 from '../img/slide31.png'
import img2 from '../img/slide32.png'
import img3 from '../img/slide33.png'




const proprietes = {
    duration: 50000,
    transitionDuration: 400,
    infinite: false,
    indicators: true,
    arrows: true
}

const Slideshow = () => {
    return (
        <div className="Slider">
            <div className="Container">
                <div className="Slide3">
                    <Slide {...proprietes}>
                        <div className="Slider111">
                            <div>
                                <img className="img11"src={img1} alt="img1" />
                            </div>

                        </div>
                        <div className="Slider111">
                            <div>
                                <img className="img12" src={img2} alt="img2" />
                            </div>

                        </div>
                        <div className="Slider111">
                            <div>
                                <img className="img13" src={img3} alt="img3" />
                            </div>

                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    )
}

export default Slideshow;