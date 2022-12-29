let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("button clicked");

    formValidation();
});
let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "El post no puede estar vacío";
        console.log("failure");
    } else {
        console.log("successs");
        msg.innerHTML = "";
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
};
