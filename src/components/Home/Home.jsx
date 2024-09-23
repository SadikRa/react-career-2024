import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <h1>this is home</h1>
             */}
              <CategoryList></CategoryList>
             <FeaturedJobs></FeaturedJobs>
            
        </div>
    );
};

export default Home;