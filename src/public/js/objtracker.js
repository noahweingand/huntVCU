var chosenObj = undefined; // for the chosen objective on the page. 

const allObj = [{ 
                    name: 's1', 
                    diff: 'Hard', 
                    clue: "VCUart's theatre where you can catch their latest mainstage production (Be sure to check out their next production coming this April: Spring Awakening).",
                    img: '/spot1.png'
                }, 
                {
                    name: 's2', 
                    diff: 'Hard', 
                    clue: "Hidden park near William Fox Elementary.",
                    img: '/spot2.jpg'
                },
                {
                    name: 's3', 
                    diff: 'Extra Hard', 
                    clue: "Richmond Vampire lives here.",
                    img: '/spot3.jpg'
                },
                {
                    name: 's4', 
                    diff: 'Medium', 
                    clue: "Two dollar pizza with drunk people!",
                    img: '/spot4.jpg'
                },
                {
                    name: 's5', 
                    diff: 'Easy', 
                    clue: "A place to study with a lingering case of the bed bugs...",
                    img: '/spot5.jpg'
                },
                {
                    name: 's6', 
                    diff: 'Easy', 
                    clue: "Where one would see popular plays, stand up, performers, and homecoming concerts on campus...",
                    img: '/spot6.jpg'
                },
                {
                    name: 's7', 
                    diff: 'Easy', 
                    clue: "Where one will attend ceremonies and graduation...IF you pass your classes...",
                    img: '/spot7.jpeg'
                },
                {
                    name: 's8', 
                    diff: 'Easy', 
                    clue: "Relatively new museum on campus where you can see all mediums of art",
                    img: '/spot8.jpg'
                },
                {
                    name: 's9', 
                    diff: 'Medium', 
                    clue: "Home of VCU's executive overseers who patrol campus",
                    img: '/spot9.jpg'
                },
                {
                    name: 's10', 
                    diff: 'Easy', 
                    clue: "Crowded exercising on campus",
                    img: '/spot10.jpg'
                }
];

$.each(allObj, function(i, v) {
    (function (v) {
        $("#" + v.name).click(() => {
            chosenObj = v.name;
	        $('#difficulty').text(v.diff); 
	        $('#clue').text(v.clue); 
	        $('#mapclue').attr("src", v.img).width("100%"); 
        }); 
    })(v);  
});

$('#enter-answer').on('click', () => {
    let answer = $('#answer-box').val().toLowerCase();    

    if(chosenObj === 's1' && answer === 'raymond hodges theatre'){
        $('#isCorrect').text('Great job!');
    }

    else if(chosenObj === 's2' && answer === 'scuffletown park'){
        $('#isCorrect').text('Correct!');
    }

    else if(chosenObj === 's3' && answer === 'hollywood cemetery'){
        $('#isCorrect').text('Correct!');
    }

    else if(chosenObj === 's4' && (answer === 'christian\'s pizza' || answer === 'christians pizza')){
        $('#isCorrect').text('Correct!');
    }

    else if(chosenObj === 's5' && answer === 'cabell library'){
        $('#isCorrect').text('Correct!');
    }

    else if(chosenObj === 's6' && answer === 'altria theater'){
        $('#isCorrect').text('Correct!');
    }

    else if(chosenObj === 's7' && answer === 'siegel center'){
        $('#isCorrect').text('Correct!');
    }

    else if(chosenObj === 's8' && (answer === 'ica' || answer === 'institute of contemporary art')){
        $('#isCorrect').text('Correct!');
    }

    else if(chosenObj === 's9' && answer === 'police station'){
        $('#isCorrect').text('Correct!');
    }

    else if(chosenObj === 's10' && (answer === 'cary st gym' || answer === 'cary st. gym' || answer === 'cary street gym')){
        $('#isCorrect').text('Correct!');
    }
    
    else{
        $('#isCorrect').text('Nope, not quite!');
    }
});
