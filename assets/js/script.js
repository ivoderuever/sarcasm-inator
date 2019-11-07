function toggleHidden() {
    $("#word").val("");
    $("#input").toggleClass('hidden');
    $("#result").toggleClass('hidden');
}

var endword;

$(document).ready(function () {
    $("#process").click(function () {
        var word = $("#word").val().toLowerCase();

        if (word == "") {
        } else {
            var letters = word.split("");

            var randomizeLenght = (letters.length / 2);

            var minimum = 0;
            var maximum = (letters.length - 1);

            for (var i = 0; i <= randomizeLenght; i++) {
                var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1) << 0) + minimum;
                
                letters[randomnumber] = "" + letters[randomnumber].toUpperCase();
            }

            $("#endword").text(letters.join(""));
            toggleHidden();

            endword = letters.join("");
        }
    })

    $("#tryAgain").click(function () {
        toggleHidden();
    })

    var clipboard2 = new ClipboardJS('#endword', {
        text: function () {
            return endword;
        }
    });
    
    clipboard2.on('success', function (e) {
        $('#endword').addClass('symbol');

        setTimeout( function(){
            $('#endword').removeClass('symbol');
        },200);
        
        $('.message').text('Copied to clipboard!')
        $('.messagebox').toggleClass('messagebox-open');

        setTimeout(function () {
            $('.messagebox').toggleClass('messagebox-open');
        }, 700);
    });
})