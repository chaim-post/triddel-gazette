//The code to take input from buttons, determain which section to show
//next, make visible the previous section, and hide all other sections.

var prevSection; //var to tell us which was the previous visible section of the game
var currentSection = "intro-0"; //var to tell us which section of the game is currently visible
//var input = ; //var for user input
var playerInfo; //var to hold all info given in players race/class choice.

/*Function that checks button's value and determains if it is 
(a)Race selection >> set race and goto intro-2, run function to change js-RC to appropriate text
(b)standard selection >> goto 'page' specified in value*/
$(document).ready(function () {
    $(':button').click(function () {
        if ($(this).attr('class') === 'RaceClass') { //(a)
            playerInfo = $(this).data(); //give playerInfo the data from the user selection
            //change all dynamic sections of the game text to match player selection.
            $('span.js-RC').html(playerInfo.race + " " + playerInfo.class);
            $('span.js-customMsg1').html(playerInfo.story);
            $('button.js-RCplot').html(playerInfo.plot);
            $('button.js-RCplot').attr("value", playerInfo.value);
            
            prevSection = '#intro-0';
            currentSection = '#intro-1';
            //add class hidden to intro-0
            $("#intro-0").addClass("hidden");
            //remove class hidden from intro-1
            $('#intro-1').removeClass('hidden');
        }//end of if
        else { //(b)
            playerInfo = $(this).data(); //give playerInfo the data from the user selection
            prevSection = currentSection;
            currentSection = $(this).attr('value');
            //add class hidden to prevSection
            $(prevSection).addClass('hidden');
            //remove class hidden from currentSection
            $(currentSection).removeClass('hidden');
            //if playerInfo contains data-connection append connection's value to currentSection
            if (playerInfo.connection) {
                $(currentSection).append($(playerInfo.connection).html());
            }// end if inside else
        }//end else
    });//end of button.click
    
}); //end of document.ready