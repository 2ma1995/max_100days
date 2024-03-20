// console.log(window.document);
// console.dir(window.document); //더자세하게 나옴

// document.body.children[1].children[0].href = "https://google.com";

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("#external-id");
anchorElement.href = "https://naver.com";
