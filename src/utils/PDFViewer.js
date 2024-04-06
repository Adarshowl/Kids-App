import React, {useEffect} from 'react';
import RNFS from 'react-native-fs';
import WebView from 'react-native-webview';
import {ShowConsoleLogMessage} from './Utility';

const PDFViewer = url => {
  useEffect(() => {
    // Download the PDF file from the provided URL
    const downloadFile = async () => {
      const pdfPath = `${RNFS.DocumentDirectoryPath}/pdf.pdf`;

      try {
        const res = await RNFS.downloadFile({
          fromUrl: url.url,
          toFile: pdfPath,
        });
        ShowConsoleLogMessage('url > ' + JSON.stringify(res));

        if (res.statusCode === 200) {
          // File downloaded successfully, load the WebView
          console.log('PDF downloaded successfully');
        } else {
          console.log('PDF download failed');
        }
      } catch (error) {
        console.log('PDF download error:', error);
      }
    };

    downloadFile();
  }, [url]);

  return (
    <WebView source={{uri: `file://${RNFS.DocumentDirectoryPath}/pdf.pdf`}} />
  );
};

export default PDFViewer;
