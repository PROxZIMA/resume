const LOCAL_DOMAINS = ["127.0.0.1", "0.0.0.0", "localhost"];
const resumeBtn = document.getElementById('resume-btn');
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

resumeBtn.addEventListener("click", async (e) => {
  let isLocalServer = false;
  if (LOCAL_DOMAINS.includes(location.hostname)) {
    isLocalServer = true;
    e.preventDefault();
  }

  resumeBtn.classList.add("load");

  await sleep(1000);
  resumeBtn.classList.add("done");

  await sleep(1000);
  if (isLocalServer) {
    document.title = "Pratik Pingale's Resume";
    window.print();
    document.title = "Resume - Pratik Pingale";
  }

  await sleep(500);
  resumeBtn.classList.remove("load", "done");
});
