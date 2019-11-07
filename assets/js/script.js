$(document).ready(function () {
    $("#process").click(function () {
        var word = $("#word").val().toLowerCase();

        if (word == "") {
        } else {
            var letters = word.split("");

            var randomizeLenght = (letters.length / 1,5);

            var minimum = 0;
            var maximum = (letters.length - 1);

            for (var i = 0; i <= randomizeLenght; i++) {
                var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1) << 0) + minimum;
                
                letters[randomnumber] = "" + letters[randomnumber].toUpperCase();
            }

            console.log(letters.join(""));
        }
    })
})