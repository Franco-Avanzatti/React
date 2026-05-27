const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-5">

            <h2 className="
                text-white
                text-4xl
                font-black
                tracking-wide
            ">
                {title}
            </h2>

            {subtitle && (
                <p className="
                    text-zinc-400
                    mt-3
                ">
                    {subtitle}
                </p>
            )}

        </div>
    );
};

export default SectionTitle;