
import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export default function RandomIcon() {


    const icon = useSignal('');

    const icons = ['vue.png', 'react.png', 'preact.png', 'deno.svg'];

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIcon = icons[Math.floor(Math.random() * icons.length)];
            icon.value = randomIcon;
        }, 1000); 
       
        return () => clearInterval(interval);
    }, [icon]);
    
//cada un segundo cambie de icono
    return (
        <img width="100" height="100" class="animate-bounce" src={icon.value}></img>
    )

}