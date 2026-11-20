const buttons = Array.from(document.getElementById("tabs").children[0].children, (value) => value.children[0]);
const sections = document.getElementsByClassName("section");
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function (e) {
		for (let j = 0; j < sections.length; j++) {
			sections[j].setAttribute("hidden", "");
		}
		for (let j = 0; j < buttons.length; j++) {
			buttons[j].removeAttribute("selected");
		}
		sections[this.id].removeAttribute("hidden");
		this.setAttribute("selected", "");
	});
}

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("mouseenter", function (e) {
		this.setAttribute("hovered", "");
	})
}

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("mouseleave", function (e) {
		this.removeAttribute("hovered");
	})
}