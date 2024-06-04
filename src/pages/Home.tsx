import { FaArrowRightLong } from "react-icons/fa6"
import Navbar from "../components/Navbar"


const Home = () => {
    return (
        <div className="home-container">
            <div className="nav-container">
                <Navbar />
            </div>
            <div className="row">
                <div className="col-2">
                    <h1>Give Your Workout <br /> A New Style!</h1>
                    <p>Success isn't always about greatness. It's about consistency. Consistent <br/> hard  work gains success. Greatness will come.</p>
                    <a href="" className="btn">Explore Now <FaArrowRightLong /></a>
                </div>
                <div className="col-2">
                    <img src="src\assets\RedStore_Img\images\image1.png" alt="image" />
                </div>
            </div>
        </div>
    )
}

export default Home