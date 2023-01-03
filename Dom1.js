

function generate_random() {

    heading = document.querySelector("h1")

    // player 1

    let k1 = Math.floor(Math.random() * 6 + 1)
    die1 = document.getElementsByClassName("nums")
    console.log(k1)
    for (let i = 0; i < 9; i++) {
        if (k1 == 1 && i != 4) {
            die1[i].style.backgroundColor = "brown"
        }
        else if (k1 == 2 && (i != 2 && i != 6)) {
            die1[i].style.backgroundColor = "brown"
        }
        else if (k1 == 3 && (i != 2 && i != 4 && i != 6)) {
            die1[i].style.backgroundColor = "brown"
        }
        else if (k1 == 4 && (i != 0 && i != 2 && i != 6 && i != 8)) {
            die1[i].style.backgroundColor = "brown"
        }
        else if (k1 == 5 && i % 2 != 0) {
            die1[i].style.backgroundColor = "brown"
        }
        else if (k1 == 6) {
            die1[1].style.backgroundColor = "brown"
            die1[4].style.backgroundColor = "brown"
            die1[7].style.backgroundColor = "brown"
        }
    }


    //    player 2


    let k2 = Math.floor(Math.random() * 6 + 1)
    die2 = document.getElementsByClassName("num")
    console.log(k2)
    for (let i = 0; i < 9; i++) {
        if (k2 == 1 && i != 4) {
            die2[i].style.backgroundColor = "brown"
        }
        else if (k2 == 2 && (i != 2 && i != 6)) {
            die2[i].style.backgroundColor = "brown"
        }
        else if (k2 == 3 && (i != 2 && i != 4 && i != 6)) {
            die2[i].style.backgroundColor = "brown"
        }
        else if (k2 == 4 && (i != 0 && i != 2 && i != 6 && i != 8)) {
            die2[i].style.backgroundColor = "brown"
        }
        else if (k2 == 5 && i % 2 != 0) {
            die2[i].style.backgroundColor = "brown"
        }
        else if (k2 == 6) {
            die2[1].style.backgroundColor = "brown"
            die2[4].style.backgroundColor = "brown"
            die2[7].style.backgroundColor = "brown"
        }
    }

    if (k1 == k2) {
        heading.textContent = "Draw !"
    }
    else if (k1 > k2) {
        heading.textContent = "Player1  Wins !"
    }
    else {
        heading.textContent = "Player2  Wins !"
    }
}

document.querySelector(".btn").addEventListener('click', () => {
    
    window.location.reload()
})

window.onload = generate_random()
