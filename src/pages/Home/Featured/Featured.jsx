import Sectiontitle from "../../../components/Sectiontitle/Sectiontitle";
import feathured from './../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <Sectiontitle
                heading="Featured Item "
                subHeading="Cheack it out"
            ></Sectiontitle>

            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40
             py-20 pt-12 px-36">
                <div>
                    <img src={feathured} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className=" uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad ea vero in blanditiis
                        exercitationem maxime? Optio sint ipsa natus temporibus!</p>
                    <button className="btn btn-outline border-0 border-b-4 my-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;