var file;
function onClickButton() {
    var string = document.getElementById('input').value;
    var output = convertGSTTToSRT(string);
    document.getElementById('output').value = output;
    file = new Blob([output], {type: "text/plain;charset=utf-8"})
    document.getElementById('link').href = URL.createObjectURL(file);
}


function copyToClipboard() {
    var textArea = document.getElementById('output');
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

}
