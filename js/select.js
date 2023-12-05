function setupDropdown(selectField, selectText, arrowIcon, list, options) {
  selectField.onclick = function () {
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
  };

  for (option of options) {
    option.onclick = function () {
      selectText.innerHTML = this.textContent;
      list.classList.toggle("hide");
      arrowIcon.classList.toggle("rotate");
    };
  }
}

const dropdown1 = {
  selectField: document.getElementById("selectField"),
  selectText: document.getElementById("selectText"),
  arrowIcon: document.getElementById("arrowIcon"),
  list: document.getElementById("list"),
  options: document.getElementsByClassName("options"),
};

const dropdown2 = {
  selectField: document.getElementById("selectField2"),
  selectText: document.getElementById("selectText2"),
  arrowIcon: document.getElementById("arrowIcon2"),
  list: document.getElementById("list2"),
  options: document.getElementsByClassName("options2"),
};

const dropdown3 = {
  selectField: document.getElementById("selectField3"),
  selectText: document.getElementById("selectText3"),
  arrowIcon: document.getElementById("arrowIcon3"),
  list: document.getElementById("list3"),
  options: document.getElementsByClassName("options3"),
};
const dropdown4 = {
  selectField: document.getElementById("selectField0"),
  selectText: document.getElementById("selectText0"),
  arrowIcon: document.getElementById("arrowIcon0"),
  list: document.getElementById("list0"),
  options: document.getElementsByClassName("options0"),
};

setupDropdown(dropdown1.selectField, dropdown1.selectText, dropdown1.arrowIcon, dropdown1.list, dropdown1.options);
setupDropdown(dropdown2.selectField, dropdown2.selectText, dropdown2.arrowIcon, dropdown2.list, dropdown2.options);
setupDropdown(dropdown3.selectField, dropdown3.selectText, dropdown3.arrowIcon, dropdown3.list, dropdown3.options);
setupDropdown(dropdown4.selectField, dropdown4.selectText, dropdown4.arrowIcon, dropdown4.list, dropdown4.options);
