var chosenObj = undefined; 

$('#s1').on('click', () => {
    chosenObj = 's1';
    $('#difficulty').text('Difficulty: Easy');
    $('#clue').text('A monument of a famous tennis player.');
}); 

$('#s2').on('click', () => {
    chosenObj = 's2';
    $('#difficulty').text('Difficulty: Hard');
    $('#clue').text('Hidden park near William Fox Elementary.');
}); 

$('#s3').on('click', () => {
    chosenObj = 's3';
    $('#difficulty').text('Difficulty: Ex Hard');
    $('#clue').text('Richmond Vampire lives here.');
}); 

$('#s4').on('click', () => { 
    chosenObj = 's4';
    $('#difficulty').text('Difficulty: Medium');
    $('#clue').text('Two dollar pizza with drunk people!    ');
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