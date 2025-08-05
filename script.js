const downloadBtn = document.querySelector(".download-btn");
        const progress = document.querySelector(".progress");
        const percentage = document.querySelector("#percentage");
        let second = 10;
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
                }
            }, (second * 1000) / 100); // how to second to take the downloading 
        });