
import Layout from './components/layout/layout'
import Banner from './components/sections/banner'
import { usePortfolio } from './contextApi/context';
import Loading from './components/shareds/loading';
import react, { useState, useEffect } from 'react'
import About from './components/sections/about';
import Projects from './components/sections/projects';
import Contact from './components/sections/contact';

function App() {

  const { loading, getPortfolio ,getprojects} = usePortfolio();
  useEffect(() => {
    getPortfolio()
    getprojects()
  }, [])


  return (
    <>
      {/*    */}
      {
        loading ? (<Loading />)
          :
          (<Layout>

            < Banner />
            <Projects></Projects>
            <About></About>
            
            <Contact></Contact>


          </Layout>
          )

      }

    </>
  )
}

export default App
