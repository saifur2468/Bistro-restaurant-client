import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import heroimg1 from '../../assets/assets/home/01.jpg'
import heroimg2 from '../../assets/assets/home/02.jpg'
import heroimg3 from '../../assets/assets/home/03.png'
import heroimg4 from '../../assets/assets/home/04.jpg'
import heroimg5 from '../../assets/assets/home/05.png'
import heroimg6 from '../../assets/assets/home/06.png'
const Hero = () => {
    return (
        <div>
             <Carousel>
                <div>
                    <img src={heroimg1} />
                    
                </div>
                <div>
                    <img src={heroimg2} />
                    
                </div>
                <div>
                    <img src={heroimg3} />
                    
                </div>
                <div>
                    <img src={heroimg4} />
                  
                </div>
                <div>
                    <img src={heroimg5} />
                    
                </div>
                <div>
                    <img src={heroimg6} />
                  
                </div>
            </Carousel>
        </div>
    );
};

export default Hero;