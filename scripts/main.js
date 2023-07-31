console.log("Murtaza extension is up and running");

var images = document.getElementsByTagName("assets/images");

for (elt of images) {
	elt.src = `${browser.runtime.getURL("logo.png")}`;
	elt.alt = "an alt text";
}

var arr = document.getElementsByClassName("s-code-block");

for (let i = 0; i < arr.length; i++) {
	var btn = document.createElement("button");
	btn.classList.add("murtaza_code_tar");
	btn.appendChild(document.createTextNode("Murtaza"));
	arr[i].appendChild(btn);
	//styling the button
	btn.style.position = "relative";

	if (
		arr[i].scrollWidth === arr[i].offsetWidth &&
		arr[i].scrollHeight === arr[i].offsetHeight
	)
		btn.style.left = `${arr[i].offsetWidth - 70}px`;
	else if (
		arr[i].scrollWidth != arr[i].offsetWidth &&
		arr[i].scrollHeight === arr[i].offsetWidth
	)
		btn.style.left = `${arr[i].offsetWidth - 200}px`;
	else btn.style.left = `${arr[i].offsetWidth - 150}px`;

	if (arr[i].scrollHeight === arr[i].offsetHeight)
		btn.style.bottom = `${arr[i].offsetHeight - 50}px`;
	else btn.style.bottom = `${arr[i].scrollHeight - 50}px`;
	//end of styling the button

	console.log("Appended");
}

var button = document.querySelectorAll(".murtaza_code_tar");
button.forEach((elm) => {
	elm.addEventListener("click", (e) => {
		navigator.clipboard.writeText(elm.parentNode.childNodes[0].innerText);
		alert("Copied to Clipboard");
	});
});
