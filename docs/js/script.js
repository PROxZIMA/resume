const resumeBtn = document.getElementById('resume-btn');
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

resumeBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const url = e.currentTarget.href;

  resumeBtn.classList.add("load");

  await sleep(1000);
  resumeBtn.classList.add("done");

  await sleep(1000);
  resumeBtn.classList.remove("load", "done");

  window.open(url, '_blank');
});

let DEFAULT_URL = "https://raw.githubusercontent.com/PROxZIMA/resume/master/extras/Pratik%20Pingale's%20Resume.pdf";

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('cv') !== null) {
  DEFAULT_URL = "https://raw.githubusercontent.com/PROxZIMA/resume/master/extras/Pratik%20Pingale's%20CV.pdf";
  const mainDoc = document.querySelector('#main .document');
  mainDoc.classList.add('cv');
}
resumeBtn.href = DEFAULT_URL;

const ENABLE_XFA = true;
const container = document.getElementById("viewerContainer");
const eventBus = new pdfjsViewer.EventBus();

const pdfLinkService = new pdfjsViewer.PDFLinkService({
  eventBus,
  externalLinkTarget: 2
});

const pdfViewer = new pdfjsViewer.PDFViewer({
  container,
  eventBus,
  removePageBorders: true,
  linkService: pdfLinkService,
});

pdfLinkService.setViewer(pdfViewer);

eventBus.on("pagesinit", function () {
  pdfViewer.currentScaleValue = "page-width";
});

const loadingTask = pdfjsLib.getDocument({
  url: DEFAULT_URL,
  enableXfa: ENABLE_XFA,
});
(async function () {
  const pdfDocument = await loadingTask.promise;
  pdfViewer.setDocument(pdfDocument);
  pdfLinkService.setDocument(pdfDocument, null);
})();
