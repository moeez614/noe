console.log("hello");

const input = document.getElementById("input");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {

    const text = input.value;
    const words = text.toLowerCase();
    let split = words.split("");
    console.log(split.length)
    for (let i = 0; i < split.length; i++) {
        const url = `images/${split[i]}.jpg`;
        const img = document.createElement("img");
        img.src = url;
        document.querySelector(".image").appendChild(img);
        // img.style.width = `${100 / split.length} %`;
        img.style.width = `${100/split.length}%`;

    }
    let ip = document.querySelector(".image");
    ip.style.display = "flex";
    ip.style.flexWrap = "nowrap";
});
input.addEventListener("focus",()=>{
    input.value = "";
    document.querySelector(".image").innerHTML = "";
})
document.addEventListener("keydown",(e)=>{
    if(e.key ==="Enter"){
        btn.click();
        input.focusout();
    }

})