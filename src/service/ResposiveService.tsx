import { createContext, useContext, useEffect, useState } from "react"

const ResponsiveContext = createContext(false);
export default function ResponsiveService({children}:any) {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(()=>{
      const isMobileDevice = () => {
        if (window.innerWidth < 768) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      };
  
      
      isMobileDevice();
  
      
      const handleResize = () => {
        isMobileDevice();
      };
  
      
      window.addEventListener('resize', handleResize);
  
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    },[] )
  
    return (
   <ResponsiveContext.Provider value={isMobile}>
    {children}
   </ResponsiveContext.Provider>
  )
}

export const useResponsive=()=>{
    return useContext(ResponsiveContext);
}