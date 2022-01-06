

    setTimeout(function () { alert('welcome to my tik tac toe game : '); }, 1000);
    let i = 0;

    function check() {
        //alert('checked');
        var b1, b2, b3, b4, b5, b6, b7, b8, b9;
        b1 = document.getElementById("box1").innerHTML;
        b2 = document.getElementById("box2").innerHTML;
        b3 = document.getElementById("box3").innerHTML;
        b4 = document.getElementById("box4").innerHTML;
        b5 = document.getElementById("box5").innerHTML;
        b6 = document.getElementById("box6").innerHTML;
        b7 = document.getElementById("box7").innerHTML;
        b8 = document.getElementById("box8").innerHTML;
        b9 = document.getElementById("box9").innerHTML;

        if ((b1 === 'x' || b1 === 'X') && (b2 === 'x' || b2 === 'X') && (b3 === 'x' || b3 === 'X')) {
            alert('Player X won');
            var loc = confirm('Do you want to play again ? ');
            if (loc == true) {
                b1 = document.getElementById("box1").innerHTML = "";
                b2 = document.getElementById("box2").innerHTML = "";
                b3 = document.getElementById("box3").innerHTML = "";
                b4 = document.getElementById("box4").innerHTML = "";
                b5 = document.getElementById("box5").innerHTML = "";
                b6 = document.getElementById("box6").innerHTML = "";
                b7 = document.getElementById("box7").innerHTML = "";
                b8 = document.getElementById("box8").innerHTML = "";
                b9 = document.getElementById("box9").innerHTML = "";
            }
            else
                alert('Game finish !!!');
        }
        else if ((b1 == '0' || b1 == '0') && (b2 == '0' || b2 == '0') && (b3 == '0' || b3 == '0')) {
            alert('Player 0 won');
            var loc = confirm('Do you want to play again ? ');
            if (loc == true) {
                b1 = document.getElementById("box1").innerHTML = "";
                b2 = document.getElementById("box2").innerHTML = "";
                b3 = document.getElementById("box3").innerHTML = "";
                b4 = document.getElementById("box4").innerHTML = "";
                b5 = document.getElementById("box5").innerHTML = "";
                b6 = document.getElementById("box6").innerHTML = "";
                b7 = document.getElementById("box7").innerHTML = "";
                b8 = document.getElementById("box8").innerHTML = "";
                b9 = document.getElementById("box9").innerHTML = "";
            }
            else
                alert('Game finish !!!');
        }

        else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' || b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
            window.alert('Player X won');
            var loc = confirm('Do you want to play again ? ');
            if (loc == true) {
                b1 = document.getElementById("box1").innerHTML = "";
                b2 = document.getElementById("box2").innerHTML = "";
                b3 = document.getElementById("box3").innerHTML = "";
                b4 = document.getElementById("box4").innerHTML = "";
                b5 = document.getElementById("box5").innerHTML = "";
                b6 = document.getElementById("box6").innerHTML = "";
                b7 = document.getElementById("box7").innerHTML = "";
                b8 = document.getElementById("box8").innerHTML = "";
                b9 = document.getElementById("box9").innerHTML = "";
            }
            else
                alert('Game finish !!!');
        }
        else if ((b1 == '0' || b1 == '0') && (b4 == '0' || b4 == '0') && (b7 == '0' || b7 == '0')) {
            window.alert('Player 0 won');
            var loc = confirm('Do you want to play again ? ');
            if (loc == true) {
                b1 = document.getElementById("box1").innerHTML = "";
                b2 = document.getElementById("box2").innerHTML = "";
                b3 = document.getElementById("box3").innerHTML = "";
                b4 = document.getElementById("box4").innerHTML = "";
                b5 = document.getElementById("box5").innerHTML = "";
                b6 = document.getElementById("box6").innerHTML = "";
                b7 = document.getElementById("box7").innerHTML = "";
                b8 = document.getElementById("box8").innerHTML = "";
                b9 = document.getElementById("box9").innerHTML = "";
            }
            else
                alert('Game finish !!!');
        }

        else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
            window.alert('Player X won');
            var loc = confirm('Do you want to play again ? ');
            if (loc == true) {
                b1 = document.getElementById("box1").innerHTML = "";
                b2 = document.getElementById("box2").innerHTML = "";
                b3 = document.getElementById("box3").innerHTML = "";
                b4 = document.getElementById("box4").innerHTML = "";
                b5 = document.getElementById("box5").innerHTML = "";
                b6 = document.getElementById("box6").innerHTML = "";
                b7 = document.getElementById("box7").innerHTML = "";
                b8 = document.getElementById("box8").innerHTML = "";
                b9 = document.getElementById("box9").innerHTML = "";
            }
            else
                alert('Game finish !!!');
        }
        else if ((b7 == '0' || b7 == '0') && (b8 == '0' || b8 == '0') && (b9 == '0' || b9 == '0')) {
            window.alert('Player 0 won');
            var loc = confirm('Do you want to play again ? ');
            if (loc == true) {
                b1 = document.getElementById("box1").innerHTML = "";
                b2 = document.getElementById("box2").innerHTML = "";
                b3 = document.getElementById("box3").innerHTML = "";
                b4 = document.getElementById("box4").innerHTML = "";
                b5 = document.getElementById("box5").innerHTML = "";
                b6 = document.getElementById("box6").innerHTML = "";
                b7 = document.getElementById("box7").innerHTML = "";
                b8 = document.getElementById("box8").innerHTML = "";
                b9 = document.getElementById("box9").innerHTML = "";
            }
            else
                alert('Game finish !!!');
        }

        else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
            window.alert('Player X won');
            var loc = confirm('Do you want to play again ? ');
            if (loc == true) {
                b1 = document.getElementById("box1").innerHTML = "";
                b2 = document.getElementById("box2").innerHTML = "";
                b3 = document.getElementById("box3").innerHTML = "";
                b4 = document.getElementById("box4").innerHTML = "";
                b5 = document.getElementById("box5").innerHTML = "";
                b6 = document.getElementById("box6").innerHTML = "";
                b7 = document.getElementById("box7").innerHTML = "";
                b8 = document.getElementById("box8").innerHTML = "";
                b9 = document.getElementById("box9").innerHTML = "";
            }
            else
                alert('Game finish !!!');
        }
        else if ((b3 == '0' || b3 == '0') && (b6 == '0' || b6 == '0') && (b9 == '0' || b9 == '0')) {
            window.alert('Player 0 won');
            var loc = confirm('Do you want to play again ? ');
            if (loc == true) {
                b1 = document.getElementById("box1").innerHTML = "";
                b2 = document.getElementById("box2").innerHTML = "";
                b3 = document.getElementById("box3").innerHTML = "";
                b4 = document.getElementById("box4").innerHTML = "";
                b5 = document.getElementById("box5").innerHTML = "";
                b6 = document.getElementById("box6").innerHTML = "";
                b7 = document.getElementById("box7").innerHTML = "";
                b8 = document.getElementById("box8").innerHTML = "";
                b9 = document.getElementById("box9").innerHTML = "";
            }
            else
                alert('Game finish !!!');
        }

        else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
            window.alert('Player X won');
            var loc = confirm('Do you want to play again ? ');
            if (loc == true) {
                b1 = document.getElementById("box1").innerHTML = "";
                b2 = document.getElementById("box2").innerHTML = "";
                b3 = document.getElementById("box3").innerHTML = "";
                b4 = document.getElementById("box4").innerHTML = "";
                b5 = document.getElementById("box5").innerHTML = "";
                b6 = document.getElementById("box6").innerHTML = "";
                b7 = document.getElementById("box7").innerHTML = "";
                b8 = document.getElementById("box8").innerHTML = "";
                b9 = document.getElementById("box9").innerHTML = "";
            }
            else
                alert('Game finish !!!');
        }
        else if ((b1 == '0' || b1 == '0') && (b5 == '0' || b5 == '0') && (b9 == '0' || b9 == '0')) {
            window.alert('Player 0 won');
            var loc = confirm('Do you want to play again ? ');
            if (loc == true) {
                b1 = document.getElementById("box1").innerHTML = "";
                b2 = document.getElementById("box2").innerHTML = "";
                b3 = document.getElementById("box3").innerHTML = "";
                b4 = document.getElementById("box4").innerHTML = "";
                b5 = document.getElementById("box5").innerHTML = "";
                b6 = document.getElementById("box6").innerHTML = "";
                b7 = document.getElementById("box7").innerHTML = "";
                b8 = document.getElementById("box8").innerHTML = "";
                b9 = document.getElementById("box9").innerHTML = "";
            }
            else
                alert('Game finish !!!');
        }

        else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
            window.alert('Player X won');
            var loc = confirm('Do you want to play again ? ');
            if (loc == true) {
                b1 = document.getElementById("box1").innerHTML = "";
                b2 = document.getElementById("box2").innerHTML = "";
                b3 = document.getElementById("box3").innerHTML = "";
                b4 = document.getElementById("box4").innerHTML = "";
                b5 = document.getElementById("box5").innerHTML = "";
                b6 = document.getElementById("box6").innerHTML = "";
                b7 = document.getElementById("box7").innerHTML = "";
                b8 = document.getElementById("box8").innerHTML = "";
                b9 = document.getElementById("box9").innerHTML = "";
            }
            else
                alert('Game finish !!!');
        }
        else if ((b3 == '0' || b3 == '0') && (b5 == '0' || b5 == '0') && (b7 == '0' || b7 == '0')) {
            window.alert('Player 0 won');
            var loc = confirm('Do you want to play again ? ');
            if (loc == true) {
                b1 = document.getElementById("box1").innerHTML = "";
                b2 = document.getElementById("box2").innerHTML = "";
                b3 = document.getElementById("box3").innerHTML = "";
                b4 = document.getElementById("box4").innerHTML = "";
                b5 = document.getElementById("box5").innerHTML = "";
                b6 = document.getElementById("box6").innerHTML = "";
                b7 = document.getElementById("box7").innerHTML = "";
                b8 = document.getElementById("box8").innerHTML = "";
                b9 = document.getElementById("box9").innerHTML = "";
            }
            else
                alert('Game finish !!!');
        }

        else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
            window.alert('Player X won');
            var loc = confirm('Do you want to play again ? ');
            if (loc == true) {
                b1 = document.getElementById("box1").innerHTML = "";
                b2 = document.getElementById("box2").innerHTML = "";
                b3 = document.getElementById("box3").innerHTML = "";
                b4 = document.getElementById("box4").innerHTML = "";
                b5 = document.getElementById("box5").innerHTML = "";
                b6 = document.getElementById("box6").innerHTML = "";
                b7 = document.getElementById("box7").innerHTML = "";
                b8 = document.getElementById("box8").innerHTML = "";
                b9 = document.getElementById("box9").innerHTML = "";
            }
            else
                alert('Game finish !!!');
        }
        else if ((b2 == '0' || b2 == '0') && (b5 == '0' || b5 == '0') && (b8 == '0' || b8 == '0')) {
            window.alert('Player 0 won');
            var loc = confirm('Do you want to play again ? ');
            if (loc == true) {
                b1 = document.getElementById("box1").innerHTML = "";
                b2 = document.getElementById("box2").innerHTML = "";
                b3 = document.getElementById("box3").innerHTML = "";
                b4 = document.getElementById("box4").innerHTML = "";
                b5 = document.getElementById("box5").innerHTML = "";
                b6 = document.getElementById("box6").innerHTML = "";
                b7 = document.getElementById("box7").innerHTML = "";
                b8 = document.getElementById("box8").innerHTML = "";
                b9 = document.getElementById("box9").innerHTML = "";
            }
            else
                alert('Game finish !!!');
        }

        else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
            window.alert('Player X won');
            var loc = confirm('Do you want to play again ? ');
            if (loc == true) {
                b1 = document.getElementById("box1").innerHTML = "";
                b2 = document.getElementById("box2").innerHTML = "";
                b3 = document.getElementById("box3").innerHTML = "";
                b4 = document.getElementById("box4").innerHTML = "";
                b5 = document.getElementById("box5").innerHTML = "";
                b6 = document.getElementById("box6").innerHTML = "";
                b7 = document.getElementById("box7").innerHTML = "";
                b8 = document.getElementById("box8").innerHTML = "";
                b9 = document.getElementById("box9").innerHTML = "";
            }
            else
                alert('Game finish !!!');
        }
        else if ((b4 == '0' || b4 == '0') && (b5 == '0' || b5 == '0') && (b6 == '0' || b6 == '0')) {
            window.alert('Player 0 won');
            var loc = confirm('Do you want to play again ? ');
            if (loc == true) {
                b1 = document.getElementById("box1").innerHTML = "";
                b2 = document.getElementById("box2").innerHTML = "";
                b3 = document.getElementById("box3").innerHTML = "";
                b4 = document.getElementById("box4").innerHTML = "";
                b5 = document.getElementById("box5").innerHTML = "";
                b6 = document.getElementById("box6").innerHTML = "";
                b7 = document.getElementById("box7").innerHTML = "";
                b8 = document.getElementById("box8").innerHTML = "";
                b9 = document.getElementById("box9").innerHTML = "";
            }
            else
                alert('Game finish !!!');
        }

        else if ((b1 != '') && (b2 != '') && (b3 != '') && (b4 != '') && (b5 != '') && (b6 != '') && (b7 != '') && (b8 != '') && (b9 != '')) {
            alert('Game tie !!  please restart');
            b1 = document.getElementById("box1").innerHTML = "";
            b2 = document.getElementById("box2").innerHTML = "";
            b3 = document.getElementById("box3").innerHTML = "";
            b4 = document.getElementById("box4").innerHTML = "";
            b5 = document.getElementById("box5").innerHTML = "";
            b6 = document.getElementById("box6").innerHTML = "";
            b7 = document.getElementById("box7").innerHTML = "";
            b8 = document.getElementById("box8").innerHTML = "";
            b9 = document.getElementById("box9").innerHTML = "";
        }
    }

    function reply_click(clicked_id) {
        if (i % 2 === 0) {
            document.getElementById(clicked_id).innerHTML = "X";
            i++;
        }

        else if (i % 2 != 0) {
            document.getElementById(clicked_id).innerHTML = "0";
            i++;
        }
    }