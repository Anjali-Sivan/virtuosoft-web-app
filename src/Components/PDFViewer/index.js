import React from 'react';
import portfolio from '../../Assets/Virtuosoft-Portfolio.pdf';

const PdfViewer = () => {
  return (
    <div style={{ height: '100vh', margin: 0, padding: 0 }}>
      <iframe
        title="PDF Viewer"
        src={portfolio}
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
};

export default PdfViewer;
