class Perso extends ElementHtml{
    constructor($html) {
        super($html);
        this.$bulle=$html.find(".bulle");
        this.mots=[
            "J'aime utiliser mon cerveau"
            ,"Aujourd'hui est un jour spécial. Indice: c'est mon anniversaire..."
            ,"C'est toujours un plaisir de vous voir, sosie"
            ,"Je déteste les chiffres"
            ,"J'aime aussi bien recevoir des cadeaux qu'en donner."
            ,"Vivement l'hiver..."
            ,"J'aime étudier et enrichir mes connaissances."
            ,"On voit passer des avions, parfois. Je me demande bien d'où ils viennent..."
            ,"J'ai l'impression que je suis né pour accomplir de grandes choses"
        ];
    }
    parle(blabla){
        let ici=this;
        this.$bulle.text(blabla);
        setTimeout(function(){
            ici.$bulle.text("");
        },1500);
    }

    /**
     * Renvoie un mot aléatoire
     * @returns {string}
     */
    get motAleatoire(){
        return this.mots[Math.floor(Math.random() * this.mots.length)];
    }

}
