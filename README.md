# SplitPDF (v1.0.0)

SplitPDF is a modern, premium web application that allows users to upload a landscape PDF and split each page down the middle into two portrait pages. This is particularly useful for scanned books or documents where two pages are captured in a single landscape frame.

## Features
- **Modern Premium UI**: A dark-mode design with glassmorphism, gradients, and smooth animations.
- **Client-Side Processing**: Uses `pdf-lib` to process files entirely in the browser for maximum privacy and speed.
- **Drag & Drop**: An intuitive upload zone with visual feedback.
- **Progress Tracking**: Real-time status updates and a progress bar during PDF manipulation.
- **Zero Privacy Risk**: No files are uploaded to any server; all processing happens locally in your browser.

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
1. Open the SplitPDF web app.
2. Drag and drop your landscape PDF into the dashed drop zone or click to select a file.
3. The app will process each page and notify you when ready.
4. Click the **Download PDF** button to save the new portrait-oriented PDF.

## License
MIT License - Copyright (c) 2025 SplitPDF

## Contact
For any issues or suggestions, please open an issue on the GitHub repository.
