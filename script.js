let slideIndex = 1;

const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".section-indicators button");

const showSlide = (num) => {
	num > slides.length ? (slideIndex = 1) : undefined;
	num < 1 ? (slideIndex = slides.length) : undefined;

	for (const wrap of slides) {
		wrap.classList.remove("active");
	}
	for (const indicator of indicators) {
		indicator.classList.remove("active");
	}

	slides[slideIndex - 1].classList.add("active");
	indicators[slideIndex - 1].classList.add("active");
};

showSlide(slideIndex);

const btnNext = document.getElementById("btnNext");

btnNext.addEventListener("click", () => {
	slideIndex += 1;
	showSlide(slideIndex);
});

const btnPrevious = document.getElementById("btnPrevius");

btnPrevious.addEventListener("click", () => {
	slideIndex -= 1;
	showSlide(slideIndex);
});

for (const indicator of indicators) {
	indicator.addEventListener("click", () => {
		const index = indicator.getAttribute("data-slide");

		indicator.classList.remove("active");
		slideIndex = index;
		showSlide(slideIndex);
	});
}

// setInterval(() => {
// 	slideIndex += 1;
// 	showSlide(slideIndex);
// }, 5000);
