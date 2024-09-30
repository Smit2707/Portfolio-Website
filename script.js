let main = document.querySelector(".main");
let crcr = document.querySelector(".cursor");

main.addEventListener("mousemove", (dets)=>{
    crcr.style.left = dets.clientX + window.scrollX + "px";
    crcr.style.top = dets.clientY + window.scrollY + "px";
});