const { PDFDocument } = PDFLib;

const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const processingOverlay = document.getElementById('processing-overlay');
const statusText = document.getElementById('status-text');
const progressBar = document.getElementById('progress-bar');
const resultsZone = document.getElementById('results-zone');
const downloadBtn = document.getElementById('download-btn');
const resetBtn = document.getElementById('reset-btn');
const fileInfo = document.getElementById('file-info');

let processedPdfBytes = null;
let originalFileName = '';

// Event Listeners
dropZone.addEventListener('click', () => fileInput.click());

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('drag-over');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('drag-over');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type === 'application/pdf') {
        handleFile(files[0]);
    }
});

fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        handleFile(e.target.files[0]);
    }
});

resetBtn.addEventListener('click', () => {
    resultsZone.classList.add('hidden');
    dropZone.classList.remove('hidden', 'processing');
    fileInput.value = '';
    progressBar.style.width = '0%';
});

async function handleFile(file) {
    originalFileName = file.name.replace(/\.pdf$/i, '');
    dropZone.classList.add('processing');
    updateStatus('Reading PDF...', 10);

    try {
        const arrayBuffer = await file.arrayBuffer();
        await splitPdf(arrayBuffer);
    } catch (error) {
        console.error('Error processing PDF:', error);
        alert('Error processing PDF. Please make sure it is a valid file.');
        dropZone.classList.remove('processing');
    }
}

async function splitPdf(pdfBuffer) {
    updateStatus('Parsing PDF...', 30);
    const pdfDoc = await PDFDocument.load(pdfBuffer);
    const newPdfDoc = await PDFDocument.create();
    
    const pages = pdfDoc.getPages();
    const totalPages = pages.length;

    for (let i = 0; i < totalPages; i++) {
        const page = pages[i];
        const { width, height } = page.getSize();
        
        updateStatus(`Splitting page ${i + 1} of ${totalPages}...`, 30 + (i / totalPages) * 50);

        // Copy page twice
        const [leftPage, rightPage] = await newPdfDoc.copyPages(pdfDoc, [i, i]);
        
        // Define cropping boxes
        // Origin is bottom-left
        leftPage.setCropBox(0, 0, width / 2, height);
        rightPage.setCropBox(width / 2, 0, width / 2, height);

        newPdfDoc.addPage(leftPage);
        newPdfDoc.addPage(rightPage);
    }

    updateStatus('Finalizing...', 90);
    processedPdfBytes = await newPdfDoc.save();
    
    updateStatus('Done!', 100);
    setTimeout(showResults, 500);
}

function updateStatus(text, progress) {
    statusText.innerText = text;
    progressBar.style.width = `${progress}%`;
}

function showResults() {
    dropZone.classList.add('hidden');
    resultsZone.classList.remove('hidden');
    fileInfo.innerText = `Processed: ${originalFileName}_split.pdf`;
}

downloadBtn.addEventListener('click', () => {
    if (!processedPdfBytes) return;

    const blob = new Blob([processedPdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${originalFileName}_split.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});
