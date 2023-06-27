import '../Styles/Home.css';
import Header from './Header';

function Home() {
  return (
    <div className='home-container'>
      <Header active='home'/>
      <div className='home'>
        Home page here
      </div>
    </div>
  )
}

export default Home