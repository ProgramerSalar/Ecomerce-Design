import { FaArrowRightLong } from "react-icons/fa6"


const Offer = () => {
  return (
    <div className="offer">
                <div className="small-container">
                    <div className="row">
                        <div className="col-2">
                            <img src="src\assets\RedStore_Img\images\exclusive.png" alt="offer-img" className="offer-img" />
                        </div>
                        <div className="col-2">
                            <p>Exclusively Available on ResStore</p>
                            <h1>Smart Band 4</h1>
                            <small>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                            </small>
                            <a className="btn" href="">Buy Now <FaArrowRightLong /></a>

                        </div>
                    </div>
                </div>
            
            </div>
  )
}

export default Offer