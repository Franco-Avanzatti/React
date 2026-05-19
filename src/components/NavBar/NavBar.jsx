import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

import panamaa from "../../assets/panamaa.png";

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const navLinkStyles = ({ isActive }) =>
        `relative text-sm font-semibold transition-all duration-300
        hover:text-violet-300 hover:-translate-y-[2px]
        hover:drop-shadow-[0_0_8px_rgba(196,181,253,0.8)]

        after:content-['']
        after:absolute
        after:left-0
        after:-bottom-1
        after:h-[2px]
        after:w-0
        after:bg-violet-400
        after:transition-all
        after:duration-300

        hover:after:w-full

        ${isActive
            ? "text-violet-300 after:w-full"
            : "text-white"
        }`;

    return (

        <header className="sticky top-0 z-50 backdrop-blur-md bg-[#24063b]/95 border-b border-white/10 shadow-lg">

            <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

                {/* =====================================
                    LEFT - LOGO
                ===================================== */}

                <div className="flex-1">

                    <Link
                        to="/"
                        className="flex items-center gap-4 group"
                    >

                        <img
                            src={panamaa}
                            alt="Panama Music"
                            className="
                                w-20 h-20
                                rounded-2xl
                                object-cover
                                shadow-lg
                                transition-all
                                duration-300
                                group-hover:scale-105
                                group-hover:rotate-1
                            "
                        />

                        <div className="hidden md:flex flex-col">

                            <span className="
                                text-white
                                font-bold
                                text-2xl
                                tracking-wide
                            ">
                                Panama Music
                            </span>

                            <span className="
                                text-violet-300
                                text-xs
                                tracking-[4px]
                                uppercase
                            ">
                                Music Store
                            </span>

                        </div>

                    </Link>

                </div>

                {/* =====================================
                    CENTER - MENU
                ===================================== */}

                <nav className="hidden lg:flex flex-1 justify-center gap-12">

                    <NavLink
                        to="/category/guitarras-electricas"
                        className={navLinkStyles}
                    >
                        Guitarras
                    </NavLink>

                    <NavLink
                        to="/category/bajo-electrico"
                        className={navLinkStyles}
                    >
                        Bajos
                    </NavLink>

                    <NavLink
                        to="/category/bateria-percusion"
                        className={navLinkStyles}
                    >
                        Baterías
                    </NavLink>

                    <NavLink
                        to="/category/audio-sonido"
                        className={navLinkStyles}
                    >
                        Audio Pro
                    </NavLink>

                </nav>

                {/* =====================================
                    RIGHT
                ===================================== */}

                <div className="flex-1 flex items-center justify-end gap-4">

                    {/* CART */}

                    <Link
                        to="/cart"
                        className="
                            relative
                            w-12 h-12
                            rounded-2xl
                            flex items-center justify-center
                            text-white
                            bg-white/5
                            border border-white/10

                            transition-all
                            duration-300

                            hover:bg-violet-500/20
                            hover:border-violet-400/30
                            hover:scale-105
                            hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]
                        "
                    >

                        <ShoppingCart size={22} />

                    </Link>

                    {/* MOBILE BUTTON */}

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="
                            lg:hidden
                            text-white

                            transition
                            duration-300

                            hover:text-violet-300
                            hover:scale-110
                        "
                    >

                        {
                            menuOpen
                                ? <X size={30} />
                                : <Menu size={30} />
                        }

                    </button>

                </div>

            </div>

            {/* =====================================
                MOBILE MENU
            ===================================== */}

            <div className={`
                lg:hidden
                overflow-hidden
                transition-all
                duration-500
                ${menuOpen ? "max-h-96" : "max-h-0"}
            `}>

                <nav className="
                    flex flex-col
                    bg-[#1a082b]
                    px-6
                    py-6
                    gap-6
                    border-t border-white/10
                ">

                    <NavLink
                        to="/category/guitarras-electricas"
                        className={({ isActive }) =>
                            `
                            relative
                            text-lg
                            font-medium
                            text-white

                            transition-all
                            duration-300

                            hover:text-violet-300
                            hover:translate-x-2
                            hover:drop-shadow-[0_0_8px_rgba(196,181,253,0.8)]

                            px-4
                            py-3

                            rounded-xl

                            hover:bg-white/5

                            ${isActive
                                ? "text-violet-300 bg-white/5 border border-violet-400/20"
                                : ""
                            }
                            `
                        }
                        onClick={() => setMenuOpen(false)}
                    >
                        Guitarras
                    </NavLink>

                    <NavLink
                        to="/category/bajo-electrico"
                        className={({ isActive }) =>
                            `
                            relative
                            text-lg
                            font-medium
                            text-white

                            transition-all
                            duration-300

                            hover:text-violet-300
                            hover:translate-x-2
                            hover:drop-shadow-[0_0_8px_rgba(196,181,253,0.8)]

                            px-4
                            py-3

                            rounded-xl

                            hover:bg-white/5

                            ${isActive
                                ? "text-violet-300 bg-white/5 border border-violet-400/20"
                                : ""
                            }
                            `
                        }
                        onClick={() => setMenuOpen(false)}
                    >
                        Bajos
                    </NavLink>

                    <NavLink
                        to="/category/bateria-percusion"
                        className={({ isActive }) =>
                            `
                            relative
                            text-lg
                            font-medium
                            text-white

                            transition-all
                            duration-300

                            hover:text-violet-300
                            hover:translate-x-2
                            hover:drop-shadow-[0_0_8px_rgba(196,181,253,0.8)]

                            px-4
                            py-3

                            rounded-xl

                            hover:bg-white/5

                            ${isActive
                                ? "text-violet-300 bg-white/5 border border-violet-400/20"
                                : ""
                            }
                            `
                        }
                        onClick={() => setMenuOpen(false)}
                    >
                        Baterías
                    </NavLink>

                    <NavLink
                        to="/category/audio-sonido"
                        className={({ isActive }) =>
                            `
                            relative
                            text-lg
                            font-medium
                            text-white

                            transition-all
                            duration-300

                            hover:text-violet-300
                            hover:translate-x-2
                            hover:drop-shadow-[0_0_8px_rgba(196,181,253,0.8)]

                            px-4
                            py-3

                            rounded-xl

                            hover:bg-white/5

                            ${isActive
                                ? "text-violet-300 bg-white/5 border border-violet-400/20"
                                : ""
                            }
                            `
                        }
                        onClick={() => setMenuOpen(false)}
                    >
                        Audio Pro
                    </NavLink>

                </nav>

            </div>

        </header>
    );
};

export default NavBar;