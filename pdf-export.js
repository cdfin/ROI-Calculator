/* pdf-export.js  –  vector-quality PDF via jsPDF.html() */
(function () {
  // Inject minimal print / PDF CSS once
  const style = document.createElement('style');
  style.textContent = `
  @media print {
    body { background:#fff !important; }
    .container { box-shadow:none !important; border:none !important; }
    .header { background:#d8252a !important; color:#fff !important; }
    .page-break { page-break-before:always; }
  }`;
  document.head.appendChild(style);

  // Vector export – no html2canvas
  window.exportToPDF = async function () {
    const { jsPDF } = window.jspdf;          // grabs the UMD build already on the page
    const doc = new jsPDF('p', 'mm', 'a4');

    await doc.html(document.getElementById('calculator-content'), {
      margin:       [10, 10, 15, 10],        // top, left, bottom, right
      autoPaging:   'text',                  // let jsPDF paginate
      filename:     'Best-Lawyers-ROI-Analysis.pdf',
      html2canvas:  { scale: 1 },            // used only for <canvas> charts
      callback:     (doc) => doc.save()
    });
  };
})();
