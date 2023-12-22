// Récupération des éléments du DOM
let taskInput = document.getElementById("taskInput"); // Récupère l'élément avec l'ID "taskInput"
let btn = document.getElementById("addTaskbtn"); // Récupère l'élément avec l'ID "addTaskbtn"
let list = document.getElementById("taskList"); // Récupère l'élément avec l'ID "taskList"

// Ajout d'un gestionnaire d'événements au clic du bouton
btn.addEventListener('click', function () {
    let task = taskInput.value.trim(); // Récupère la valeur de l'input et enlève les espaces au début et à la fin

    // Vérifie si la tâche n'est pas vide
    if (task !== "") {
        let listItem = document.createElement('li'); // Crée un nouvel élément <li>
        listItem.textContent = task; // Définit le texte de l'élément <li> avec la valeur de la tâche
        list.appendChild(listItem); // Ajoute l'élément <li> à la liste

        // Fonction pour supprimer la tâche lors d'un double-clic
        function removeTask() {
            list.removeChild(listItem); // Supprime l'élément <li> de la liste
            listItem.removeEventListener('dblclick', removeTask); // Supprime le gestionnaire d'événements 'dblclick' sur l'élément <li>
        }

        listItem.addEventListener('dblclick', removeTask); // Ajoute un gestionnaire d'événements 'dblclick' à l'élément <li>
    }
});
