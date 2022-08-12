import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {  

  useEffect(() => {//Roda pelo lado do browser (Optimizar este código)
    if (localStorage.getItem("userData") === null){
      localStorage.setItem("userData", "[]")
    }
    if (localStorage.getItem("complaintsData") === null){
      localStorage.setItem("complaintsData", "[]")
    }
    if (localStorage.getItem("activeUser") === null){
      localStorage.setItem("activeUser", null)
    }
  })

  return (
    <>
      <NavBar/>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
