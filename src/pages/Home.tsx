import { FaArrowRightLong, FaQuoteLeft, FaStar } from "react-icons/fa6"
import Navbar from "../components/Navbar"
import Product from "../components/Product"
import Category from "../components/Category"
import Offer from "../components/Offer"
import { CiStar } from "react-icons/ci"
import Testimonial from "../components/Testimonial"
import Brands from "../components/Brands"
import Footer from "../components/Footer"



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

            <Offer />

            {/* ----------------------------- testimonial --------------------- */}
            <Testimonial />


            {/* --------------------- brands ------------------------ */}
            <Brands />


            {/* -------------------- footer ------------------  */}
            <Footer />



        </div>
    )
}

export default Home