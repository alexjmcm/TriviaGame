var rights = [];
var wrongs = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"];
var answers = ["","Harrison Ford","Star Wars","A Brain","Ellen Degeneres","Gotham City","Krypton","Arnold Schwarzenegger","Hogwarts"];
var x, seconds;

$(document).ready(function() {
    timer();

    function review (q){
        
        var value = $('input[name="' + q + '"]:checked').val();
        console.log(value);

        var str = q;
        var a = str.slice(1, 2);
        a = parseInt(a);
        console.log(a);

        var indexRights = rights.indexOf(q);
        if (indexRights > -1) {
          rights.splice(indexRights, 1);
        }

        var indexWrongs = wrongs.indexOf(q);
        if (indexWrongs > -1) {
          wrongs.splice(indexWrongs, 1);
        }

if (value === answers[a]){
            rights.push(q);
 
        }else{
             wrongs.push(q);
   
        };

        console.log(rights);
        console.log(wrongs);        
    }

$("#q1").on("click", function(e){
        review("q1");
    });

    $("#q2").on("click", function(e){
        review("q2");
 
    });

    $("#q3").on("click", function(e){
        review("q3");
     });

    $("#q4").on("click", function(e){
        review("q4");   
    });

    $("#q5").on("click", function(e){
        review("q5");
    });

    $("#q6").on("click", function(e){
        review("q6");
    });

    $("#q7").on("click", function(e){
        review("q7");   
    });

    $("#q8").on("click", function(e){
        review("q8");
    });

  $("#submit").on("click", function(e){

        e.preventDefault();
        document.getElementById("time").innerHTML = "You submitted!";
        clearInterval(x);

        if (rights.length > wrongs.length) {

                $("#questions").html('<h1 style="color: blue;"> You Win <h1>' +
                                     '<p>Rights:</p>' + rights.length +
                                     '<p>Wrong:</p>' + wrongs.length);            

        } else {
                $("#questions").html('<h1 style="color:red;"> You Lose <h1>' +
                                     '<p>Rights:</p>' + rights.length +
                                     '<p>Wrong:</p>' + wrongs.length);  
        }
    });  
});

function timer() {

        seconds = 30;    
        x = setInterval(function()
        {
            document.getElementById("time").innerHTML = Math.floor(seconds/60) + " m " + seconds%60 + " s";
           
            seconds--;
                       
            if (seconds === 0) {
                document.getElementById("time").innerHTML = "Time's Up!";
                $("#submit").hide();
                $("input[type=radio]").prop('disabled', true);               
                clearInterval(x);
            }

        }, 1000);    
}



$("#restart").on("click", function restart (event)
{
    location.reload();
});