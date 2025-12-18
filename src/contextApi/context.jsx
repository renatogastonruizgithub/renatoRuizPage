import { createContext, useContext, useEffect, useRef, useState } from "react";
import axios from "axios";



export const contextApi = createContext();

export const usePortfolio = () => {
  return useContext(contextApi);
};

export const ProviderComponent = ({ children }) => {

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const [visibleElement, setVisibleElement] = useState()

  const myRef = useRef()
  /*  useEffect(() => {
 
   }, [setVisibleElement]) */

  function observer() {
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries.forEach((el) => {

          if (el.isIntersecting) {
            setVisibleElement(true)
            console.log(entries)
          }
          else {
            setVisibleElement(false)

          }
        })
      },
      {
        rootMargin: "0px",
        root: null,
        threshold: 0
      }
    )
    return observer.observe(myRef.current)
  }

  function getPortfolio() {
    setLoading(true);
    axios.get("https://v2-0-portafolio.fly.dev/api/portafolio").then((res) => {
      console.log(res.data.portafolio)
      setList(res.data.portafolio);
      
      setLoading(false);
    })
  }



  const getprojects = async () => {
    setLoading(true);
    await axios.get(`https://v2-0-portafolio.fly.dev/api/getProjects/`).then((res) => {
      console.log(res.data.projects)
      setProjects(res.data.projects);
      setLoading(false);
    });
    return projects
  }


  return <contextApi.Provider value={{getprojects, observer, getPortfolio,
     visibleElement, myRef, list,projects, loading }}>{children}</contextApi.Provider>;
};

