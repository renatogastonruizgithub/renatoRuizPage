import { createContext, useContext, useEffect, useRef, useState } from "react";
import axios from "axios";



export const contextApi = createContext();

export const usePortfolio = () => {
  return useContext(contextApi);
};

export const ProviderComponent = ({ children }) => {

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
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
    axios.get("https://mipaginaweb.fly.dev/portafolio").then((res) => {
      setList(res.data.body);
      console.log(res.data.body)
      setLoading(false);
    })
  }



  const idDetails = async (id) => {
    setLoading(true);
    await axios.get(`https://mipaginaweb.fly.dev/projects/${id}`).then((res) => {
      setDetails(res.data.body);
      setLoading(false);
    });
    return details
  }


  return <contextApi.Provider value={{ observer, getPortfolio, visibleElement, myRef, list, details, idDetails, loading }}>{children}</contextApi.Provider>;
};

