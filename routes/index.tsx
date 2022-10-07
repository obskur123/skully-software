import { Navbar } from "../components/Navbar.tsx";
import PortfolioItem from "../islands/PortfolioItem.tsx";

//recordar que solo se puese escribir js dentro de la carpeta islands xd

export default function Home() {
  return (
  <>
    <div
      class="flex flex-col h-screen justify-center items-center"
      style={{ backgroundColor: "#1C1C1C" }}
    >
      <div class="flex flex-col items-center mx-auto my-16 sm:px-6 md:px-8">
          <img height="100" width="100" src="skull.png" class="mb-2 animate-bounce"/>
          <span class="title">Skully</span>
          <span class="title">Software</span>
          <p class="content">Desarrollo de software</p>
      </div>
    </div>
    <div
      class="flex flex-col h-screen justify-center items-center bg-blue-400"
    >
      <div class="flex flex-col items-center">
      <div class="flex flex-col items-center mx-auto my-16 sm:px-6 md:px-8">
          <img height="100" width="100" src="skull.png" class="mb-2 animate-bounce"/>
          <span class="title">Desarrollo</span>
          <span class="title">FullStack</span>
          <p class="content">React, Preact & Vue</p>
          <p class="content">Firebase</p>
          <p class="content">Deno</p>
          <p class="content">MongoDB</p>
      </div>
      </div>
    </div>
  </>
  );
}
