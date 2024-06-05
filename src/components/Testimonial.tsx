import { CiStar } from 'react-icons/ci'
import { FaQuoteLeft, FaStar } from 'react-icons/fa6'

const Testimonial = () => {
  return (
    <div className="testimonial">
    <div className="ts-small-container">
        <div className="ts-row">
            <div className="ts-col-3">
                <FaQuoteLeft />
                <p className="ts-p">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <CiStar  />
            </div>
            <img src="src\assets\RedStore_Img\images\user-1.png" alt="user-1" className="user-1" />
            <h3>Sean Parker</h3>
            </div>
        </div>
    </div>
    <div className="ts-small-container">
        <div className="ts-row">
            <div className="ts-col-3">
                <FaQuoteLeft />
                <p className="ts-p">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <CiStar  />
            </div>
            <img src="src\assets\RedStore_Img\images\user-2.png" alt="user-1" className="user-1" />
            <h3>John Doen</h3>
            </div>
        </div>
    </div>
    <div className="ts-small-container">
        <div className="ts-row">
            <div className="ts-col-3">
                <FaQuoteLeft />
                <p className="ts-p">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <CiStar  />
            </div>
            <img src="src\assets\RedStore_Img\images\user-3.png" alt="user-1" className="user-1" />
            <h3>Hasina Parker</h3>
            </div>
        </div>
    </div>
</div>
  )
}

export default Testimonial