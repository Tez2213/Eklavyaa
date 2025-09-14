'use client';
import { useEffect } from 'react';

export default function ChatbaseWidget() {
  useEffect(() => {
    // Agar pehle se script hai to dobara mat add karo
    if (document.getElementById('up41ckpo2aENqqx6yRrQx')) return;

    // Add custom CSS for chatbot positioning
    const customStyle = document.createElement('style');
    customStyle.innerHTML = `
      /* Chatbot positioning - left side, 25% up from bottom, touching border */
      #chatbase-bubble-button {
        position: fixed !important;
        bottom: 25% !important;
        left: 0px !important;
        right: auto !important;
        z-index: 1000 !important;
      }
      
      /* Chatbot iframe positioning - FULLSCREEN when open */
      iframe[src*="chatbase"] {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        z-index: 9999 !important;
        border: none !important;
        border-radius: 0 !important;
        box-shadow: none !important;
        background: transparent !important;
      }
      
      /* Remove any container backgrounds */
      div[id*="chatbase"],
      div[class*="chatbase"] {
        background: transparent !important;
        backdrop-filter: none !important;
      }
      
      /* Mobile responsive - still fullscreen */
      @media (max-width: 768px) {
        #chatbase-bubble-button {
          bottom: 25% !important;
          left: 0px !important;
        }
        
        iframe[src*="chatbase"] {
          top: 0 !important;
          left: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
        }
      }
    `;
    document.head.appendChild(customStyle);

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
      if (inlineScript.parentNode) {
        document.body.removeChild(inlineScript);
      }
      if (customStyle.parentNode) {
        document.head.removeChild(customStyle);
      }
    };
  }, []);

  return null; // Widget khud render karega
}
