function validerFormulaire(){
    const prenom = document.formulaire.prenom.value;
    const nom = document.formulaire.nom.value;
    const sujet = document.formulaire.sujet.value;
    const message = document.formulaire.message.value;
    if (prenom=== "" || nom=== "" || sujet=== "" || message=== ""){
        alert("Veuillez compléter tous les champs s'il vous plaît !")
        return false;
    }
    else{
        alert("Merci de nous avoir contacté. Nous vous reviendrons très prochainement avec une réponse !")
    }
    return true
}