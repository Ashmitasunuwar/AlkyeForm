import '../css/dashboard.css'
import FooterPage from './FooterPage'
import whitelogo from '../Logo/whitelogo.png'
import pictureone from '../css/Images/img1.avif'
import picturetwo from '../css/Images/img2.avif'
import picturethree from '../css/Images/img3.avif'
import picturefour from '../css/Images/img4.avif'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function WelcomePage() {


    const dataarr = [
        {
            title: 'Photography',
            images: [pictureone, picturetwo, picturethree, picturefour]
        },
        {
            title: 'learning',
            images: [pictureone, picturetwo, picturethree, picturefour]
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    const renderCard = dataarr.map(
        (value) => {
            return (
                <div className="cardcontainer">

                    <div className='titlepara'>{value.title}</div>
                    <div className="slider-container">
                        <Slider {...settings}  >
                            {value.images.map((obj, index) => {
                                return (< >


                                    <div key={index} className='cardimage'>
                                        <img src={obj} height={400} />
                                    </div>

                                </>)

                            })}
                        </Slider>
                    </div>

                </div>
            )


        })


    return (
        < div className='welcomemain'>
            <div className='whitelogo'>
                <img className="white-logo" src={whitelogo} height={59} width={135} alt="logo not found" />
            </div>
            <div>
                <p> Welcome Test</p>
                <p>hope you are having a good day!</p>
            </div>
            <div className='sliders'>

                {renderCard}



            </div>



            <div className="footercls ">
                <FooterPage />
            </div>
        </div>



    )
}

export default WelcomePage