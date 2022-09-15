import { Navbar } from "../components/Navbar.tsx";

export default function Home() {
  return (
    <div class="flex flex-col h-screen p-3" style={{backgroundColor: '#1C1C1C'}}>
      <div class="flex flex-col p-4 mx-auto max-w-screen-md h-screen bg-gray-200 rounded shadow-2xl overflow-y-auto">
        <Navbar></Navbar>
        <div class="flex border-b-4 border-black my-6">
          <h2 class="text-2xl text-black font-bold">Quien soy 👀?</h2>
        </div>
        <p class="text-black text-xl">
          Soy Tomas Varas, desarrollador de software en mi ultimo año de analista programador,
          actualmente de pasante en <a class="underline hover:text-blue-800" href="https://dilectosoftware.com.ar/" target="_blank">Dilecto Software</a> 🚀.  
        </p> 
        <div class="flex border-b-4 border-black my-6"> 
        <h2 class="text-2xl text-black font-bold">Que es Skully Software 🦴?</h2> 
        </div>  
        <p class="text-black text-xl">
          Skully software es mi proyecto para ofrecer servicios de desarrollo de software a corto y medio alcance,
          enfocado en el desarrollo web y mobile.
        </p> 
        <div class="flex border-b-4 border-black my-6"> 
          <h2 class="text-2xl text-black font-bold">Que tecnologias utilizo 💻?</h2> 
        </div> 
        <div class="grid grid-cols-4 gap-4 content-center place-items-center p-3 rounded shadow-xl" style={{backgroundColor: '#907AD6'}}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" class="h-16 w-16 hover:animate-spin"></img>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" class="h-16 w-16 hover:animate-spin"></img>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Deno_2021.svg" class="h-16 w-16 hover:animate-spin"></img>
          <img src="https://www.svgrepo.com/show/331488/mongodb.svg" class="h-16 w-16 hover:animate-spin"></img>
          <img src="https://cdn.worldvectorlogo.com/logos/firebase-1.svg" class="h-16 w-16 hover:animate-spin"></img>
          <img src="https://cdn.worldvectorlogo.com/logos/typescript-2.svg" class="h-16 w-16 rounded hover:animate-spin"></img>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" class="h-16 w-16 rounded hover:animate-spin"></img>
          <img src="https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png" class="h-16 w-16 hover:animate-spin"></img>
        </div>
        <div class="mt-auto">
          <a href="https://fresh.deno.dev">
            <img width="197" height="37" src="https://fresh.deno.dev/fresh-badge-dark.svg" alt="Made with Fresh" />
          </a>
        </div>
      </div>
    </div>
  );
}
