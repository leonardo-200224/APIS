/* 
const listItem = document.querySelectorAll("li");

listItem.forEach((item)=>{
    item.addEventListener("click", (event)=>{
        event.target.classList.toggle("highlight");
    });
});
*/

const list = document.querySelector("ul");

list.addEventListener("click", (event) => {
    const li = event.target.closest("li")
    if (li) {
        li.classList.toggle("highlight");
    }
});