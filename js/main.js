var cart1 = document.getElementById("cartUn")
var cart2 = document.getElementById("cartDeux")
var cart3 = document.getElementById("cart3")



var tireUn = "Vous avais etait livrée par Slimane Hassani "
var sousTitreUn = "Votre livraison c'est t'il bien passée ?"
var textUn = "Vous avais choisie de vous faire livrée via Uber eat / Deliveroo Une solution écologique ! pour vous faire livrée rapidement vos repas préféré ! Attention parfois en tant que livreur à vélo nous avont certain commentaire cars la commande et en retart sur certaine villes les livreur livre en voiture ce qui et Interdi  !  <br> Vous pouvez nous donner une note sur l'apllication cela nous aide !  "







var selectElmt = document.getElementById("form");

///    PARTIE UBER EATS ////


  var uber = "Uber-Eats"
  var Deliveroo = "Deliveroo"

  choix =""


  



  // Affiché les Choix  // 

  document.getElementById("uber").innerHTML=uber
  document.getElementById("deliveroo").innerHTML=Deliveroo




   function select ()
   {
        var choix = textselectionne = selectElmt.options[selectElmt.selectedIndex].text; 


        if (choix === uber ) {  
                
                document.getElementsByTagName("body")[0].style.backgroundColor="#71BF44"
                document.getElementById("navbarre").style.backgroundColor="#2a2a2a"
                document.getElementById("navbarre").style.color="#71BF44"

                // caché le menue 

                document.getElementById("start").style.display="none"

                //affiché page uber 

                document.getElementById("UberPage").style.display="block"

        }

        else if (choix === Deliveroo ){
                document.getElementsByTagName("body")[0].style.backgroundColor="#00CCBC"
                document.getElementById("navbarre").style.borderBottom="black"


        }

   }

















/// PARTIE DELIVERRO !///////