import fbAppli from 'firebase/app';
import 'firebase/firestore';


/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDYXixKoQkDQRBQM6g_v0lspnYwWsUV2OM",
  authDomain: "veille-technologique-173fb.firebaseapp.com",
  databaseURL: "https://veille-technologique-173fb-default-rtdb.firebaseio.com",
  projectId: "veille-technologique-173fb",
  storageBucket: "veille-technologique-173fb.appspot.com",
  messagingSenderId: "884338243671",
  appId: "1:884338243671:web:01f43ca82deb29efa98b12",
  measurementId: "G-706FZ2JG5N"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;