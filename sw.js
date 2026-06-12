
// --- CONFIGURATION API ---
const API_URL ="https://script.google.com/macros/s/AKfycbz_V3RA6HQIo43v8eo1ALjfFhnyWQxNc3Thmw16YspXJmBcLfMcT5XJ96dspDw1a82TgQ/exec"; // Remplacez bien par votre URL

// Fonction utilitaire pour remplacer google.script.run
async function apiCall(action, payload) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      mode: "cors", // Utilisez 'cors' pour pouvoir lire la réponse du serveur
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: action, ...payload })
    });
    
    return await response.json(); 
  } catch (error) {
    console.error("Erreur API:", error);
    return { statut: "ERREUR", message: "Serveur injoignable" };
  }
}

// --- LE RESTE DE VOS FONCTIONS (ex: gestion des clics, formulaires, etc.) ---
function maFonctionPrincipale() {
   // Exemple d'utilisation :
   // const data = await apiCall('verifierConnexion', {user: 'test', pass: '123'});
}
