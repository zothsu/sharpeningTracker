import './HomePage.css'
import Footer from '../../components/Footer/Footer'

export default function HomePage() {
  return (
    <>
      <div className='herocontainertop'>
        <p className='hero top'>Sharp knives</p>
        <p className='hero lower'>save lives</p>
        <p className='copy'>Welcome to an application designed to help you keep track of when you last sharpened your knives and what you sharpened them with.</p>
      </div>
      <Footer />
    </>
  )
}