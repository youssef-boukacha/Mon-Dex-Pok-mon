// =============================================================
// script.js — Mon Dex
// =============================================================
// Les données viennent de data.js (la constante `creatures`).
// Écrivez votre code ici, fonctionnalité par fonctionnalité.
// Une carte GitHub Projects et au moins un commit par fonctionnalité.


// -------------------------------------------------------------
// 1. AFFICHAGE
// Supprimez les cartes écrites à la main dans index.html et
// construisez la grille à partir du tableau `creatures`.
// -------------------------------------------------------------

const grid = document.getElementById("grid");

function displayCreatures(list) {

  grid.innerHTML = "";

  list.forEach(function(creature) {

    grid.innerHTML += `
      <div   class="card  bg-white rounded-xl p-5 shadow-md" data-id="${creature.id}">
     <p>${creature.id}</p>
       
     <img src="${creature.image}" alt="${creature.name}">

        <div class="flex justify-between" >
        <h2 class="text-xl font-bold">
          ${creature.name}
        </h2>
          <span class="bg-[#969696]  rounded-xl">${creature.type}</span>
        </div>

        <p>${creature.level}</p>
        
        <div class= "text-center p-8"> 
         <button  type = "button"  class="button border-2 rounded-md  bg-[#EBFBFF]  hover:bg-sky-700" > Ajouter à l'équipe </button> 
        </div>

      </div>
      
    `;

  }
);


}

displayCreatures(creatures);
// -------------------------------------------------------------
// 2. DÉTAIL
// Un clic sur une carte ouvre le panneau de détail :
// image, description, et statistiques affichées en barres.
// -------------------------------------------------------------

    


const detail = document.getElementById("detail");

function details() {
  grid.addEventListener("click", function(event) {

    // ما نفتحوش التفاصيل إلا كان الضغط على زر الفريق
    if (event.target.closest(".button")) {
      return;
    }

    // نلقاو الكارت اللي تضغط عليها المستخدم
    const card = event.target.closest(".card");

    if (!card) {
      return;
    }

    // نجيبو ID ديال Pokémon
    const id = card.dataset.id;

    // نقلبو على Pokémon فـ Array
    const creature = creatures.find(function(creature) {
      return creature.id === id;
    });

    if (!creature) {
      return;
    }

    // نعمرّو panneau بالمعلومات
    document.getElementById("detail-id").textContent = creature.id;
    document.getElementById("detail-name").textContent = creature.name;
    document.getElementById("detail-type").textContent = creature.type;
    document.getElementById("detail-description").textContent = creature.description;

    const image = document.getElementById("detail-image");
    image.src = creature.image;
    image.alt = creature.name;

    const hp = creature.stats.hp;
    const attack = creature.stats.attack;
    const defence = creature.stats.defence;

    document.getElementById("detail-hp").textContent = hp;
    document.getElementById("detail-attack").textContent = attack;
    document.getElementById("detail-defence").textContent = defence;

    // عرض الإحصائيات على شكل barres
    document.getElementById("bar-hp").style.width = ((hp/255) *100)+"%";
    document.getElementById("bar-attack").style.width = ((attack/190)*100)+"%";
    document.getElementById("bar-defence").style.width =( (defence/230)*100)+"%";

    // نظهرو panneau
    detail.classList.remove("hidden");

    // نهبطو للـ panneau باش يبان للمستخدم
    detail.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}




// زر إغلاق panneau
document.getElementById("close-detail").addEventListener("click", function() {
  detail.classList.add("hidden");
});

 details ()
 
 

// -------------------------------------------------------------
// 3. RECHERCHE
// La liste se met à jour pendant la saisie d'un nom
// (sans tenir compte des majuscules).
// -------------------------------------------------------------
function recherche (){
 const search = document.getElementById("search");

search.addEventListener("input", function() {
    const text = search.value.toLowerCase();

    const result = creatures.filter(function(creature) {
        return creature.name.toLowerCase().includes(text);
    });

    displayCreatures(result);
  
});
}
recherche();


// -------------------------------------------------------------
// 4. FILTRE
// Les boutons de type n'affichent que les créatures de ce type ;
// « Tous » réinitialise le filtre.
// La recherche et le filtre fonctionnent ENSEMBLE.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 5. CRÉER UNE CRÉATURE
// Validez chaque champ du formulaire avec une expression régulière
// (voir le tableau du brief). Affichez le message d'erreur sous le
// champ, et n'ajoutez jamais une créature invalide.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 6. MON ÉQUIPE
// Boutons « Ajouter à l'équipe » et « Retirer », gérés avec UN SEUL
// écouteur sur la grille et UN SEUL sur l'équipe (délégation).
// -------------------------------------------------------------


// -------------------------------------------------------------
// 7. RÈGLES DE L'ÉQUIPE
// 6 créatures au maximum, pas de doublon, un message clair quand
// une action est refusée, et un compteur (x/6).
// -------------------------------------------------------------


// -------------------------------------------------------------
// BONUS : LocalStorage, Fetch API, tri, comparaison
// -------------------------------------------------------------
