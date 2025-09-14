'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Helper functions to get page context
const getPageType = (pathname: string) => {
  if (pathname === '/dashboard') return 'Dashboard';
  if (pathname === '/chapters') return 'Class 6 Chapters';
  if (pathname === '/chapters/class-8') return 'Class 8 Chapters';
  if (pathname === '/chapters/class-8/science-wonder') return 'Science Wonder - Crop Management';
  if (pathname === '/chapters/class-8/maths-wonder') return 'Maths Wonder - Algebraic Expressions';
  if (pathname === '/chapters/maths-world') return 'Maths World';
  if (pathname === '/chapters/science-world') return 'Science World';
  if (pathname === '/chat-bot') return 'AI Learning Assistant';
  if (pathname === '/leaderboard') return 'Leaderboard';
  if (pathname === '/profile') return 'User Profile';
  if (pathname === '/hologram_setup') return 'Hologram Setup';
  return 'Educational Platform';
};

const getInitialMessage = (pathname: string) => {
  const pageType = getPageType(pathname);
  return `Hello! I can see you're currently on the ${pageType} page. How can I help you with your learning today?`;
};

const getUserContext = (pathname: string) => {
  const context: any = {
    currentPage: pathname,
    pageType: getPageType(pathname)
  };

  // Add specific context based on page
  if (pathname.includes('class-8')) {
    context.classLevel = 'Class 8';
    context.difficulty = 'Advanced';
  } else if (pathname.includes('chapters')) {
    context.classLevel = 'Class 6';
    context.difficulty = 'Intermediate';
  }

  if (pathname.includes('science')) {
    context.subject = 'Science';
    if (pathname.includes('wonder')) {
      context.topic = 'Crop Management';
      context.specialization = 'Agricultural Science';
    }
  } else if (pathname.includes('maths')) {
    context.subject = 'Mathematics';
    if (pathname.includes('wonder')) {
      context.topic = 'Algebraic Expressions';
      context.specialization = 'Advanced Algebra';
    }
  }

  return context;
};

