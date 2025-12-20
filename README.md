# PDFSplitter (v1.3.0)

![Version](https://img.shields.io/badge/version-v1.3.0-blue)
![Status](https://img.shields.io/badge/status-active-success)
![Live Demo](https://img.shields.io/badge/live-demo-orange?link=https://kuancheen.github.io/pdf-splitter/)
![License](https://img.shields.io/badge/license-MIT-green)
![Semantic Versioning](https://img.shields.io/badge/semver-2.0.0-blue)
![Views](https://hits.sh/kuancheen.github.io/pdf-splitter.svg?view=today-total&style=for-the-badge&label=👁️%20Views&extraCount=0&color=6366f1)

**Live Demo**: [https://kuancheen.github.io/pdf-splitter/](https://kuancheen.github.io/pdf-splitter/)

PDFSplitter is a modern, premium web application that allows users to upload a landscape PDF and split each page down the middle into two portrait pages. This is particularly useful for scanned books or documents where two pages are captured in a single landscape frame.

## Features
- **Modern Premium UI**: A dark-mode design with glassmorphism, gradients, and smooth animations.
- **Custom Branding**: Stylized favicon with indigo-to-pink gradient displayed in browser tab and header.
- **Client-Side Processing**: Uses `pdf-lib` to process files entirely in the browser for maximum privacy and speed.
- **Drag & Drop**: An intuitive upload zone with visual feedback.
- **Progress Tracking**: Real-time status updates and a progress bar during PDF manipulation.
- **Zero Privacy Risk**: No files are uploaded to any server; all processing happens locally in your browser.
- **Enhanced Footer**: Quick access to documentation via MD Viewer integration and view tracking.

## Tech Stack
- **HTML5 / CSS3**: Vanilla implementation for structure and styling.
- **JavaScript**: Core logic for file handling and UI interactions.
- **pdf-lib**: Powerful PDF manipulation library (Integrated via CDN).

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd ethereal-nadir
   ```

2. **Serve the application**:
   Since it's a vanilla web app, you can serve it using any local server. For example, using Python:
   ```bash
   python3 -m http.server 8000
   ```

3. **Open in browser**:
   Navigate to `http://localhost:8000` to start splitting your PDFs.

## Usage
1. Open the PDFSplitter web app.
2. Drag and drop your landscape PDF into the dashed drop zone or click to select a file.
3. The app will process each page and notify you when ready.
4. Click the **Download PDF** button to save the new portrait-oriented PDF.

## License
MIT License - Copyright (c) 2025 PDFSplitter

## Contact
For any issues or suggestions, please open an issue on the GitHub repository.
