import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Whyus />
  );
}

function Whyus(){
  return (
    <div className='container'>
      <div className='intro'>
      <h1>Why the Industry Chooses Clickdee?</h1>
      <p>We understand performance marketing from every angle and every stage of the funnel. Our clients trust that we know what metrics move their business towards growth. Our publisher and affiliate partners know that we make maximum revenue and ROAS a main focus when growing our partnerships.</p>
      </div>
      <div className='cards'>
        <div className='card-item-intro'>
        </div>
        <div className='card-item grey'>
          <div className='matter'>
            <h4>Choose Your Local Targeting</h4>
            <p className='matter-desc'>
              Our targeted and tracked calls are tailored to your business needs, audience, and geolocation.
            </p>
          </div>
        </div>
        <div className='card-item'>
          <div className='matter'>
            <h4>Track Your Conversation</h4>
            <p className='matter-desc'>
              Our targeted and tracked calls are tailored to your business needs, audience, and geolocation.
            </p>
          </div>
        </div>
        <div className='card-item space-even grey'>
          <div className='matter'>
            <h4>Customized Campaigns</h4>
            <p className='matter-desc'>
              Our targeted and tracked calls are tailored to your business needs, audience, and geolocation.
            </p>
          </div>
        </div>
        <div className='card-item'>
          <div className='matter'>
            <h4>Get Dedicated Support Teams</h4>
            <p className='matter-desc'>
              Our targeted and tracked calls are tailored to your business needs, audience, and geolocation.
            </p>
          </div>
        </div>
        <div className='card-item grey'>
          <div className='matter'>
            <h4>Quality Assuarance</h4>
            <p className='matter-desc'>
              Our targeted and tracked calls are tailored to your business needs, audience, and geolocation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
