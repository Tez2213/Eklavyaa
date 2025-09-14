'use client';
import { useEffect } from 'react';

export default function ChatbaseWidget() {
  useEffect(() => {
    // Agar pehle se script hai to dobara mat add karo
    if (document.getElementById('up41ckpo2aENqqx6yRrQx')) return;

    // Tumhari wali script as function inject karenge
    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      (function(){
        if(!window.chatbase||window.chatbase("getState")!=="initialized"){
          window.chatbase=(...arguments)=>{
            if(!window.chatbase.q){window.chatbase.q=[]}
            window.chatbase.q.push(arguments)
          };
          window.chatbase=new Proxy(window.chatbase,{
            get(target,prop){
              if(prop==="q"){return target.q}
              return(...args)=>target(prop,...args)
            }
          })
        }
        const onLoad=function(){
          const script=document.createElement("script");
          script.src="https://www.chatbase.co/embed.min.js";
          script.id="up41ckpo2aENqqx6yRrQx";
          script.domain="www.chatbase.co";
          document.body.appendChild(script)
        };
        if(document.readyState==="complete"){onLoad()}
        else{window.addEventListener("load",onLoad)}
      })();
    `;
    document.body.appendChild(inlineScript);

    return () => {
      // Clean up (remove dono scripts)
      const el = document.getElementById('up41ckpo2aENqqx6yRrQx');
      if (el) el.remove();
      document.body.removeChild(inlineScript);
    };
  }, []);

  return null; // Widget khud render karega
}
