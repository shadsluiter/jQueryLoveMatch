$('document').ready(function(){

    $('#btnCompute').click(function(){
       
        var n1 = $('#txtName1').val();
        var n2 = $('#txtName2').val();

        var loveScore = calculateMatch(n1,n2)
        $('#txtMessages').html("The match is " + loveScore);
        $('#mtrLove').animate({value: loveScore});

  });


  

function calculateMatch(yourName,otherPersonName) {


    var totalLetters  = yourName.length + otherPersonName.length;
    var totalMatches = 0;

    for (var i = 0; i < yourName.length; i++) {
        for (var j = 0 ; j < otherPersonName.length; j++) {
            if (yourName[i] === otherPersonName[j]) {
                totalMatches++;
            }
        }
    }

    for (var i = 0; i < yourName.length; i++) {
        for (var j = 0 ; j < yourName.length; j++) {
            if (otherPersonName[i] === yourName[j]) {
                totalMatches++;
            }
        }
    }



    var compatScore = totalMatches /  totalLetters;

    // loveScore is between 0 and 100
    var loveScore = Math.floor(compatScore * 100);

    return loveScore; 


}



 });



