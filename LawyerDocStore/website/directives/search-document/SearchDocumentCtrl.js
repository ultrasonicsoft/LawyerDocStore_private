'use strict';

mainApp.controller('SearchDocumentCtrl', function ($rootScope, $scope, $modal) {

    $scope.gridOptions = {
        enableFiltering: true,
        showGridFooter: true,
        enableGridMenu: true,
        enableSelectAll: true,
        exporterCsvFilename: 'myFile.csv',
        exporterPdfDefaultStyle: {fontSize: 9},
        exporterPdfTableStyle: {margin: [10, 10, 10, 10]},
        exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'red'},
        exporterPdfHeader: { text: "Lawyer Document Store", style: 'headerStyle' },
        exporterPdfFooter: function ( currentPage, pageCount ) {
            return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
        },
        exporterPdfCustomFormatter: function ( docDefinition ) {
            docDefinition.styles.headerStyle = { fontSize: 22, bold: true }; 
            docDefinition.styles.footerStyle = { fontSize: 10, bold: true }; 
            return docDefinition;
        },
        exporterPdfOrientation: 'portrait',
        exporterPdfPageSize: 'LETTER',
        exporterPdfMaxGridWidth: 500,
        exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
        onRegisterApi: function(gridApi){ 
            $scope.gridApi = gridApi;
        },
        data:$scope.myData
    };

    $scope.myData = [
     {
         "nameOfExpert": "Abramson, M.D., John",
         "practiceArea": "Vioxx MDL",
         "dateTaken": "8/3/2006",
         "plt/Def": "Pltf",
         "jurisdiction": "USDC  E.D. LA",
         "format": "Notepad"
     },
     {
         "nameOfExpert": "Amos, M.D., Edwin",
         "practiceArea": "Neurology",
         "dateTaken": "12/27/2007",
         "plt/Def": "Def (McCurdy & Leibel)",
         "jurisdiction": "LASC",
         "format": "PDF"
     },
     {
         "nameOfExpert": "Baird, Robert M.D.",
         "practiceArea": "Orthopedic",
         "dateTaken": "8/5/2013",
         "plt/Def": "Def (Steven Levine)",
         "jurisdiction": "OCSC",
         "format": "PDF"
     },
     {
         "nameOfExpert": "Abramson, M.D., John",
         "practiceArea": "Vioxx MDL",
         "dateTaken": "8/3/2006",
         "plt/Def": "Pltf",
         "jurisdiction": "USDC  E.D. LA",
         "format": "Notepad"
     },
     {
         "nameOfExpert": "Amos, M.D., Edwin",
         "practiceArea": "Neurology",
         "dateTaken": "12/27/2007",
         "plt/Def": "Def (McCurdy & Leibel)",
         "jurisdiction": "LASC",
         "format": "PDF"
     },
     {
         "nameOfExpert": "Baird, Robert M.D.",
         "practiceArea": "Orthopedic",
         "dateTaken": "8/5/2013",
         "plt/Def": "Def (Steven Levine)",
         "jurisdiction": "OCSC",
         "format": "PDF"
     },
     {
         "nameOfExpert": "Abramson, M.D., John",
         "practiceArea": "Vioxx MDL",
         "dateTaken": "8/3/2006",
         "plt/Def": "Pltf",
         "jurisdiction": "USDC  E.D. LA",
         "format": "Notepad"
     },
     {
         "nameOfExpert": "Amos, M.D., Edwin",
         "practiceArea": "Neurology",
         "dateTaken": "12/27/2007",
         "plt/Def": "Def (McCurdy & Leibel)",
         "jurisdiction": "LASC",
         "format": "PDF"
     },
     {
         "nameOfExpert": "Baird, Robert M.D.",
         "practiceArea": "Orthopedic",
         "dateTaken": "8/5/2013",
         "plt/Def": "Def (Steven Levine)",
         "jurisdiction": "OCSC",
         "format": "PDF"
     },
     {
         "nameOfExpert": "Abramson, M.D., John",
         "practiceArea": "Vioxx MDL",
         "dateTaken": "8/3/2006",
         "plt/Def": "Pltf",
         "jurisdiction": "USDC  E.D. LA",
         "format": "Notepad"
     },
     {
         "nameOfExpert": "Amos, M.D., Edwin",
         "practiceArea": "Neurology",
         "dateTaken": "12/27/2007",
         "plt/Def": "Def (McCurdy & Leibel)",
         "jurisdiction": "LASC",
         "format": "PDF"
     },
     {
         "nameOfExpert": "Baird, Robert M.D.",
         "practiceArea": "Orthopedic",
         "dateTaken": "8/5/2013",
         "plt/Def": "Def (Steven Levine)",
         "jurisdiction": "OCSC",
         "format": "PDF"
     }
    ];
});