import Copyright from '../Composents/Copyright';
import CreatePlayer from '../Composents/CreatePlayer';
import HeadBand from '../Composents/HeadBand';
  
  export default function CreateCharacter() {
    return (
      <>
        <HeadBand />
        <CreatePlayer />
        <Copyright />
      </>
    );
  }