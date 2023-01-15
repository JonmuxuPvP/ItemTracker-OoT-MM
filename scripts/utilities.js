class Item {
	constructor(path, checked) {
		this.path = path;
		this.checked = checked;

		this.image = this.createImage();

		this.setEvent();
		this.display();
	}

	createImage() {
		const image = document.createElement("img");	

		image.src = this.path;
		image.classList.add("item");

		if (!this.checked) {
			image.classList.add("unchecked");
		}
		
		return image;
	}
	
	setEvent() {
		this.image.addEventListener("click", (e) => {
			if (!this.checked) {
				this.image.classList.remove("unchecked");
			} else {
				this.image.classList.add("unchecked");
			}
			this.checked = !this.checked;
		});
	}

	setPosition(x, y) {
		this.image.style.left = x;
		this.image.style.top = y;
	}

	display() {
		document.body.append(this.image);	
	}
}

class MultipleItem extends Item {
	constructor(paths) {
		super(paths[0]);

		this.paths = paths;
		this.currentItem = 0;
		this.maxItems = paths.length;
	}

	setEvent() {
		this.image.addEventListener("click", (e) => {
			if (this.checked) {
				this.currentItem++;
				if (this.currentItem >= this.maxItems) {
					this.image.classList.add("unchecked");
					this.checked = false;
					this.currentItem = 0;
				}
				this.image.src = this.paths[this.currentItem];	
			} else {
				this.checked = true;
				this.image.classList.remove("unchecked");
			}
		});
	}
}


class Inventory {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.offset = 44;
	}

	setItem(item, slot) {
		let x, y;

		if (slot == 1) {
			x = this.x;
			y = this.y;
		} else {
			if (slot >= 2 && slot <= 6) {
				x = this.x + (this.offset * (slot - 1));
				y = this.y;
			} else if (slot >= 7 && slot <= 12) {
				x = this.x + (this.offset * ((slot - 6) - 1));
				y = this.y + this.offset;
			} else if (slot >= 13 && slot <= 18) {
				x = this.x + (this.offset * ((slot - 12) - 1));
				y = this.y + (this.offset * 2);
			} else if (slot >= 19 && slot <= 24) {
				x = this.x + (this.offset * ((slot - 18) - 1));
				y = this.y + (this.offset * 3);
			}
		}

		item.setPosition(x, y);
	}
}

class OcarinaEquipment {
	constructor() {
		this.firstSlotX = 17;
		this.firstSlotY = 24;
		this.verticalOffset = 39;

		this.sixthSlotX = 165;
		this.sixthSlotY = 45;
		this.equipmentOffsetX = 47;
		this.equipmentOffsetY = 41;
	}
	
	setItem(item, slot) {
		let x, y;

		if (slot >= 1 && slot <= 5) {
			x = this.firstSlotX;
			y = this.firstSlotY + (this.verticalOffset * (slot - 1));
		}

		if (slot == 6) {
			x = this.sixthSlotX;
			y = this.sixthSlotY;
		} else if (slot == 7 || slot == 8) {
			x = this.sixthSlotX + (this.equipmentOffsetX * (slot - 6));
			y = this.sixthSlotY;
		} else if (slot >= 9 && slot <= 11) {
			x = this.sixthSlotX + (this.equipmentOffsetX * (slot - 9));
			y = this.sixthSlotY + (this.equipmentOffsetY);
		} else if (slot >= 12 && slot <= 14) {
			x = this.sixthSlotX + (this.equipmentOffsetX * (slot - 12));
			y = this.sixthSlotY + (this.equipmentOffsetY * 2);
		} else if (slot >= 15 && slot <= 17) {
			x = this.sixthSlotX + (this.equipmentOffsetX * (slot - 15));
			y = this.sixthSlotY + (this.equipmentOffsetY * 3);
		} 

		item.setPosition(x, y);
	}

}

class Songs {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.offsetX = 25;
		this.offsetY = 15;
	}

	setItem(item, slot) {
		let x, y;

		if (slot == 1) {
			x = this.x;
			y = this.y;
		} else if (slot >= 2 && slot <= 6) {
			x = this.x + (this.offsetX * (slot - 1));
			y = this.y;
		} else if (slot >= 7 && slot <= 12) {
			x = this.x + (this.offsetX * (slot - 7));
			y = this.y + this.offsetY * 2;
		} 

		item.setPosition(x, y);
	}
}

export { Item, MultipleItem, Inventory, OcarinaEquipment, Songs }
