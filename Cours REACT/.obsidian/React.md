
## Appel API


.then dans un fetch permet de gérer le retour d'un API.

Exemple pour un **GET** :
``` js
    const [listPlayer, setlistPlayer] = useState<ListPlayer[]>([])

    const [isUse, setIsUse] = useState(false)

    const [isPlayerLoading, setisPlayerLoading] = useState(false)

    const API_LINK = "https://localhost:7148/getAllHeroes"

    const fetchData = async () => {

      await fetch(API_LINK, {

        method: 'GET'

      })

      .then((res) => res.json())

      .then((result: ListPlayer[]) => {

        setlistPlayer(result);

        setisPlayerLoading(true)

      });

  }
```

Important : Tout cez qui sort de la fonction DOM est un effet de bord, par exemple, requete HTTP.
Si nous manipulon le DOM en dehors de cadre de react.

React fournit un hook qui eprmet de gérer les effets de bord : UseEffect 
[] => Tableau de dépendance, permet d'effectuer la modification d'un élément du code en fonction de la dépendance.

Les hooks ne fonctionne que dans les fonction, pas dans les classes.
Les hooks remplacent la casi totalité de react a ses début.

# EXPLIQUER le useCallBack