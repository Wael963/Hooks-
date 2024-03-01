import logo from './logo.svg';
import './App.css';
import Movielist from './components/Movielist';
import { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './components/AddMovie';
import Fiilter from './components/Fiilter';

function App() {
  const [SearchRate,setSearchRate]=useState(0)
  const [titlesearch,setTitleSearch]=useState("")
  const [movies, setMovies] = useState([{
    title: "Titanic",
    description: "Southampton, 10 avril 1912. Le paquebot le plus grand et le plus moderne du monde, réputé pour son insubmersibilité, le Titanic, appareille pour son premier voyage. Quatre jours plus tard, il heurte un iceberg. A son bord, un artiste pauvre et une grande bourgeoise tombent amoureux.",
    rating: 5,
    posterURL: "https://blob.cede.ch/catalog/10011000/10011245_1_92.jpg?v=2"
  },
  {
    title: "Extraction 2",
    description: "Après avoir été présumé mort en Inde, Tyler Rake est retrouvé par ses collègues mercenaires et emmené à Dubaï, où il est soigné de justesse. Mais après neufs mois à se remettre de ses blessures et à envisager la retraite, Rake est contacté par son ex-femme Mia pour sauver sa petite sœur Ketevan, épouse d'un dangereux détenu géorgien du nom de Davit Radiani, et les enfants de cette dernière de la prison où ils ont été enfermés. Mais la mission d'extraction tourne mal, et après le meurtre de Radiani, la prison devient vite un piège mortel où tout le monde veut les tuer.",
    rating: 7,
    posterURL: "https://upload.wikimedia.org/wikipedia/en/0/02/Extraction_2_poster.jpg"
  },
  {
    title: "La casa de papel",
    description: "Un homme mystérieux, surnommé le Professeur3, planifie le braquage le plus audacieux jamais réalisé. Pour exécuter son plan, il recrute huit des meilleurs malfaiteurs en Espagne qui n'ont rien à perdre.    Le but est d'infiltrer la Fabrique nationale de la monnaie afin d'imprimer 2,4 milliards d'euros, en petites coupures de 50 € et cela en moins de onze jours, sans victimes — malgré la présence de 67 otages, dont la fille de l'ambassadeur du Royaume-Uni, Alison Parker, et sans qu’il y ait de relations amoureuses entre les braqueurs… Le Professeur demande aussi aux membres de la bande de se choisir un pseudonyme à partir de noms de ville : Tokyo, Rio, Berlin, Denver, Nairobi, Oslo, Helsinki et Moscou.Lors de la deuxième saison (composée des parties 3, 4 et 5), le Professeur reprend un projet imaginé par son demi-frère avant le premier braquage. Le but est d'infiltrer la Banque d'Espagne afin de dérober 90 tonnes d'or et de sauver un des leurs, Rio, emprisonné et torturé illégalement par la police espagnole, qui garde le secret sur ses actes.",
    rating: 2,
    posterURL: "https://fr.web.img6.acsta.net/pictures/21/08/02/16/08/1706767.jpg"
  }
  ])
  return (
    <div className="App">
      <Fiilter SearchRate={SearchRate} setSearchRate={setSearchRate} title={setTitleSearch}/>
      <AddMovie setMovies={setMovies} movies={movies} />
      <Movielist movies={movies.filter(movie=>movie.title.includes(titlesearch))} />
    </div>
  );
}

export default App;
