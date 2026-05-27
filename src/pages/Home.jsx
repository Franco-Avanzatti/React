import Hero from "../components/Hero/Hero";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Loading from "../components/Loading/Loading";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const Home = () => {
    return (
        <main className="bg-[#12031f] min-h-screen">

            <Hero />

            <section className="container mx-auto px-4 py-10">

                <SectionTitle
                    title="Top Ventas"
                    subtitle="Los instrumentos más elegidos por nuestros músicos."
                />
            </section>

            <ItemListContainer LoadingComponent={Loading} />

        </main>
    );
};

export default Home;