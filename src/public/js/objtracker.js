var chosenObj = undefined; // for the chosen objective on the page. 

const allObj = [{ 
                    name: 's1', 
                    diff: 'Hard', 
                    clue: "VCUart's theatre where you can catch their latest mainstage production (Be sure to check out their next production coming this April: Spring Awakening).",
                    img: '/Singleton_Center_Raymond_Hodges_Theatre.png'
                }, 
                {
                    name: 's2', 
                    diff: 'Hard', 
                    clue: "Hidden park near William Fox Elementary.",
                    img: '/Singleton_Center_Raymond_Hodges_Theatre.png'
                },
                {
                    name: 's3', 
                    diff: 'Extra Hard', 
                    clue: "Richmond Vampire lives here.",
                    img: '/Singleton_Center_Raymond_Hodges_Theatre.png'
                },
                {
                    name: 's4', 
                    diff: 'Medium', 
                    clue: "Two dollar pizza with drunk people!",
                    img: '/Singleton_Center_Raymond_Hodges_Theatre.png'
                } 
];

$.each(allObj, function(i, v) {
    (function (v) {
        $("#" + v.name).click(() => {
            chosenObj = v.name;
	        $('#difficulty').text(v.diff); 
	        $('#clue').text(v.clue); 
	        $('#mapClue').attr("src", v.img).width("100%"); 
        }); 
    })(v);  
});

$('#enter-answer').on('click', () => {
    let answer = $('#answer-box').val();    

    if(chosenObj === 's2' && answer === 'scuffletown park'){
        $('#isCorrect').text('Correct!');
    }else{
        $('#isCorrect').text('Nope, not quite!');
    }
});
