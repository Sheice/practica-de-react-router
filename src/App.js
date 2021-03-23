import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './styles/App.css';
import Initiaton from './Components/Initiaton';
import Animes from './Components/Animes';
import attack from './img/attack.jpg';
import bleach from './img/bleach.jpg';
import kimetsu from './img/kimetsu.jpg';
import naruto from './img/naruto.jpg';
import onePiece from './img/onePiece.jpg';

function App() {
  return (
    <Router>
      <h1 className="title-main">Top 5 Animes Buenos</h1>
      <ul className="container-nav">
        <Link to="/">
          Inicio
        </Link> 
          <Link to="/naruto">Naruto</Link> 
        
          <Link to="/onePiece">One Piece</Link>
        
          <Link to="/bleach">Bleach</Link>
        
          <Link to="/attackOnTitan">Attack on Titan</Link>
        
          <Link to="/kimetsuNoYaiba">Kimetsu no Yaiba</Link>
        
      </ul>
      <Switch>
        <Route path="/kimetsuNoYaiba">
            <Animes 
            title="Kimetsu No Yaiba"
            info="Estamos en la era Taisho de Japón. Tanjiro, un joven que se gana la vida vendiendo carbón, descubre un día que su familia ha sido asesinada por un demonio. Para empeorar las cosas, su hermana menor Nezuko, la única superviviente de la masacre, ha sufrido una transformación en demonio. Destrozado por los acontecimientos Tanjiro decide convertirse en un cazador de demonios para poder devolver a su hermana a la normalidad y matar al demonio que masacró a su familia."
            img={kimetsu}
            alt="imágen de Kimetsu No Yaiba"
            />
        </Route>
        <Route path="/attackOnTitan">
        <Animes 
            title="Attack On Titan"
            info="Muchos años atrás, la humanidad estuvo al borde de la extinción con la aparición de unas criaturas gigantes que devoraban a todas las personas. Huyendo, la humanidad consiguió sobrevivir en una ciudad fortificada de altas murallas que se ha convertido en el último reducto de la civilización contra los Titanes que campan a sus anchas por el mundo. Ahora esa paz está a punto de verse interrumpida por una cadena de acontecimientos que llevará a desvelar qué son los Titanes y cómo aparecieron."
            img={attack}
            alt="imágen de Attack On Titan"
            />
        </Route>
        <Route path="/onePiece">
            <Animes 
            title="One Piece"
            info="Hora de estreno en Latinoamérica: Domingos a la 1:30 AM PST (Hora del Pacífico) Hora de estreno en España: Domingos a las 09:30 (Hora española peninsular) Monkey. D. Luffy se rehusa a que nadie se interponga en su camino por la búsqueda para convertirse el rey de todos los piratas. Con un camino trazado por las traicioneras aguas del Grand Line y más allá, se trata de un capitán que nunca se dará por vencido hasta que consiga el tesoro más grande de la Tierra: el Legendario One Piece."
            img={onePiece}
            alt="imágen de One Piece"
            />
        </Route>
        <Route path="/naruto">
            <Animes
            title="Naruto"
            info="Naruto Uzumaki es un niño marginado en la aldea ninja en la que vive. En su interior reside el poder de una bestia que estuvo al borde de destruir el pueblo años atrás, el Kyubi, el zorro de nueve colas, lo que hace que nadie quiera acercarse a él por considerarlo maldito. Pese a su soledad y su tristeza, Naruto quiere ser un ninja, pero no uno cualquiera: quiere ser Hokage, el líder de la aldea. En su camino, sus convicciones atraerán a muchos amigos y compañeros de viaje."
            img={naruto}
            alt="imágen de Naruto"
            />
        </Route>
        <Route path="/bleach">
            <Animes 
            title="Bleach"
            info="Ichigo Kurosaki es un estudiante de instituto de 15 años, que tiene una peculiaridad: es capaz de ver, escuchar y hablar con fantasmas. Pero no sabe hasta dónde puede abarcar la clasificación de espíritus, ni lo que conlleva el saberlo. Un buen día una extraña chica, de pequeña estatura y que viste ropas negras de samurai, entra en su cuarto. Se llama Rukia Kuchiki, y es una Shinigami (Dios de la Muerte). Ante la incredulidad de Ichigo, le explica que su trabajo es mandar a las almas buenas o plus a un lugar llamado la Sociedad de Almas, y eliminar a las almas malignas o hollows."
            img={bleach}
            alt="imágen de Bleach"
            />
        </Route>
        <Route path="/">
          <Initiaton />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
