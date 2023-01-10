import Copyright from '../Composents/Copyright';
import GameControl from '../Composents/GameControl';
import HeadBand from '../Composents/HeadBand';
import News from '../Composents/News';
  
  export default function Home() {
    return (
      <>
        <HeadBand />
        <GameControl />
        <News />
        <Copyright />
      </>
    );
  }
  