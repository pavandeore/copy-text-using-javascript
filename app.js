let copyBtn = document.querySelector("#copyBtn");
copyBtn.addEventListener("click", function () {
  let copyTxt = document.querySelector("#password");
  let textArea = document.createElement("textarea");
  textArea.value = copyTxt.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();

  copyBtn.innerText = "copied!";
  setTimeout(() => {
    copyBtn.innerText = "copy";
  }, 2000);
});
