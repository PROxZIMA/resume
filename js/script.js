const LOCAL_DOMAINS = ["localhost", "127.0.0.1", ""];
const resumeBtn = document.getElementById('resume-btn');
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

resumeBtn.addEventListener("click", async () => {
  resumeBtn.classList.add("load");

  await sleep(1000);
  resumeBtn.classList.add("done");

  await sleep(1000);
  if (LOCAL_DOMAINS.includes(location.hostname)) {
    document.title = "Pratik Pingale's Resume";
    window.print();
    document.title = "Resume - Pratik Pingale";
  } else {
    window.location.assign("./extras/Pratik Pingale's Resume.pdf");
  }

  await sleep(500);
  resumeBtn.classList.remove("load", "done");
});
