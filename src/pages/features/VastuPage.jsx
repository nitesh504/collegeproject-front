import { VastuPdf } from "../../assets/index";

const PDFViewer = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <iframe
        src={VastuPdf} 
        title="PDF Viewer"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
};

export default PDFViewer;
