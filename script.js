var file;
function convertGSTTToSRT(string) {
    var obj = JSON.parse(string);
    var i = 1;
    var result = ''
    for (const line of obj.response.results) {
        result += i++;
        result += '\n'
        var word = line.alternatives[0].words[0]
        var time = convertSecondStringToRealtime(word.startTime);
        result += formatTime(time) + ' --> '

        var word = line.alternatives[0].words[line.alternatives[0].words.length - 1]
        time = convertSecondStringToRealtime(word.endTime);
        result += formatTime(time) + '\n'
        result += line.alternatives[0].transcript + '\n\n'
    }
    return result;
}

function formatTime(time) {
    return String(time.hours).padStart(2, '0')+ ':' + String(time.minutes).padStart(2, '0') + ':' + String(time.seconds).padStart(2, '0') + ',000';
}

function convertSecondStringToRealtime(string) {
    var seconds = string.substring(0, string.length - 1);
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor(seconds % 3600 / 60);
    seconds = Math.floor(seconds % 3600 % 60);
    return {
        hours, minutes, seconds
    }
}

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
