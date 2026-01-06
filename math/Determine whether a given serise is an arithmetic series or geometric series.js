function determineSeriesType(arr) {
    // Check an arithmetic series & sum
    let sum=0;
    let numTerms=arr.length;
    let hasArithmetic = true;
    let arithmeticSub = arr[1] - arr[0];
    for (let i = 0; i < arr.length-1 ; i++) {
        if (arr[i + 1] - arr[i] !== arithmeticSub) {
            hasArithmetic = false;
        }
    }
    // Check geometric series
    let hasGeometric = true;
    let geometricRatio = arr[1] / arr[0];
    for (let i = 0; i < arr.length-1 ; i++) {
        if (arr[i + 1] / arr[i] !== geometricRatio) {
            hasGeometric = false;
        }
    }
    if (hasArithmetic) {
        // Calculate sum  arithmetic series
        //Sn=n/2(2a+(n-1)d)...->{ a..->first term || d..->common difference between terms  || n..->numterm}
        sum = (numTerms * (2 * arr[0] + (numTerms - 1) * arithmeticSub)) / 2;
    } else if (hasGeometric) {
        // Calculate sum  geometric series
        //Sn=a*(r^n-1/r-1)...->{ a..->first term || r..->common ratio searies between terms ||n..->numterm}
        sum = arr[0] * (1 - Math.pow(geometricRatio, numTerms)) / (1 - geometricRatio);
    }

    return { type: hasArithmetic ? "Arithmetic Series" : hasGeometric ? "Geometric Series" : "Neither Arithmetic nor Geometric Series", sum, numTerms };
}
// Testing coherance html with JS
function calculateSeries() {
    const input = document.getElementById('Input').value;
    const arr = input.split(',').map(Number);  // transfer form text to number & ,

    if (arr.some(isNaN)) {
        document.getElementById('output').innerHTML = '<p>Please enter valid numbers separated by commas.</p>';
        return;
    }

    const result = determineSeriesType(arr);
    document.getElementById('output').innerHTML = `<p>Series Type: ${result.type}</p><p>Sum: ${result.sum}</p><p>Number of Terms: ${result.numTerms}</p>`;
}
