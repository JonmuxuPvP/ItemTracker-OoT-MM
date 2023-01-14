
class Item {
	constructor(path) {
		this.path = path;
		this.checked = false;

		this.image = this.createImage();

		this.setEvent();
		this.display();
	}

	createImage() {
		const image = document.createElement("img");	

		image.src = this.path;
		image.classList.add("checked");

		return image;
	}
	
	setEvent() {
		this.image.addEventListener("click", () => {
			if (!this.checked) {
				this.image.classList.remove("checked");
			} else {
				this.image.classList.add("checked");
			}
			this.checked = !this.checked;
		});
	}

	display() {
		document.body.append(this.image);	
	}
}

const mask = new Item("./assets/majoras-mask/heros-bow.png");


