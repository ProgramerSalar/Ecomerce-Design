import { FaArrowRightLong, FaStar } from "react-icons/fa6"
import Navbar from "../components/Navbar"
import Product from "../components/Product"
import Category from "../components/Category"



const Home = () => {
    return (
        <div className="home-container">
            <div className="nav-container">
                <Navbar />
            </div>
            <div className="row">
                <div className="col-2">
                    <h1>Give Your Workout <br /> A New Style!</h1>
                    <p>Success isn't always about greatness. It's about consistency. Consistent <br /> hard  work gains success. Greatness will come.</p>
                    <a href="" className="btn">Explore Now <FaArrowRightLong /></a>
                </div>
                <div className="col-2">
                    <img src="src\assets\RedStore_Img\images\image1.png" alt="image" />
                </div>
            </div>


            {/* ------------------ feature category --------------- */}
           <Category />


            {/* --------------------- feature product ----------------------- */}
            <Product />



            {/* --------------------------- offer ------------------------------------- */}
            
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
        </div>
    )
}

export default Home