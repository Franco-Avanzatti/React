import Hero from "../components/Hero/Hero";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Loading from "../components/Loading/Loading";

const Home = () => {

    return (

        <main className="bg-[#12031f] min-h-screen">

            {/* HERO */}
            <Hero />

            {/* PRODUCTS */}
            <ItemListContainer LoadingComponent={Loading} />

        </main>
    );
};

export default Home;