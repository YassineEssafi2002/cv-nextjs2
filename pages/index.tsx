import React from 'react';
import Image from 'next/image';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.css';


import { FaEnvelope, FaPhone, FaMapMarker, FaUser } from 'react-icons/fa';

library.add(faLinkedin, faFacebook, faGithub);


function MyCV() {
return (
<div>
<img src="https://imagizer.imageshack.com/img923/8373/WJFSrz.jpg" style={{ float: 'right' }} />
<h1>Yassine ESSAFI</h1>
<p><FaUser /> <b>Age:</b> 21 ans</p>
<p><FaMapMarker /> <b>Adresse:</b> 20 rue du bus, Tourcoing 59200 </p>
<p><FaEnvelope /> <b>Email:</b> yassinessafi2002@gmail.com</p>
<p><FaPhone /> <b>Tél:</b> 0753531350</p>

<h2>Introduction</h2>
  <p>Je suis un développeur web passionné par la création de sites Web et dapplications.</p>

  <h2>Compétences</h2>
  <ul>
  <li><i className="fab fa-html5" style={{fontSize: "1.5em"}}></i> <i className="fa-brands fa-css3" style={{color:"#4169E1", fontSize: "1.5em"}}></i> <i className="fa-brands fa-square-js" style={{color:"grey", fontSize: "1.5em"}}></i></li>
  <li><i className="fab fa-react" style={{color:"#00BFFF", fontSize: "1.5em"}}></i> <i className="fa-brands fa-node" style={{color:"#3C873A", fontSize: "1.5em"}}></i></li>
  <li><i className="fab fa-java" style={{color:"#FFA500", fontSize: "1.5em"}}></i> <i className="fa-solid fa-c" style={{color:"#A8B9CC", fontSize: "1.5em"}}></i> <i className="fa-brands fa-python" style={{color:"#3776AB", fontSize: "1.5em"}}></i></li>
  <li><i className="fas fa-database" style={{color:"#4169E1", fontSize: "1.5em"}}> </i> SQL</li>
  <li><i className="fas fa-network-wired" style={{color:"#1E90FF", fontSize: "1.5em"}}></i> CCNA1</li>
  <li><i className="fab fa-github" style={{color:"#333", fontSize: "1.5em"}}></i> Git, GitHub</li>
  <li><i className="fas fa-pencil-alt" style={{color:"#C71585", fontSize: "1.5em"}}></i> Photoshop, Illustrator, InDesign</li>
</ul>



  <h2>Expérience professionnelle</h2>
  <h4>Stage développeur web chez Prophyto Bouarg SARL (2022)</h4>
  <p>Durée: Mars 2022 - Avril 2022</p>
  <ul>
    <li>Création de plusieurs sites Web pour la société</li>
    <li>Mise en place dun logiciel pour la gestion des inventaires/commandes</li>
    <li>Utilisation de Node.js pour le backend</li>
    <li>Travail en équipe avec les développeurs backend</li>
  </ul>

  <h4>Stage développeur web chez CERAMICA LA MEDITERRANNEE SARL (2021)</h4>
  <p>Durée: Nov 2021 - Mai 2021</p>
  <ul>
    <li>Création de plusieurs sites Web pour la société</li>
    <li>Utilisation de Node.js pour le backend</li>
    <li>Travail en équipe avec les développeurs backend</li>
  </ul>

  <h4>Stage développeur web chez CERAMICA LA MEDITERRANNEE SARL (2020)</h4>
  <p>Durée: Mars 2020 - Avril 2020</p>
  <ul>
    <li>Création d une application Web pour le suivi de la production</li>
    <li>Utilisation de React pour le frontend</li>
    <li>Utilisation de Node.js pour le backend</li>
    <li>Travail en équipe avec les développeurs backend</li>
  </ul>



  <h2>Formation</h2>
<ul>
<li><i className="fa-solid fa-school"style={{color:"#31206e",fontSize: "1.3em"}}></i> ENIGMA :1er année Responsable de projet Informatique (Lille, France. 2022- 2025)</li>
<li><i className="fa-solid fa-school"style={{color:"#31206e",fontSize: "1.3em"}}></i> ECOLE Pigier:Diplôme Technicien Spécialisé en Développement Informatique(Nador, Maroc. 2019- 2021)</li>
<li> <i className="fa-solid fa-school"style={{color:"#31206e",fontSize: "1.3em"}}></i> Lycée Qualifiant Al Matar : Diplôme du BAC (Nador, Maroc - 2019)</li>
 </ul>

 <h2>Langues</h2>
 <ul>
  <li style={{ listStyle: "none" }}>

    <span style={{ marginLeft: "5px" }}>Français : Niveau courant</span>
  </li>

  <li style={{ listStyle: "none" }}>

    <span style={{ marginLeft: "5px" }}>Anglais : Niveau Intermédiaire</span>
  </li>

  <li style={{ listStyle: "none" }}>

    <span style={{ marginLeft: "5px" }}>Arabe : Langue Maternelle</span>
  </li>

  <li style={{ listStyle: "none" }}>

    <span style={{ marginLeft: "5px" }}>Espagnol : Niveau Intermédiaire</span>
  </li>
</ul>

  <h2>Qualités</h2>
  <ul> 
    <li>Sens de lorganisation</li>
    <li>Curieux</li>
    <li>Travail en équipe</li>
  </ul>

  <h2>Liens</h2>
  <ul className="social-icons">
  <li>
    <a href="https://www.linkedin.com/in/essafi-yassine-officiel/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} />
      <span>LinkedIn</span>
    </a>
  </li>
  <li>
    <a href="https://www.facebook.com/essafiyassine.OFFICIEL" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebook} />
      <span>Facebook</span>
    </a>
  </li>
  <li>
    <a href="https://github.com/YassineEssafi" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} />
      <span>GitHub</span>
    </a>
  </li>
</ul>

   <h2>Centres dintérêt</h2>
  <ul>
    <li><i className="fa-solid fa-book"style={{color:"#31206e",fontSize: "1.1em"}}></i> Lecture</li>
    <li><i className="fa-solid fa-music"style={{color:"#31206e",fontSize: "1.1em"}}></i> Musique</li>
    <li><i className="fa-regular fa-futbol"style={{color:"#31206e",fontSize: "1.1em"}}></i> Sport</li>
  </ul>

</div>


)
;
}
export default MyCV;





