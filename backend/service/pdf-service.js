const PDFDocument = require('pdfkit');
const moment = require("moment");
const fs = require('fs');

function buildPDF(dataCallback, endCallback,courseName,firstname,lastname) {
    const name = firstname + " " + lastname
    console.log(name)
  const doc = new PDFDocument({ bufferPages: true, font: 'Courier', layout: "landscape",
  size: "A4", });

  doc.on('data', dataCallback);
  doc.on('end', endCallback);
  
  const filedest = __dirname+'/images/certificate.png'
  const filedest2 = __dirname+'/fonts/DancingScript-VariableFont_wght.ttf'
  //console.log(filedest)
  doc.image(filedest, 0, 0, { width: 842 });

  doc.font(filedest2);



  

  
  doc.fontSize(40).text(name, 20, 295, {
    align: "center"
});

doc.fontSize(55).text(courseName,20,170,{
    align:"center"
});

// Draw the date
doc.fontSize(17).text(moment().format("MMMM Do YYYY"), -275, 430, {
    align: "center"
});

doc.fontSize(17).text("E-Learning",300,430,{
    align:"center"
});


//   doc.fontSize(20).text(courseName);

//   doc
//     .fontSize(12)
//     .text(
//      firstname,
//      lastname
//     );
    
  doc.end();
}

module.exports = { buildPDF };