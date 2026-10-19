import OurStory from "../../ourstory";
import Catageroy from "../catageroy/Catageroy";
import Hero from "../Hero";
import FoodSection from "./BistroSection";
import BistroSection from "./BistroSection";
import SpecialRecipes from "./Foodcard";
import Foodcard from "./Foodcard";
import MainMeals from "./FromOurMenu";
import FromOurMenu from "./FromOurMenu";
// import Popularmenu from "./Popularmenu/Popularmenu";
import Reviews from "./Reviews";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Catageroy></Catageroy>
            <OurStory></OurStory>
            <FoodSection></FoodSection>
           <SpecialRecipes></SpecialRecipes>
            {/* <Popularmenu></Popularmenu> */}
            <MainMeals></MainMeals>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;