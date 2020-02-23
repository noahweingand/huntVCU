var chosenObj = undefined; 

$('#s1').on('click', () => {
    chosenObj = 's1';
    $('#difficulty').text('Difficulty: Hard');
    $('#clue').text("VCUart's theatre where you can catch their latest mainstage production (Be sure to check out their next production coming this April: Spring Awakening).");
    // Answer: Raymond Hodges Theatre
    $('#mapclue').attr("src", "/Singleton_Center_Raymond_Hodges_Theatre.png").width("100%");
    $('#top-right-text').css({"font-weight" : "bold"}).text('Location Area');
}); 

$('#s2').on('click', () => {
    chosenObj = 's2';
    $('#difficulty').text('Difficulty: Hard');
    $('#clue').text('Hidden park near William Fox Elementary.');
    $('#mapclue').attr("src", "/Singleton_Center_Raymond_Hodges_Theatre.png").width("100%");
}); 

$('#s3').on('click', () => {
    chosenObj = 's3';
    $('#difficulty').text('Difficulty: Ex Hard');
    $('#clue').text('Richmond Vampire lives here.');
    $('#mapclue').attr("src", "/Singleton_Center_Raymond_Hodges_Theatre.png").width("100%");
}); 

$('#s4').on('click', () => { 
    chosenObj = 's4';
    $('#difficulty').text('Difficulty: Medium');
    $('#clue').text('Two dollar pizza with drunk people!    ');
    $('#mapclue').attr("src", "/Singleton_Center_Raymond_Hodges_Theatre.png").width("100%");
}); 

$('#enter-answer').on('click', () => {
    let answer = $('#answer-box').val();    
    console.log(answer)
    console.log(chosenObj)

    if(chosenObj === 's2' && answer === 'scuffletown park'){
        $('#isCorrect').text('Correct!');
    }else{
        $('#isCorrect').text('Nope, not quite!');
    }
});