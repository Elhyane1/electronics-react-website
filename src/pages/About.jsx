import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";



export default function About() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });



    return (
        <>
            <section className="text-center py-12 bg-[#111518] text-white">
                <nav className="text-sm text-gray-400 uppercase tracking-wide">
                    <a href="#" className="hover:text-white">Home</a>
                    <span className="text-gray-500"> / </span>
                    <span className="text-white font-semibold">About</span>
                </nav>
                <h1 className="text-4xl font-bold mt-2">About</h1>


                {/* card section */}
                <div class="-mb-70 mt-10 mx-auto max-w-140 bg-white border border-gray-200 rounded-lg shadow-md">
                    <a href="#">
                        <img class="rounded-t-lg" src="/me.jpg" alt="" />
                    </a>
                    <div class="p-5 bg-gray-300">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">OTHMAN EL HYANE</h5>
                        </a>
                        <p class="mb-3 font-normal text-sm text-gray-700">I’m a passionate IT student with a strong focus on web development. Over the past two years, I’ve dedicated myself to learning the fundamentals of web technologies, including HTML, CSS, JavaScript, and frameworks like React. Now, I’m actively applying my knowledge by building and practicing real-world projects. I love turning ideas into functional, user-friendly applications and continuously improving my skills through hands-on experience. My goal is to grow as a developer and contribute to innovative solutions in the tech world.</p>
                    </div>
                </div>

            </section>


            <div className="mt-60">
            <section ref={ref} className="text-center py-16 px-6 bg-white">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                Quisque Scelerisque Nisi Sodales <br /> Duis Nonrisus Vel Imperdiet
            </h2>

            {/* Stats Container */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {/* Gadgets Sold */}
                <div>
                    <p className="text-4xl font-extrabold text-[#4B23E6]">
                        {inView && <CountUp start={0} end={3000} duration={1.5} separator="," />}
                    </p>
                    <p className="text-lg font-semibold text-gray-700">GADGETS SOLD</p>
                </div>

                {/* Happy Clients */}
                <div>
                    <p className="text-4xl font-extrabold text-[#4B23E6]">
                        {inView && <CountUp start={0} end={2500} duration={1.5} separator="," />}
                    </p>
                    <p className="text-lg font-semibold text-gray-700">HAPPY CLIENTS</p>
                </div>

                {/* Satisfaction Rate */}
                <div>
                    <p className="text-4xl font-extrabold text-[#4B23E6]">
                        {inView && <CountUp start={0} end={100} duration={1.5} suffix="%" />}
                    </p>
                    <p className="text-lg font-semibold text-gray-700">SATISFACTION RATE</p>
                </div>
            </div>

            {/* Description */}
            <p className="mt-8 text-gray-600 max-w-3xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Felis donec et odio pellentesque diam volutpat. Ullamcorper malesuada proin libero nunc consequat interdum varius.
            </p>

            <button className="bg-gray-300 text-black font-semibold px-6 py-3 mt-4 rounded-md hover:bg-[#4B23E6] hover:text-white cursor-pointer">contact</button>
        </section>
            </div>
        </>
    );
}