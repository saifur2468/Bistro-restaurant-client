import Catageroy from "../catageroy/Catageroy";
import Hero from "../Hero";
import BistroSection from "./BistroSection";
import Foodcard from "./Foodcard";
import FromOurMenu from "./FromOurMenu";
import Popularmenu from "./Popularmenu/Popularmenu";
import Reviews from "./Reviews";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Catageroy></Catageroy>
            <BistroSection></BistroSection>
            <Popularmenu></Popularmenu>
            <Foodcard></Foodcard>
            <FromOurMenu></FromOurMenu>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;