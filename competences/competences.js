document.addEventListener('DOMContentLoaded', function() {
    // Récupérer tous les onglets et les contenus
    const tabs = document.querySelectorAll('.competence-tab');
    const contents = document.querySelectorAll('.competence-content');
    
    // Fonction pour afficher une compétence spécifique
    function showCompetence(id) {
        // Cacher tous les contenus
        contents.forEach(content => {
            content.classList.remove('active');
        });
        
        // Retirer la classe active de tous les onglets
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Afficher le contenu sélectionné
        const selectedContent = document.getElementById(id);
        if (selectedContent) {
            selectedContent.classList.add('active');
        }
        
        // Activer l'onglet correspondant
        const selectedTab = document.querySelector(`.competence-tab[data-target="${id}"]`);
        if (selectedTab) {
            selectedTab.classList.add('active');
        }
        
        // Mettre à jour l'URL sans recharger la page
        history.pushState(null, null, `#${id}`);
    }
    
    // Ajouter des écouteurs d'événements aux onglets
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            showCompetence(targetId);
        });
    });
    
    // Vérifier si un hash est présent dans l'URL au chargement
    if (window.location.hash) {
        const id = window.location.hash.substring(1);
        showCompetence(id);
    } else {
        // Par défaut, afficher la première compétence
        const firstTab = tabs[0];
        if (firstTab) {
            const targetId = firstTab.getAttribute('data-target');
            showCompetence(targetId);
        }
    }
});