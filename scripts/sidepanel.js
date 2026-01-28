// Script pour le sidepanel Riven Market

document.addEventListener('DOMContentLoaded', () => {
  console.log('Riven Market sidepanel chargé');
  
  // Gestionnaire du bouton d'actualisation
  const refreshBtn = document.getElementById('refreshBtn');
  
  refreshBtn.addEventListener('click', async () => {
    console.log('Actualisation demandée');
    
    // Envoyer un message au service worker
    try {
      const response = await chrome.runtime.sendMessage({ 
        action: 'getData' 
      });
      
      console.log('Réponse reçue:', response);
      alert('Données actualisées !');
    } catch (error) {
      console.error('Erreur lors de l\'actualisation:', error);
    }
  });
  
  // Charger les données initiales
  loadInitialData();
});

async function loadInitialData() {
  // Charger les données depuis le storage
  chrome.storage.local.get(['marketData'], (result) => {
    if (result.marketData) {
      console.log('Données du marché:', result.marketData);
    } else {
      console.log('Aucune donnée sauvegardée');
    }
  });
}
