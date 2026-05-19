import { Link } from "react-router-dom";

import useFeaturedProducts from "../../hooks/useFeaturedProducts";

const Hero = () => {

    const {
        currentProduct,
        loading
    } = useFeaturedProducts();

    if (loading) return null;

    return (

        <section className="
            relative
            min-h-[85vh] lg:min-h-screen
            overflow-hidden
            bg-[#12031f]
            flex
            items-center
        ">

            {/* BLOBS */}

            <div className="
                absolute
                top-[-100px]
                left-[-100px]
                w-[350px]
                h-[350px]
                bg-violet-600/30
                blur-[120px]
                rounded-full
            " />

            <div className="
                absolute
                bottom-[-100px]
                right-[-100px]
                w-[400px]
                h-[400px]
                bg-fuchsia-500/20
                blur-[140px]
                rounded-full
            " />

            {/* CONTENT */}

            <div className="
                max-w-7xl
                mx-auto
                px-6
                grid
                lg:grid-cols-2
                grid-cols-1
                gap-8 lg:gap-20
                items-center
            ">

                {/* LEFT */}

                <div
                    key={currentProduct.id}
                    className="
                        z-10

                        order-2
                        lg:order-1

                        animate-heroText

                        text-center
                        lg:text-left

                        flex
                        flex-col
                        justify-center

                        min-h-[420px]
                        lg:min-h-[500px]
                                        "
                >

                    <span className="
                        text-violet-300
                        uppercase
                        tracking-[5px]
                        text-sm
                    ">
                        Panama Music
                    </span>

                    <h1 className="
                        text-white
                        text-4xl
                        sm:text-5xl
                        lg:text-7xl
                        font-black
                        leading-tight
                        mt-5
                    ">
                        {currentProduct.name}
                    </h1>

                    <p className="
                            text-zinc-400
                            text-base
                            lg:text-lg

                            mt-5

                            max-w-md
                            lg:max-w-xl

                            mx-auto
                            lg:mx-0

                            leading-8

                            line-clamp-4
                            lg:line-clamp-none
">
                        {currentProduct.description}
                    </p>

                    <div className="
                                flex
                                flex-col
                                sm:flex-row

                                items-center
                                lg:items-start

                                gap-4
                                mt-8
                                pb-10
                                lg:pb-0
                                    ">

                        <Link
                            to={`/detail/${currentProduct.id}`}
                            className="
                                px-7
                                py-3.5
                                rounded-2xl
                                bg-violet-600
                                text-white
                                font-semibold
                                transition-all
                                duration-300
                                hover:scale-105
                                hover:shadow-[0_0_30px_rgba(139,92,246,0.7)]
                            "
                        >
                            Explorar
                        </Link>


                    </div>

                </div>

                {/* RIGHT */}

                <div className="
                        relative
                        flex
                        justify-center
                        items-center

                        order-1
                        lg:order-2

                        mt-2
                        lg:mt-0
">

                    {/* GLOW */}

                    <div className="
                        absolute
                        w-[250px]
                        h-[250px]

                        lg:w-[400px]
                        lg:h-[400px]
                        bg-violet-500/30
                        blur-[120px]
                        rounded-full
                    " />

                    {/* IMAGE */}

                    <img
                        key={currentProduct.image}
                        src={currentProduct.image}
                        alt={currentProduct.name}

                        className="
                            relative
                            z-10

                            w-[280px]
                            sm:w-[340px]
                            md:w-[420px]
                            lg:w-[500px]

                            object-contain

                            drop-shadow-[0_0_40px_rgba(139,92,246,0.5)]

                            animate-floatSmooth
                            animate-heroFade

                            transition-all
                            duration-1000
                                            "
                    />

                </div>

            </div>

        </section>
    );
};

export default Hero;