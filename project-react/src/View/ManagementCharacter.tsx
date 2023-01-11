import Copyright from '../Composents/Copyright';
import CreatePlayer from '../Composents/CreatePlayer';
import DeletePlayer from '../Composents/DeletePlayer';
import HeadBand from '../Composents/HeadBand';
  
  export default function ManagementCharacter() {
    return (
      <>
        <HeadBand />
        <div>
        <h1 >Bienvenue sur la page de créaton de personnage</h1>
        <p>Lorsque vous cliquerez sur le bouton "Créer un héro" ou "Créer un Enemmie", le jeu vous génèrera un personnage aléatoirement.</p>
        </div>
        <CreatePlayer />
        <DeletePlayer />
        <Copyright />
      </>
    );
  }