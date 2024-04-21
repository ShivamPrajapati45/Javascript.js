let value = document.getElementById("value");

const numberClick = (val) => {
  if (value.textContent == 0 || value.textContent === "") {
    value.textContent = "";
  }
  value.textContent += val;
};

const clear = () => {
  value.textContent = "0";
};

const del = () => {
  value.textContent = value.textContent.slice(0, -1);
  if (value.textContent == "") {
    value.textContent = "0";
  }
};

const calculate = () => {
  value.textContent = eval(value.textContent);
};

document.getElementById("clear").addEventListener("click", clear);
document.getElementById("delete").addEventListener("click", del);
document.getElementById("calculate").addEventListener("click", calculate);

let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

form.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key == "Enter") {
    e.preventDefault();
    calculate();
  }
});
