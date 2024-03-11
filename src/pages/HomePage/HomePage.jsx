import './HomePage.css'
import Footer from '../../components/Footer/Footer'

export default function HomePage() {
  return (
    <>
      <div className='herocontainertop'>
        <p className='hero top'>Sharp knives <br/>
        save lives</p>
        <p className='copy'>Helping you keep track of when you last sharpened your knives and what you sharpened them with.</p>
      </div>
      <Footer />
    </>
  )
}