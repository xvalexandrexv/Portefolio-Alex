// custom hook para evitar os diversos duplicados que irei criar

import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer'
import type { SectionName } from "./types";


export function useSectionInView (sectionName: SectionName, threshold = 0.75) {

    const { ref, inView} = useInView({
        threshold: threshold // quando a secçao estiver pelo a 50% troca do elemento da navBar
      });
      const{ setActiveSection, timeOfLastClick }= useActiveSectionContext();
    
      useEffect(() => {
        if(inView && Date.now() - timeOfLastClick > 1000) {
          setActiveSection(sectionName);
        }
      },[inView, setActiveSection, timeOfLastClick, sectionName])

      return {
        ref
      }

}
