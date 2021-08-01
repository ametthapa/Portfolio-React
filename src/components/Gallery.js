import img1 from '../images/1.png'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'



const Gallery = () => {
    return(
        <div className="gallery">
            <div className="photo">
                <img src={img1} alt="phone"></img>
                <div className="gallery-text">
                    <h3>Mobile App</h3>
                    <h2>Ubar Mobile App</h2>
                </div>
            </div>
            <div className="photo ">
                <img src={img2} alt="phone"></img>
                <div className="gallery-text">
                    <h3>Mobile App</h3>
                    <h2>Ubar Mobile App</h2>
                </div>
            </div>
            <div className="photo">
                <img src={img3} alt="phone"></img>
                <div className="gallery-text">
                    <h3>Mobile App</h3>
                    <h2>Ubar Mobile App</h2>
                </div>
            </div>
        </div>
    )
}

export default Gallery