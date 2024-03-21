// console.log(window.document);
// console.dir(window.document); //더자세하게 나옴

// document.body.children[1].children[0].href = "https://google.com";

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("p a");
anchorElement.href = "https://naver.com";

// add an element
// 1.create the new element
let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://naver.com";
newAnchorElement.textContent = "This lead to naver";
// 2. get access to the parent element that should hold the new element
let firstParagraph = document.querySelector("p");
// 3.insert the new element into the parent element content
firstParagraph.append(newAnchorElement);

//remove element

//1.select the element that shoul;d be removed
let firstH1Element = document.querySelector("h1");
// 2.remove it
firstH1Element.remove();
// 다른 방법
firstH1Element.parentElement.removeChild(firstH1Element); // for the order browsers

// move elements
firstParagraph.parentElement.append(firstParagraph);
// 추가해줘야하는 장소에 부모 요소를 선택한 다음, append or insert를 사용해 이동시켜준다.
