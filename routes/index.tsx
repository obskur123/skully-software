import { Navbar } from "../components/Navbar.tsx";
import PortfolioItem from "../islands/PortfolioItem.tsx";

//recordar que solo se puese escribir js dentro de la carpeta islands xd

export default function Home() {
  return (
    <div
      class="flex flex-col h-screen p-3"
      style={{ backgroundColor: "#1C1C1C" }}
    >
      <div class="flex flex-col p-4 mx-auto w-full max-w-screen-md bg-gray-200 rounded shadow-2xl mb-3">
        <Navbar></Navbar>
      </div>
      <div class="flex flex-col p-4 mx-auto max-w-screen-md h-screen bg-gray-200 rounded shadow-2xl overflow-y-auto">
        <div class="flex border-b-4 border-black mb-6">
          <h2 class="text-2xl text-black font-bold">Quien soy 👀?</h2>
        </div>
        <p class="text-black text-xl">
          Soy Tomás Varas, desarrollador de software en mi ultimo año de
          analista programador, actualmente de pasante en{" "}
          <a
            class="underline hover:text-blue-800"
            href="https://dilectosoftware.com.ar/"
            target="_blank"
          >
            Dilecto Software
          </a>{" "}
          🚀.
        </p>
        <div class="flex border-b-4 border-black my-6">
          <h2 class="text-2xl text-black font-bold">
            Contacto/Redes sociales 👁️
          </h2>
        </div>
        <div class="grid grid-cols-1 gap-4">
          <a href="mailto: tomas_varas1@outlook.com">
            <div
              class="flex flex-col w-full p-4 rounded shadow items-center hover:animate-pulse"
              style={{ backgroundColor: "#1C1C1C" }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg/1101px-Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg.png"
                class="h-16 w-16"
              >
              </img>
              <h2 class="lg:text-xl text-white mt-4">
                tomas_varas1@outlook.com
              </h2>
            </div>
          </a>
          <a href="https://github.com/obskur123" target="_blank">
            <div
              class="flex flex-col w-full p-4 rounded shadow-xl items-center hover:animate-pulse"
              style={{ backgroundColor: "#1C1C1C" }}
            >
              <img
                src="https://cdn.icon-icons.com/icons2/2429/PNG/512/github_logo_icon_147285.png"
                class="h-16 w-16"
              >
              </img>
              <h2 class="lg:text-xl mt-4 text-white">obskur123</h2>
            </div>
          </a>
        </div>
        <div class="flex border-b-4 border-black my-6">
          <h2 class="text-2xl text-black font-bold">
            Que es Skully Software 🦴?
          </h2>
        </div>
        <p class="text-black text-xl">
          Skully software es mi proyecto para ofrecer servicios de desarrollo de
          software a corto y medio alcance, enfocado en web y
          mobile.
        </p>
        <div class="flex border-b-4 border-black my-6">
          <h2 class="text-2xl text-black font-bold">
            Que tecnologias utilizo 💻?
          </h2>
        </div>
        <div
          class="grid grid-cols-4 gap-4 content-center place-items-center p-3 rounded shadow-xl"
          style={{ backgroundColor: "#907AD6" }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
            class="h-16 w-16 hover:animate-spin"
          >
          </img>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            class="h-16 w-16 hover:animate-spin"
          >
          </img>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Deno_2021.svg"
            class="h-16 w-16 hover:animate-spin"
          >
          </img>
          <img
            src="https://www.svgrepo.com/show/331488/mongodb.svg"
            class="h-16 w-16 hover:animate-spin"
          >
          </img>
          <img
            src="https://cdn.worldvectorlogo.com/logos/firebase-1.svg"
            class="h-16 w-16 hover:animate-spin"
          >
          </img>
          <img
            src="https://cdn.worldvectorlogo.com/logos/typescript-2.svg"
            class="h-16 w-16 rounded hover:animate-spin"
          >
          </img>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            class="h-16 w-16 rounded hover:animate-spin"
          >
          </img>
          <img
            src="https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png"
            class="h-16 w-16 hover:animate-spin"
          >
          </img>
        </div>
        <div class="flex border-b-4 border-black my-6">
          <h2 class="text-2xl text-black font-bold">Portfolio 📖</h2>
        </div>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:mb-0">
          <PortfolioItem
            color="#2e72bc"
            title="Inmanga-scrapperapi"
            description="Api que scrapea la web inmanga.com y devuelve responses en forma
            de json para consumir mangas en español en otras aplicaciones."
            to="https://github.com/obskur123/inmanga-scrapperapi"
            urlImageArray={[
              "https://upload.wikimedia.org/wikipedia/commons/e/e8/Deno_2021.svg",
            ]}
          />
          <PortfolioItem  
            color="#d62826"
            title="Diccionario/Traductor Mapuzungun"
            description="Api y aplicación para android para traducir palabras del español al mapuche de manera colectiva."
            to="https://github.com/obskur123/diccionario-mapuzungunapi"
            urlImageArray={[
              "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
              "https://upload.wikimedia.org/wikipedia/commons/e/e8/Deno_2021.svg",
              "https://www.svgrepo.com/show/331488/mongodb.svg",
              "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
            ]}
          />
        </div>
      </div>
      <div class="flex flex-col p-2 mx-auto w-full max-w-screen-md bg-gray-200 rounded shadow-2xl mt-3">
        <div class="flex flex-row items-center">
          <a href="https://fresh.deno.dev" target="_blank" class="ml-auto">
            <img
              width="197"
              height="37"
              src="https://fresh.deno.dev/fresh-badge-dark.svg"
              alt="Made with Fresh"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
