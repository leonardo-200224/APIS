const parent = document.getElementById("parent");
console.log(parent);

const children = parent.children;
console.log(children);

const firstchild = parent.firstElementChild;
console.log(firstchild);

const lastChild = parent.lastElementChild;
console.log(lastChild)

const previousSibling = parent.previousElementSibling;
console.log(previousSibling);

const nexSibling = parent.nextElementSibling;
console.log(nexSibling);


const children2 = document.querySelector("li");
console.log(children2);

const parent2 = children2.parentNode;
console.log(parent2);

const grandParent = children2.parentElement;
console.log(grandParent);

const grandGrandParent = children2.closest("menu");
console.log(grandGrandParent);