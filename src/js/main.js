const openBurger = document.querySelector(".fa-bars")
const closeBurger = document.querySelector(".fa-x")
const burgerBtn = document.querySelector(".nav__burger")
const navLinks = document.querySelectorAll(".nav__link")
const boxLinks = document.querySelector(".nav__box")

const handleBurger = () => {
	openBurger.classList.toggle("hide")
	closeBurger.classList.toggle("hide")
		boxLinks.classList.toggle("active")
}

burgerBtn.addEventListener("click", handleBurger)

navLinks.forEach(link => link.addEventListener("click", handleBurger))