export default function ChatbaseWidget() {
  const pathname = usePathname();
  
  useEffect(() => {
    // Agar pehle se script hai to dobara mat add karo
    if (document.getElementById('up41ckpo2aENqqx6yRrQx')) return;

    // Set chatbase configuration with current page context
    (window as any).embeddedChatbotConfig = {
      chatbotId: "up41ckpo2aENqqx6yRrQx",
      domain: "www.chatbase.co",
      // Add page context for better AI responses
      initialMessage: getInitialMessage(pathname),
      customData: {
        currentPage: pathname,
        pageType: getPageType(pathname),
        userContext: getUserContext(pathname),
        timestamp: new Date().toISOString()
      }
    };

    // Function to update chatbot context when page changes
    const updateChatbotContext = () => {
      if ((window as any).chatbase) {
        (window as any).chatbase('updateContext', {
          currentPage: pathname,
          pageType: getPageType(pathname),
          userContext: getUserContext(pathname),
          message: `Page changed to: ${getPageType(pathname)}`
        });
      }
    };

    // Update context immediately
    updateChatbotContext();

    // Add custom CSS for chatbot positioning - optimized for web view
    const customStyle = document.createElement('style');
    customStyle.innerHTML = `
      /* Chatbot popup positioning - optimized for web view applications */
      #chatbase-bubble-button {
        position: fixed !important;
        bottom: 90px !important;
        right: -20px !important;
        z-index: 9999 !important;
        transition: transform 0.3s ease !important;
        -webkit-transform: translateZ(0) !important;
        transform: translateZ(0) !important;
        will-change: transform !important;
      }
      
      /* Touch and hover interactions for web view */
      #chatbase-bubble-button:hover,
      #chatbase-bubble-button:active,
      #chatbase-bubble-button:focus {
        transform: translateX(-15px) translateZ(0) !important;
        -webkit-transform: translateX(-15px) translateZ(0) !important;
      }
      
      /* Chatbot iframe positioning for web view */
      iframe[src*="chatbase"] {
        position: fixed !important;
        bottom: 150px !important;
        right: -140px !important;
        z-index: 9998 !important;
        transition: transform 0.3s ease !important;
        border-radius: 12px !important;
        box-shadow: 0 8px 32px rgba(0,0,0,0.15) !important;
        -webkit-transform: translateZ(0) !important;
        transform: translateZ(0) !important;
        will-change: transform !important;
        max-width: 90vw !important;
        max-height: 70vh !important;
      }
      
      iframe[src*="chatbase"]:hover,
      iframe[src*="chatbase"].active,
      iframe[src*="chatbase"]:focus {
        transform: translateX(-150px) translateZ(0) !important;
        -webkit-transform: translateX(-150px) translateZ(0) !important;
      }
      
      /* Alternative selectors for different chatbot containers */
      div[id*="chatbase"],
      div[class*="chatbase"],
      div[data-chatbase],
      .chatbase-widget {
        position: fixed !important;
        bottom: 90px !important;
        right: -20px !important;
        z-index: 9999 !important;
        transition: transform 0.3s ease !important;
        -webkit-transform: translateZ(0) !important;
        transform: translateZ(0) !important;
        will-change: transform !important;
        -webkit-tap-highlight-color: transparent !important;
      }
      
      div[id*="chatbase"]:hover,
      div[class*="chatbase"]:hover,
      div[data-chatbase]:hover,
      .chatbase-widget:hover,
      div[id*="chatbase"]:active,
      div[class*="chatbase"]:active,
      div[data-chatbase]:active,
      .chatbase-widget:active {
        transform: translateX(-15px) translateZ(0) !important;
        -webkit-transform: translateX(-15px) translateZ(0) !important;
      }

      /* Ensure compatibility with web view viewport */
      @media screen and (max-width: 768px) {
        #chatbase-bubble-button {
          bottom: 100px !important;
          right: -15px !important;
        }
        
        iframe[src*="chatbase"] {
          bottom: 160px !important;
          right: -120px !important;
          width: 320px !important;
          height: 400px !important;
        }
        
        iframe[src*="chatbase"]:hover,
        iframe[src*="chatbase"].active {
          transform: translateX(-130px) translateZ(0) !important;
        }
      }

      /* Web view specific optimizations */
      @media screen and (max-width: 480px) {
        #chatbase-bubble-button {
          bottom: 110px !important;
          right: -10px !important;
          scale: 0.9 !important;
        }
        
        iframe[src*="chatbase"] {
          bottom: 170px !important;
          right: -100px !important;
          width: 280px !important;
          height: 350px !important;
        }
        
        iframe[src*="chatbase"]:hover,
        iframe[src*="chatbase"].active {
          transform: translateX(-110px) translateZ(0) !important;
        }
      }

      /* High DPI displays optimization */
      @media (-webkit-min-device-pixel-ratio: 2) {
        #chatbase-bubble-button,
        iframe[src*="chatbase"],
        div[id*="chatbase"],
        div[class*="chatbase"] {
          -webkit-backface-visibility: hidden !important;
          backface-visibility: hidden !important;
        }
      }
    `;
    document.head.appendChild(customStyle);

    // Enhanced script injection with web view optimizations
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
          document.body.appendChild(script);
          
          // Enhanced positioning logic for web view applications
          setTimeout(() => {
            const chatElements = document.querySelectorAll([
              '[id*="chatbase"]', 
              '[class*="chatbase"]', 
              'iframe[src*="chatbase"]',
              '[data-chatbase]',
              '.chatbase-widget'
            ].join(','));
            
            chatElements.forEach(element => {
              // Touch events for mobile web view
              element.addEventListener('touchstart', (e) => {
                e.preventDefault();
                element.style.transform = 'translateX(-15px) translateZ(0)';
                element.style.webkitTransform = 'translateX(-15px) translateZ(0)';
              }, { passive: false });
              
              element.addEventListener('touchend', () => {
                setTimeout(() => {
                  element.style.transform = 'translateX(0) translateZ(0)';
                  element.style.webkitTransform = 'translateX(0) translateZ(0)';
                }, 2000);
              });
              
              // Mouse events for desktop web view
              element.addEventListener('mouseenter', () => {
                element.style.transform = 'translateX(-15px) translateZ(0)';
                element.style.webkitTransform = 'translateX(-15px) translateZ(0)';
              });
              
              element.addEventListener('mouseleave', () => {
                element.style.transform = 'translateX(0) translateZ(0)';
                element.style.webkitTransform = 'translateX(0) translateZ(0)';
              });

              // Focus events for accessibility
              element.addEventListener('focus', () => {
                element.style.transform = 'translateX(-15px) translateZ(0)';
                element.style.webkitTransform = 'translateX(-15px) translateZ(0)';
              });

              element.addEventListener('blur', () => {
                element.style.transform = 'translateX(0) translateZ(0)';
                element.style.webkitTransform = 'translateX(0) translateZ(0)';
              });
            });

            // Web view specific viewport adjustments
            const adjustForWebView = () => {
              const isWebView = window.navigator.userAgent.includes('wv') || 
                               window.navigator.userAgent.includes('WebView') ||
                               window.ReactNativeWebView !== undefined;
              
              if (isWebView) {
                chatElements.forEach(element => {
                  element.style.position = 'fixed';
                  element.style.zIndex = '9999';
                });
              }
            };

            adjustForWebView();
            window.addEventListener('resize', adjustForWebView);
            
          }, 1500);
        };
        if(document.readyState==="complete"){onLoad()}
        else{window.addEventListener("load",onLoad)}
      })();
    `;
    document.body.appendChild(inlineScript);

    return () => {
      // Enhanced cleanup for web view
      const el = document.getElementById('up41ckpo2aENqqx6yRrQx');
      if (el) el.remove();
      if (customStyle.parentNode) {
        document.head.removeChild(customStyle);
      }
      if (inlineScript.parentNode) {
        document.body.removeChild(inlineScript);
      }
      // Remove any remaining event listeners
      window.removeEventListener('resize', () => {});
    };
  }, [pathname]); // Re-run when page changes

  return null; // Widget khud render karega
}
