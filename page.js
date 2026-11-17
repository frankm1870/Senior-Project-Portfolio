const buttons = document.getElementById("tabs").children[0].children;
const sections = document.getElementsByClassName("section");
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function (e) {
		for (let j = 0; j < sections.length; j++) {
			sections[j].setAttribute("hidden", "");
		}
		for (let j = 0; j < buttons.length; j++) {
			buttons[j].removeAttribute("selected");
		}
		sections[this.children[0].id].removeAttribute("hidden");
		this.children[0].setAttribute("selected", "");
	});
}