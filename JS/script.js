const form = document.getElementById("submit");
const date = document.getElementById("date");
const local = document.getElementById("local");
let dateValue = "";
const dateHandler = () => {
  dateValue = date.value;
};
date.addEventListener("change", dateHandler);
const handleSubmit = (e) => {
  e.preventDefault();
  if (!dateValue) {
    alert("Select a Date");
  } else {
    localDate = new Date(dateValue).toLocaleString();
    console.log(localDate.split(", ").join("-"));
    console.log(localDate);
    local.innerText = localDate.toString();
  }
};

form.addEventListener("click", handleSubmit);
