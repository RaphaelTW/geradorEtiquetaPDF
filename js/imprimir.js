const btImprimir = document.getElementById("imprimir")

btImprimir.addEventListener("click",(evt) => {
    const tabelaImprimir = document.getElementById("tabela").innerHTML;
    let estilo = "<style>";
    estilo += "table {font: 17px Calibri; border: 4px solid #000000; table-layout: fixed; border-collapse: collapse; height: 378px; width: 578px;";
    estilo += "td {border: none !important;}";
    estilo += "tr, th {border: none; padding: 2px 3px;}";
    estilo += ".img {border: 1px solid #000000 !important; border-radius: 20px !important; display: block; height: 20px !important; width: 20px !important;}";
    estilo += "</style>";

    const win = window.open('', '', 'height=700,width=700');
    win.document.write('<html><head>');
    win.document.write('<title>Etiqueta</title>');
    win.document.write(estilo);
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(tabelaImprimir);
    win.document.write('</body></html>');

    win.print();
    win.close();

    window.print()
})
