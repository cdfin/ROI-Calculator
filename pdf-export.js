/* pdf-export.js  –  Best Lawyers ROI Calculator
   Generates high-quality, selectable-text PDFs using html2pdf.js
   No changes inside index.html other than <script> tag at the bottom.
*/

(function () {
  // ----- 1. inject print / PDF-specific CSS once -----
  const style = document.createElement('style');
  style.textContent = `
  @media print {
    body { background:#fff !important; }
    .container { box-shadow:none !important; border:none !important; }
    .header { background:#d8252a !important; color:#fff !important; }
    .result-card, .projection-card, .benchmark-card {
      box-shadow:none !important; border:1px solid #ccc !important;
    }
    .page-break { page-break-before:always; }
  }`;
  document.head.appendChild(style);

  // ----- 2. full-pro PDF routine -----
  window.exportToPDF = function () {
    const element = document.getElementById('calculator-content');

    const opt = {
      margin:      10,
      filename:    'Best-Lawyers-ROI-Analysis.pdf',
      html2canvas: { scale: 2, scrollY: 0 },
      jsPDF:       { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak:   { mode: 'css', before: '.page-break' }
    };

    html2pdf().set(opt).from(element).save();
  };
})();
