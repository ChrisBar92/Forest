const openBurger = document.querySelector(".fa-bars")
const closeBurger = document.querySelector(".fa-x")
const burgerBtn = document.querySelector(".nav__burger")
const navLinks = document.querySelectorAll(".nav__link")
const boxLinks = document.querySelector(".nav__box")
const footerYear = document.querySelector(".footer__year")
const submitBtn = document.querySelector(".contact__btn")
const allInputs = document.querySelectorAll(".contact__input")
const textarea = document.querySelector(".contact__textarea")
const allSections = document.querySelectorAll(".section")
let id = ""

document.addEventListener("DOMContentLoaded", () => {
	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					id = entry.target.id
					navLinks.forEach(link => {
						link.classList.remove("active")
						boxLinks.querySelector(`[data-section="${id}"]`).classList.add("active")
					})
				}
			})
		},
		{ rootMargin: "-20% 0px -40% 0px" }
	)
	allSections.forEach(section => {
		observer.observe(section)
	})
})

const handleBurger = () => {
	openBurger.classList.toggle("hide")
	closeBurger.classList.toggle("hide")
	boxLinks.classList.toggle("show-nav")
	boxLinks.classList.contains("show-nav")
		? document.body.classList.add("block-scrolling")
		: document.body.classList.remove("block-scrolling")
}

const handleLinks = () => {
	openBurger.classList.toggle("hide")
	closeBurger.classList.toggle("hide")
	boxLinks.classList.remove("show-nav")
	document.body.classList.remove("block-scrolling")
}

const handleCurrentYear = () => {
	const currentYear = new Date().getFullYear()
	footerYear.textContent = currentYear
}

const sendForm = e => {
	e.preventDefault()
	allInputs.forEach(input => (input.value = ""))
	textarea.value = ""
}

handleCurrentYear()

burgerBtn.addEventListener("click", handleBurger)
navLinks.forEach(link => link.addEventListener("click", handleLinks))

if (document.body.classList.contains("contact-page")) {
	boxLinks.querySelector(`[data-section="contact"]`).classList.add("active")
	submitBtn.addEventListener("click", sendForm)
}
