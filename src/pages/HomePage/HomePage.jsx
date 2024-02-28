import './HomePage.css'
import Footer from '../../components/Footer/Footer'

export default function HomePage() {
  return (
    <>
    <div className='gridhero'>
      <p className='hero top'>Because sharp </p>
      <p className='hero mid'>knives</p>
      <p className='hero lower'>save lives</p>
    </div>
      <div className='herocontainer'>
        <p className='copy'> Welcome to an application designed to help you keep track of when you last sharpened your knives and what you sharpened them with.</p>
      </div>
      <Footer />
    </>
  )
}