import { Navbar } from "../components/Navbar.tsx";

export default function Home() {
  return (
    <div class="flex flex-col h-screen p-3" style={{backgroundColor: '#1C1C1C'}}>
      <div class="flex flex-col p-4 mx-auto w-full max-w-screen-md bg-gray-200 rounded shadow-2xl mb-3">
        <Navbar></Navbar> 
      </div> 
      <div class="flex flex-col p-4 mx-auto max-w-screen-md h-screen bg-gray-200 rounded shadow-2xl overflow-y-auto">
        <div class="flex border-b-4 border-black mb-6">
          <h2 class="text-2xl text-black font-bold">Quien soy 👀?</h2>
        </div>
        <p class="text-black text-xl">
          Soy Tomas Varas, desarrollador de software en mi ultimo año de analista programador,
          actualmente de pasante en <a class="underline hover:text-blue-800" href="https://dilectosoftware.com.ar/" target="_blank">Dilecto Software</a> 🚀.  
        </p> 
        <div class="flex border-b-4 border-black my-6">
          <h2 class="text-2xl text-black font-bold">Contacto</h2>
        </div>
          <div class="grid grid-cols-1">
            <div class="flex flex-row w-full p-4 rounded shadow items-center" style={{backgroundColor: '#212121'}}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg/1101px-Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg.png" class="h-16 w-16"></img>
              <h2 class="lg:text-xl ml-auto text-white">tomas_varas1@outlook.com</h2>
            </div>
          </div> 
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
        <div class="flex border-b-4 border-black my-6"> 
          <h2 class="text-2xl text-black font-bold">Portafolio</h2> 
        </div>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:mb-0">
           <div class="flex flex-col rounded p-3 items-center shadow-xl hover:animate-pulse" style={{backgroundColor: '#d62826'}}> 
              <div class="grid grid-cols-4 gap-3 place-items-center my-3">
                <img src="https://avatars.githubusercontent.com/u/23064371?s=200&v=4" class="h-16 w-16" style={{borderRadius: '50%'}}></img> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Deno_2021.svg" class="h-16 w-16" style={{borderRadius: '50%'}}></img>
                <img src="https://www.svgrepo.com/show/331488/mongodb.svg" class="h-16 w-16 hover:animate-spin"></img>
                <img src="https://cdn.worldvectorlogo.com/logos/firebase-1.svg" class="h-16 w-16 hover:animate-spin"></img>
              </div>
              <h2 class="font-bold">Diccionario/Traductor Mapuzungun</h2>
              <p class="text-center">Api y aplicacion para android para traducir palabras del español al mapuche de manera colectiva.</p>
            </div>
            <div class="flex flex-col rounded p-3 items-center shadow-xl hover:animate-pulse" style={{backgroundColor: '#2e72bc'}}>
              <div class="grid grid-cols-2 gap-3 place-items-center my-3">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Deno_2021.svg" class="h-16 w-16 hover:animate-spin"></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" class="h-16 w-16 rounded hover:animate-spin"></img>
              </div>
              <h2 class="font-bold">Inmanga-scrapperapi</h2>
              <p class="text-center">Api que scrapea la web inmanga.com y devuelve responses en forma de json para consumir
              mangas en español en otras aplicaciones.</p>
            </div>
        </div>
        
      </div>
      <div class="flex flex-col p-4 mx-auto w-full max-w-screen-md bg-gray-200 rounded shadow-2xl mt-3">
      <div class="flex justify-end">
          <a href="https://fresh.deno.dev" target="_blank">
            <img width="197" height="37" src="https://fresh.deno.dev/fresh-badge-dark.svg" alt="Made with Fresh" />
          </a>
        </div>
      </div>
    </div>
  );
}
