

   document.addEventListener("DOMContentloaded", function(){ 
const bouton = document.getElementById("contactButton");
bouton.addEventListener("click", function() {
    const niveau = document.getElementById("niveau").Value;
    const matiere = document.getElementById("matiere").Value;
    const besoin = document.getElementById("besoin").Value;
    if (niveau ==="" || matiere ===""||besoin ===""){
        alert("veuillez remplir les trois champs.");
    return;}
    const message =
    "Bonjour BRIDGE-Assistance, je souhaite avoir des informations."+
    "\n\nNiveau de l'eleve: " + niveau + "\nMatiere :" + matiere + " \nBesoin principal :"+ besoin; 
    const numero = "22656821318";
    const lienwhatsApp = "https://wa.me/"+ numero + "?text=" +encodeURIComponent(message);
    windows.location.href = lienwhatsApp;
    
});
});
