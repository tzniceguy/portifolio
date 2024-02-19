

export default function Home() {
  return (
    <main className="p-5">
    <div id="nav" className="border-solid border-2 border-indigo-600 rounded">
        <ul className="flex justify-center">
            <li className="m-2"><a href="">Tzniceguy</a></li>
            <li className="m-2"><a href="">about</a></li>
            <li className="m-2"><a href="">projects</a></li>
            <li className="m-2"><a href="">apparatus</a></li>
        </ul>
    </div>
    <div className="px-4">
        <h3> Hello Im Tzniceguy,</h3>
        <h4>A dev in love with Python playing with Javascript</h4>
        <h4>The incredibly developer in making</h4>
    </div>
    <div className="px-4">
        <h3> Who Am I? </h3>
        <p>Allow me to reintroduce our coding maestro from Kishapu,Shinyanga Tanzania: Tzniceguy
            <span>
                The journey began in 2018, when he fell head over heels for the captivating world of computing.
                His heart was forever claimed by Python, a language that whispered secrets of algorithms and data structures
                into his eager ears.Since then, Tzniceguy has been on an unwavering quest to unravel the mysteries of
                code,one line at a time.
            </span>
            <span>
                But Tzniceguy passion doesn’t stop there.
                He’s a web enthusiast, tinkering with JavaScript and PHP, weaving digital wonders that make the web
                dance to his tune.
                Whether it’s crafting elegant user interfaces or solving intricate backend puzzles,
                tniceguy thrives on turning challenges into elegant solutions.
            </span>
        </p>
    </div>
    <footer>
        <h4 className="px-4 flex "> made with <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg> by tzniceguy
            </h4>
    </footer>
    </main>
  );
}
