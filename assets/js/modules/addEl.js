"use strict"


import { calculateTotal } from "./starting.js";
const itemList = document.querySelector(".tbody");

const createItemRow = (item) => {
	const tr = document.createElement("tr");
	tr.classList.add("item");
	const id = document.createElement("td");
	id.classList.add("id");
	tr.append(id);
	const name = document.createElement("td");
	name.classList.add("name");
	tr.append(name);
	const category = document.createElement("td");
	category.classList.add("category");
	tr.append(category);
	const units = document.createElement("td");
	units.classList.add("units");
	tr.append(units);
	const amount = document.createElement("td");
	amount.classList.add("amount");
	tr.append(amount);
	const price = document.createElement("td");
	price.classList.add("price");
	tr.append(price);
	const total = document.createElement("td");
	total.classList.add("total");
	tr.append(total);
	const image1 = document.createElement("td");
	const imageIcon = document.createElement("img");
	image1.classList.add("imageIcon");
	if (item.haveImg == true) {
		imageIcon.src="assets/img/clarity_picture-line.svg";
	} else {
		imageIcon.src="assets/img/carbon_no-image.svg";
	}
	image1.append(imageIcon);
	tr.append(image1);
	const image2 = document.createElement("td");
	const editIcon = document.createElement("img");
	image2.classList.add("editIcon");
	editIcon.src="assets/img/akar-icons_edit.svg";
	image2.append(editIcon);
	tr.append(image2);
	const image3 = document.createElement("td");
	const deleteIcon = document.createElement("img");
	image3.classList.add("deleteIcon");
	deleteIcon.src="assets/img/ant-design_delete-outlined.svg";
	image3.append(deleteIcon);
	tr.append(image3);
	itemList.append(tr);
	id.textContent= item.id;
	name.textContent = item.name;
	category.textContent = item.category;
	units.textContent = item.units;
	amount.textContent = +item.amount;
	price.textContent = +item.price;
	total.textContent = item.total;
	calculateTotal();

	return tr;
};

export {createItemRow};