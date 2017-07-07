     
			/*$(window).scroll(function(){
            if($(window).scrollTop()>0){
            	$('.firstimg').fadeOut(1000);
            	$('.secondimg').fadeIn(1000);
            };
        });
$(window).scroll(function(){
            if($('.inspire').scrollTop()>0){
               

               $(".realinspire").show( "slide", {direction: "right" }, 1000 );
           }

   });*/
   $(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
     // console.log(' i m here 1');
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
     // console.log(' i m here 2');
      event.preventDefault();

      // Store hash
      var hash = this.hash;
     // console.log(hash);
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({

        scrollTop: $(hash).offset().top
      }, 2800, function(){
         // console.log($(hash).offset().top);
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
            $(document).ready(function(){
     $('.preloadlogo').addClass('preloadlogoheight');

        
    $('.preload').slideUp(4000,function(){

     $('.afterload').slideDown(1000);   
    }); 
    
});
        
$(document).ready(function(){
    $('.icon-menu').click(function(){
       
               $(".navibar").show( "slide", {direction: "left" }, 1000 );
               $('.loadsec').addClass('pntclass');
    }); });
 $('.clsbtn').click(function(){
       $(".navibar").hide( "slide", {direction: "left" }, 1000,function(){

       $('.loadsec').removeClass('pntclass');
       });
       });

 


$('.naviclose').click(function(){

    window.setTimeout(function(){
      $('.clsbtn').trigger('click');

    },3000);
});

    $('.taskcollagecol5').hover(function(){
          $(this).css("background-color", "rgb(50, 54, 64)");
         },function(){
            $(this).css("background-color", "#3b5998");
         });
      $('.taskcollagecol6').hover(function(){
          $(this).css("background-color", "rgb(50, 54, 64)");
         },function(){
            $(this).css("background-color", "#dd4b39");
         });
        $('.taskcollagecol8').hover(function(){
          $(this).css("background-color", "rgb(50, 54, 64)");
         },function(){
            $(this).css("background-color", "#007bb6");
         });
          $('.taskcollagecol9').hover(function(){
          $(this).css("background-color", "rgb(50, 54, 64)");
         },function(){
            $(this).css("background-color", "#517fa4");
         });
      
var tnode1= document.createTextNode('A corporate website designed and developed for a New Delhi based firm while working as a freelancing web developer. The  design of the website is developed from scratch and is not developed on any pre-existing template. Tecnology used: HTML5, CSS3, Bootstrap, JS, JQuery, PHP etc.');
var tnode2= document.createTextNode('A static website devloped for a New Delhi based inverter company. The website is developed on a pre existing free template. Technology used: HTML5, CSS3, Bootstrap, JS, JQuery, PHP etc.');
var tnode3= document.createTextNode('A website devloped for the startup i interned with. It is a digital education website and i did many crucial tasks such as new pages wireframing and devlopment, database management, promocode generation and verification, payment gateway integration, dynamic page creation etc. Technology used: HTML5, CSS3, Bootstrap, Less, JS, jQuery, AJAX, PHP etc.');
var tnode4= document.createTextNode('A website to manage budget and tasks of individuals. The website contains user specific expense management, task and Notes management, various calculators , backtracking date wise user expenditure etc and has a user friendly user interface. Technology used : HTML5, CSS3, Bootstrap, LESS, JS, JQuery, PHP etc.');
var tnode5= document.createTextNode('A single page Minesweeper game using Angular JS. Single Player game with high score record. Technologies Used : Angular JS, CSS, HTML, BootStrap, JavaScript. Apart from this i have created some other single page web apps such as grocery app, quiz app etc.');
var tnode6= document.createTextNode("A Music Website Prototype designed for one of college projects. On this website, users can choose their favorite artist from a variety of artists and can hear the artist's top tracks.");
var tnode7= document.createTextNode('Coming Soon');   
var tnode8= document.createTextNode('Coming Soon');
var tnode9= document.createTextNode('Coming Soon');
 $('.projectcol1').click(function(){
  $('.profade').fadeIn(800);
  $('.profaderight').append(tnode1);
  $('.profadeleft').css('background-image','url("images/pro/alpha4.jpg")');
 });

 $('.profadeclose').click(function(){
  $('.profade').fadeOut(800);

  tnode1.remove();
 });

 $('.projectcol2').click(function(){
  $('.profade').fadeIn(800);
  $('.profaderight').append(tnode2);
  $('.profadeleft').css('background-image','url("images/pro/alpha5.jpg")');
 });

 $('.profadeclose').click(function(){
  $('.profade').fadeOut(800);

  tnode2.remove();
 });

 $('.projectcol3').click(function(){
  $('.profade').fadeIn(800);
  $('.profaderight').append(tnode3);
  $('.profadeleft').css('background-image','url("images/pro/3.jpg")');
 });

 $('.profadeclose').click(function(){
  $('.profade').fadeOut(800);

  tnode3.remove();
 });
 $('.projectcol4').click(function(){
  $('.profade').fadeIn(800);
  $('.profaderight').append(tnode4);
  $('.profadeleft').css('background-image','url("images/pro/alpha7.jpg")');
 });

 $('.profadeclose').click(function(){
  $('.profade').fadeOut(800);

  tnode4.remove();
 });
 $('.projectcol5').click(function(){
  $('.profade').fadeIn(800);
  $('.profaderight').append(tnode5);
  $('.profadeleft').css('background-image','url("images/pro/alpha8.png")');
 });

 $('.profadeclose').click(function(){
  $('.profade').fadeOut(800);

  tnode5.remove();
 });
 $('.projectcol6').click(function(){
  $('.profade').fadeIn(800);
  $('.profaderight').append(tnode6);
  $('.profadeleft').css('background-image','url("images/pro/6.jpg")');
 });

 $('.profadeclose').click(function(){
  $('.profade').fadeOut(800);

  tnode6.remove();
 });
 $('.projectcol7').click(function(){
  $('.profade').fadeIn(800);
  $('.profaderight').append(tnode7);
  $('.profadeleft').css('background-image','url("images/pro/14.jpg")');
 });

 $('.profadeclose').click(function(){
  $('.profade').fadeOut(800);

  tnode7.remove();
 });
 $('.projectcol8').click(function(){
  $('.profade').fadeIn(800);
  $('.profaderight').append(tnode8);
  $('.profadeleft').css('background-image','url("images/pro/8.jpg")');
 });

 $('.profadeclose').click(function(){
  $('.profade').fadeOut(800);

  tnode8.remove();
 });
 $('.projectcol9').click(function(){
  $('.profade').fadeIn(800);
  $('.profaderight').append(tnode9);
  $('.profadeleft').css('background-image','url("images/pro/9.jpg")');
 });

 $('.profadeclose').click(function(){
  $('.profade').fadeOut(800);

  tnode9.remove();
 });

var node=document.createElement("DIV");

document.getElementsByClassName('contactmebtn')[0].addEventListener('click',function(){
  node.innerHTML='Please wait we are processing your request.';
  node.classList.add('text-center','alert','alert-info');
  document.getElementsByClassName('contactleft')[0].appendChild(node);
    var form =document.getElementById('contactme');

    var name =form.elements[0].value;
    var email =form.elements[1].value;
    var cno =form.elements[2].value;
    var message =form.elements[3].value;
  //  console.log(name+email+cno+message);
    var xmlhttp =new XMLHttpRequest();
     
    xmlhttp.onreadystatechange=function(){
      //console.log('state chaned');
      if((this.readyState===4  && this.status===200))
      {      node.innerHTML=this.responseText;
            
      }
     
 
      }; 
        xmlhttp.open("POST","form.php",true);
xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.send("name=" + name + "&email=" + email + "&cno=" + cno + "&message=" + message); 
});

  