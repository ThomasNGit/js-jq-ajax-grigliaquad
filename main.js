// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato

//funzione click dell'item specifico(JQuery)
$( document ).ready(function(){


    $(".box").click(function(){

        console.log("click");
    
        //mi salvo il valore del click su (this)
        var thisbox = $(this);
        //inserisco l'API per generare un numero casuale
        
         $.ajax({

            url : "https://flynn.boolean.careers/exercises/api/random/int",

            method : "GET",

            success : function(data) {

                console.log(data.response);

                if(data.response <= 5){
                    thisbox.addClass("yellow");
                    thisbox.off();
                } else {
                    thisbox.addClass("green");
                    thisbox.off();
                }               
            },
            error : function() {
                 alert("ERRORE!")
            }
         })

    })
})