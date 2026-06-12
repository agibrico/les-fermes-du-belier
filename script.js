// 1. CONFIGURATION API
// REMPLACEZ la ligne ci-dessous par votre VRAIE URL de Google Apps Script
const API_URL = "VOTRE_URL_GOOGLE_APPS_SCRIPT_ICI";

// 2. FONCTION D'APPEL API (Communication avec Sheets)
async function apiCall(action, payload) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: action, ...payload })
    });
    return await response.json(); 
  } catch (error) {
    console.error("Erreur API:", error);
    return { statut: "ERREUR", message: "Serveur injoignable" };
  }
}

// 3. VOTRE LOGIQUE D'APPLICATION (Exemple de fonction)
async function envoyerDonnees() {
    // Vérifiez que 'monInput' correspond à l'ID d'un champ dans votre index.html
    const valeur = document.getElementById("monInput") ? document.getElementById("monInput").value : "Test";
    
    // Appel de l'API
    const resultat = await apiCall("actionTest", { valeur: valeur });
    
    // Affichage du résultat
    console.log(resultat);
    alert("Réponse du serveur : " + resultat.message);
}

// 4. INSTALLATION PWA (Service Worker)
// Ce bloc permet à votre site de devenir "installable"
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => console.log('Service Worker enregistré !', reg))
      .catch((err) => console.log('Erreur Service Worker', err));
  });
}
