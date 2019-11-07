"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertGSTTToSRT(string) {
    class hourRepresentation {
        constructor(input) {
            let seconds, nanos;
            if (determineIfv2(input)) {
                seconds = input.seconds || '0';
                this.nanos = input.nanos ? String(input.nanos) : '000';
            }
            else {
                seconds = input.substring(0, input.length - 1);
                this.nanos = '000'; // servide doesn't return nanoseconds on v1
            }
            this.seconds = +seconds;
            this.hours = Math.floor(this.seconds / 3600);
            this.minutes = Math.floor(this.seconds % 3600 / 60);
            this.seconds = Math.floor(this.seconds % 3600 % 60);
        }
        toString() {
            return String(this.hours).padStart(2, '0') + ':'
                + String(this.minutes).padStart(2, '0') + ':'
                + String(this.seconds).padStart(2, '0') + ','
                + this.nanos.substr(0, 3);
        }
    }
    function determineIfv2(toBeDetermined) {
        if (toBeDetermined.seconds || toBeDetermined.nanos) {
            return true;
        }
        return false;
    }
    var obj = JSON.parse(string);
    var i = 1;
    var result = '';
    const array = obj.response ? obj.response.results : obj.results; // The object can be the full response or the response object
    for (const line of array) {
        result += i++;
        result += '\n';
        var word = line.alternatives[0].words[0];
        var time = new hourRepresentation(word.startTime);
        result += time.toString() + ' --> ';
        var word = line.alternatives[0].words[line.alternatives[0].words.length - 1];
        time = new hourRepresentation(word.endTime);
        result += time.toString() + '\n';
        result += line.alternatives[0].transcript + '\n\n';
    }
    return result;
}
exports.convertGSTTToSRT = convertGSTTToSRT;
