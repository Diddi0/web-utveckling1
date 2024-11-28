let stars = document.getElementById("stars")

function checkStar(star) {
    console.log(stars.children)
    if (star == 1) {
        stars.children[0].classList.add("checked")
        stars.children[1].classList.remove("checked")
        stars.children[2].classList.remove("checked")
        stars.children[3].classList.remove("checked")
        stars.children[4].classList.remove("checked")
    }
    else if (star == 2) {
        stars.children[0].classList.add("checked")
        stars.children[1].classList.add("checked")
        stars.children[2].classList.remove("checked")
        stars.children[3].classList.remove("checked")
        stars.children[4].classList.remove("checked")
    } else if (star == 3) {
        stars.children[0].classList.add("checked")
        stars.children[1].classList.add("checked")
        stars.children[2].classList.add("checked")
        stars.children[3].classList.remove("checked")
        stars.children[4].classList.remove("checked")
    } else if (star == 4) {
        stars.children[0].classList.add("checked")
        stars.children[1].classList.add("checked")
        stars.children[2].classList.add("checked")
        stars.children[3].classList.add("checked")
        stars.children[4].classList.remove("checked")
    } else if (star == 5) {
        stars.children[0].classList.add("checked")
        stars.children[1].classList.add("checked")
        stars.children[2].classList.add("checked")
        stars.children[3].classList.add("checked")
        stars.children[4].classList.add("checked")
    }
}