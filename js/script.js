$(document).ready(function(){
//question 1
    $("h2").hover(
        function (){ $(this).css("color", "red");},
        function (){ $(this).css("color", "blue");
    });

//question 2
$("div#green").hide();

//question 3
$("div#checkbox input").checkboxradio({
    icon: false })


//question 4
$(".rectangle").click(function(){
    $("div#checkbox label").css("color", $(this).attr('id'));
                    })

//question 5
$("div#checkbox input").click(function(){
     var id =  $(this).val()
     $("#" + id).toggle(1000);
});


//question 6
var rectangle = $(".rectangle");
$("#slider").slider({
    range: "true",
      min: 10,
      max: 140,
      value: 10,

    slide: function(event, ui ) {
        $(".rectangle").css("width", ui.value);
        //$("div#checkbox input label").css("font-size", ui.value);
        $("div#largeur label").text(ui.value + "px");
    }
})





//question 7
$("#slider").tooltip({
    show: {
        effect: "slideDown",
        delay: 250
    }
})
   
//question 8
  //La boite de dialogue
$('#dialog').dialog({
    modal: true,
    autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      }
    });

    //Afficher l'icone et le clique
$( "div#message button" ).button({
    icon: "ui-icon-comment", 
  }).click(function(){
    $('#dialog').dialog("open");
});

//Question 9 
var p = $("#paragraphe p").last();
$( "#add" ).button({
    icon: "ui-icon-plus"
  }).click(function(){
    var text = $("#paragraphe p").last().text();
 
    $("#add").before("<p>" + text + "</p>");
  });

//Question 10 

$( "#del" ).button({
    icon: "ui-icon-minus"
  }).click(function(){
    //p.text() ca marche pas !
    $("#paragraphe p").last().remove();
  });

//Question 11 
$("#animation button").button({
    icon: "ui-icon-play"
}).click(function(){
    $(this).animate({left: '300px'}, "slow");
    $(this).animate({left: '0px'});
});

//Question 12   //À revenir à la finc pour utiliser un serveur
$("div#ajax button").button({
    icon: "ui-icon-help"
}).click(function(){
    $("#reponse").load("ajax/jquery.txt");
});

//question 13
$("#datepicker").datepicker();

//question 14
$("#spinner").spinner({
    min: 0,
    max: 10
});


//Question 15
  //L'élément "each()"
  /* La méthode each() spécifie une fonction à exécuter pour chaque élément correspondant.
  */ 
$("#paragraphe p").each(function(){
  $(this).css("background-color", "pink");
})

//"slideToggle" pour le faire j'ai ajouter le bouton dont l'id = flip
$("#flip").click(function(){
  $("div#animation button").slideToggle("slow");
});

//afficher la largeur courrante des rectangles
$("#largeurClick").click(function(){
  alert($(".rectangle").innerWidth());
})

//Question 16
//Ceci a été fait en "linkant" de nouveau fichiers .css ajoutés dans le dossier css



});
