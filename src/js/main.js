const openBurger = document.querySelector(".fa-bars")
const closeBurger = document.querySelector(".fa-x")
const burgerBtn = document.querySelector(".nav__burger")
const navLinks = document.querySelectorAll(".nav__link")
const boxLinks = document.querySelector(".nav__box")
const footerYear = document.querySelector(".footer__year")

const handleBurger = () => {
	openBurger.classList.toggle("hide")
	closeBurger.classList.toggle("hide")
	boxLinks.classList.toggle("active")
}

const handleYear = () => {
	const currentYear = new Date()
	footerYear.textContent = currentYear.getFullYear()
}

handleYear()

burgerBtn.addEventListener("click", handleBurger)

navLinks.forEach(link => link.addEventListener("click", handleBurger))
