import headshot from './images/headshot.jpg';
import heroBackground from './images/hero-background.jpg';
import './App.scss';

function App() {
  return (
    <div className="app">
      <div className='about-page'>
        <div className='navbar'>
          <div className='navbar__title-container'>
            <div className='navbar__title'>Travelize</div>
            <div className='navbar__subtitle'><i>My traveling experiences</i></div>
          </div>
          <div className='navbar__navlink-container'>
            <div className='navbar__navlink'>Home</div>
            <div className='navbar__navlink'>Blog</div>
            <div className='navbar__navlink navbar__navlink--selected'>About</div>
          </div>
        </div>
        <img className='landscape' src={heroBackground} />
        <div className='about-me'>
          <img className='about-me__headshot' src={headshot} />
          <div className='about-me__description'>
            <div className='about-me__title'>A little about me</div>
            <div className='about-me__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est. Vitae auctor eu augue ut. Mauris pellentesque pulvinar pellentesque habitant. Interdum velit euismod in pellentesque massa. Eget nunc lobortis mattis aliquam faucibus. Justo nec ultrices dui sapien. Dui sapien eget mi proin sed. Dis parturient montes nascetur ridiculus mus. Eu volutpat odio facilisis mauris sit amet massa. Nisi est sit amet facilisis. Dictum at tempor commodo ullamcorper a lacus. Commodo quis imperdiet massa tincidunt nunc pulvinar. Eu turpis egestas pretium aenean. Eget sit amet tellus cras adipiscing. Gravida rutrum quisque non tellus orci ac auctor augue mauris.</div>
            <div className='about-me__paragraph'>Pellentesque elit eget gravida cum sociis. Varius quam quisque id diam. Scelerisque varius morbi enim nunc. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Egestas dui id ornare arcu odio. Tortor at auctor urna nunc id cursus. Sit amet dictum sit amet justo donec enim diam. Faucibus a pellentesque sit amet porttitor eget. Faucibus pulvinar elementum integer enim neque volutpat. Tortor at auctor urna nunc id cursus metus aliquam. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Scelerisque eu ultrices vitae auctor eu augue. Neque viverra justo nec ultrices dui sapien. Fermentum dui faucibus in ornare quam viverra orci. Convallis convallis tellus id interdum velit laoreet id donec. Ut eu sem integer vitae justo eget magna.</div>
            <div className='about-me__paragraph'>Nunc sed id semper risus in. Elementum pulvinar etiam non quam lacus. Odio facilisis mauris sit amet massa vitae. Sed euismod nisi porta lorem mollis aliquam ut. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Nec dui nunc mattis enim ut tellus. Morbi tristique senectus et netus et. Mi eget mauris pharetra et ultrices neque. Sagittis id consectetur purus ut faucibus pulvinar elementum. Vivamus arcu felis bibendum ut tristique et egestas quis. Eget egestas purus viverra accumsan in nisl.</div>
            <div className='about-me__paragraph'>Cras adipiscing enim eu turpis. Ut tortor pretium viverra suspendisse potenti. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Ullamcorper velit sed ullamcorper morbi. Proin libero nunc consequat interdum varius. Sagittis purus sit amet volutpat. Volutpat sed cras ornare arcu dui vivamus. Sed odio morbi quis commodo odio aenean. Malesuada fames ac turpis egestas maecenas pharetra convallis. Scelerisque varius morbi enim nunc faucibus a pellentesque. Proin sed libero enim sed faucibus. Blandit massa enim nec dui. Diam quam nulla porttitor massa id neque aliquam vestibulum.</div>
          </div>
        </div>
        <div className='footer'>
          <div className='footer__copyright'>© 2020 Travelize</div>
          <div className='footer__navlink-container'>
            <div className='footer__navlink'>Privacy Policy</div>
            <div className='footer__navlink'>Terms and Conditions</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
