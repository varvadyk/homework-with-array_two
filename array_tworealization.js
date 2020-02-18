//function 1
function getRandomArray(length, min, max){
    const array=[];
    for(let i=0; i<length; i++){
        array.push(Math.floor(Math.random() * (max - min + 1)) + min);
      }
      return array;
}


document.writeln(`<p> Function #1 - Gets random numbers:${getRandomArray(15, 1, 100)}</p>`);
//function 2
function getModa(...numbers){
    
        return ((numbers.sort((a, b) =>
        (numbers.filter(v => v === a).length) - (numbers.filter(v => v === b).length))
      ).pop())
      }
 
      document.writeln(`<p> Function #2 - Gets moda  numbers:${getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</p>`);


//function3
function getAverage(...numbers){
    const result = numbers.reduce((accumulator, element) => {
        let suma = 0;    
        if (Number.isInteger(element)) {
                suma += element;
            }
            return suma + accumulator;
        }, 0 );
        return result / numbers.length;
    } 
document.writeln(`<p> Function #3 - counts arithmetic mean  :${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</p>`);

    //function 4
    function getMedian (...numbers) {
        let median = 0;
         numbers.sort((a, b) => a -b);
        let properIndex = 0;
        if (numbers.length % 2 !== 0) {
            properIndex = Math.floor(numbers.length / 2);
            median = numbers[properIndex];
        } else {
            properIndex = numbers.length / 2;
            median = (numbers[properIndex - 1] + numbers[properIndex]) / 2;
            }
        return median;
    }

    document.writeln(`<p> Function #4 - Сounts the median of arguments :${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</p>`);


//function 5
function filterEvenNumbers(...numbers){
const filterResult=numbers.filter(element => element % 2 !== 0);
return filterResult;
}
document.writeln(`<p> Function #5 - Filters even numbers:${filterEvenNumbers(1, 2, 3, 4, 5, 6)}</p>`);


//function 6
function countPositiveNumbers  (...numbers) {
    const intNum = numbers.filter(num => Number.isInteger(num));

return intNum.filter(element => element >= 0).length;
}
document.writeln(`<p> Function #6 - Count the number of numbers greater than 0:${countPositiveNumbers(1, -2, 3, -4, -5, 6)}</p>`);

//function 7
 function getDividedByFive(...numbers){
     return numbers.filter(element => element % 5 === 0)
 }
 document.writeln(`<p> Function #7 - filter  all the elements in the array and leave only completely divided by 5: ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</p>`);

 //function 8
 function replaceBadWords(string){
    const arr = string.split(' ').map(word => {
        const badWords = /fuck|shit/i;
        if (word.match(badWords)) {
            return word.replace(badWords, '****');
        } else {
            return word;
        }
    });
    return arr.join(' ');
}
document.writeln(`<p> Function #8 - Replace bad words with asterisks: ${replaceBadWords("Are you fucking kidding?")}</p>`);


 
//function 9
 function divideByThree(word){
     const result =word.match(/.{1,3}/g);
     return result;
 }
 
document.writeln(`<p> Function #9 - Breaks each word into conditional syllables of 3 letters: ${divideByThree('Commander')}</p>`);
/*//function 10

    function generateCombinations(word) {
        list_of_strings = new Array();
        for(i=0;i<word.length;i++) {
            for(j=i+1;j<word.length+1;j++) {
                list_of_strings.push(word.slice(i, j));
            }
        }
        return list_of_strings;
     }
     document.writeln(`<p> Function #10 - All possible permutations  : ${generateCombinations("man")}</p>`);

*/
