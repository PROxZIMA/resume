const resumeBtn = document.getElementById('resume-btn');
const alternateBtn = document.getElementById('alternate-btn');
const external = document.getElementById('external');
const viewer = document.getElementById("viewer");
const container = document.getElementById("viewerContainer");
let totalPages = 0;


const updatePDFScale = () => {
  let width = container.clientWidth;
  let scale = width / viewer.firstChild.clientWidth;
  viewer.style.transform = `scale(${scale})`;
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));


const RESUME_URL = "https://raw.githubusercontent.com/PROxZIMA/resume/master/extras/Pratik%20Pingale's%20Resume.pdf";
const CV_URL = "https://raw.githubusercontent.com/PROxZIMA/resume/master/extras/Pratik%20Pingale's%20CV.pdf";

document.addEventListener("click", () => { external.classList.remove("focus"); });

resumeBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  external.classList.add("focus");
  e.stopPropagation();
  const url = e.currentTarget.href;

  resumeBtn.classList.add("load");

  await sleep(1000);
  resumeBtn.classList.add("done");

  await sleep(1000);
  resumeBtn.classList.remove("load", "done");

  window.open(url, '_blank');
});

let DEFAULT_URL = RESUME_URL;

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('cv') !== null) {
  DEFAULT_URL = CV_URL;
  // set new title
  document.title = "Curriculum Vitae | Pratik Pingale";
  const mainDoc = document.querySelector('#main .document');
  mainDoc.classList.add('cv');
  alternateBtn.href = location.origin + location.pathname;
  alternateBtn.innerText = "RÉS";
}
resumeBtn.href = DEFAULT_URL;

const ENABLE_XFA = true;
const eventBus = new pdfjsViewer.EventBus();

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';

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
  pdfViewer.currentScale = 2.5;
  // pdfViewer.currentScaleValue = "page-width";
});

eventBus.on("textlayerrendered", e => {
  if (e.pageNumber !== totalPages) {
    return;
  }
  updatePDFScale();

  window.addEventListener("resize", () => {
    // pdfViewer.update();
    updatePDFScale();
  });
});

const loadingTask = pdfjsLib.getDocument({
  url: DEFAULT_URL,
  enableXfa: ENABLE_XFA,
});
(async function () {
  const pdfDocument = await loadingTask.promise;
  totalPages = pdfDocument.numPages;
  pdfViewer.setDocument(pdfDocument);
  pdfLinkService.setDocument(pdfDocument, null);
})();
