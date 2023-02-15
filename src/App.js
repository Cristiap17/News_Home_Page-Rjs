import './App.css';
import web3DesktopImg from '../src/assets/images/image-web-3-desktop.jpg'
import vintagePc from '../src/assets/images/image-retro-pcs.jpg'
import topLaptops from '../src/assets/images/image-top-laptops.jpg'
import gamingGrowth from '../src/assets/images/image-gaming-growth.jpg'
import { Header } from './Header';



function App() {
  return (
      <div className="app">

        <Header/>
        
        <div className='main-aside-container'>
        <main className='main-container'>
          <img alt='img web3 desktop' src={web3DesktopImg}/>
          <div className='image-information' >
            <h1>The Bright Future of Web 3.0?</h1>
            <article>
              <p>
                We dive into the next evolition of the web that claims to put the power of the plataforms back into the hands of the people. But is it really fulfilling its promise?
              </p>
              <button>
                READ MORE
              </button>
            </article>
          </div>
        </main>

        <aside className='aside-container'>
          <h1>New</h1>
          <article>
            <div className='text-aside1'>
              <h3> Hydrogen VS Electric Cars</h3>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                <span>_______________________________________</span>
            </div>
            <div>
              <h3 className='text-aside2'> The Downsides of AI Artistry</h3>
              <p>What are the possible adverse effects of on-demand AI image generations?</p>
              <span>_______________________________________</span>
            </div>
            <div className='text-aside3'>
              <h3> Is VC Funding Drying Up?</h3>
              <p>Private funding by VC firms is down 50% YOY. We take a look at what that means</p>
            </div>
          </article>
        </aside>
        </div>
      
<footer className='footer-container'>

          <div className='cards-container'>

            <div>
              <img alt='vintage-pc-img' src={vintagePc}/>
              <div className='product-info'>
                <span>01</span>
                <h3>Reviving Retro PCs</h3>
                <p>What happens when old PCs are given moderns upgrades?</p>
              </div>
            </div>

            <div>
              <img alt='top-laptops-img' src={topLaptops}/>
              <div className='product-info'>
                <span>02</span>
                <h3>Top 10 Laptops of 2022</h3>
                <p>Our best piks for various needs and budgets</p>
              </div>
            </div>

            <div>
              <img alt='gaming-img' src={gamingGrowth}/>
              <div className='product-info'>
                <span>03</span>
                <h3>The Growth of Gaming</h3>
                <p>How the pandemic has sparked fresh opportunities</p>
              </div>
            </div>

          </div>


        </footer>
      </div>
  );
}

export default App;
