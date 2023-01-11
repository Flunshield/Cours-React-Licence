import Copyright from '../Composents/Copyright';
import CreatePlayer from '../Composents/CreatePlayer';
import DeletePlayer from '../Composents/DeletePlayer';
import GetWeapon from '../Composents/GetWeapon';
import HeadBand from '../Composents/HeadBand';

export default function ManagementCharacter() {
  return (
    <>
      <HeadBand />
      <div>
        <h1 >Bienvenue sur la page de gestion des personnages</h1>
        <p>Lorsque vous cliquerez sur le bouton "Créer un héro" ou "Créer un Enemmie", le jeu vous génèrera un personnage aléatoirement.</p>
      </div>
      <CreatePlayer />
      <DeletePlayer />
      <GetWeapon />
      <Copyright />
    </>
  );
}