const downloadBtn = document.querySelector(".download-btn");
const progress = document.querySelector(".progress");
const percentage = document.querySelector("#percentage");
const filePath = "myfile.pdf";
let second = 3;
downloadBtn.addEventListener("click", () => {
  // Disable the button immediately to prevent multiple clicks
  downloadBtn.setAttribute("disabled", true);
  downloadBtn.textContent = "Downloading...";
  let count = 0;
  let download = setInterval(() => {
    if (count <= 100) {
      progress.style.width = `${count}%`;
      percentage.textContent = `${count}%`;
      count++;
    } else {
      clearInterval(download);
      downloadBtn.textContent = "Download Completed";
      const a = document.createElement("a");
      a.href = filePath;
      a.download = filePath.split("/").pop(); // use file name from path
    //   document.body.appendChild(a);
      a.click();
      a.remove();
    }
  }, (second * 1000) / 100); // how to second to take the downloading
});
