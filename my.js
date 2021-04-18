document.addEventListener("DOMContentLoaded", () => {
    try {
        document.write("Конвертация с десятичных в бинарные: " + fromBinaryToDecimal("111111") + "<br><br>");
    } catch (e) {
        document.write("Ошибка при конвертации с десятичных в бинарные: " + e.message + "<br><br>");
    }

    try {
        document.write("Фибоначи: " + showFibonacciNumbers(4) + "<br><br>");
    } catch (e) {
        document.write("Ошибка при генерации чисел Фибоначи: " + e.message + "<br><br>");
    }

    try {
        document.write("Возведение в степень: " + myPow(-3, -3) + "<br><br>");
    } catch (e) {
        document.write("Ошибка при возведение в степень: " + e.message + "<br><br>");
    }

    try {
        document.write("Проверка на вхождение айпи в диапазон айпи: " + checkIfTheIpIsInTheRange("10.10.1.255") + "<br><br>");
    } catch (e) {
        document.write("Ошибка при проверки вхождение айпи в диапазон айпи: " + e.message + "<br><br>");
    }

    try {
        document.write("Подсчитать % положительных/отрицательных/нулевых/простых чисел<br>" + showRatios([1,-1,0,2,-3,9]) + "<br><br>");
    } catch (e) {
        document.write("Ошибка: " + e.message + "<br><br>");
    }

    try {
        document.write("Сортировка: " + myBubblesort([1,-1,0,2,-3,9]) + "<br><br>");
    } catch (e) {
        document.write("Ошибка: " + e.message + "<br><br>");
    }

    let matrixA3x5 = [
        [-1,6,-3,7,-4],
        [-8,-4,6,-3,9],
        [7,-4,9,-1,1],
    ];
    let matrixB3x5 = [
        [3,2,4,2,1],
        [0,2,4,1,6],
        [-8,-4,6,0,-9],
    ];

    try {
        document.write("Транспонирование матрицы: " + transposeTheMatrix(matrixA3x5) + "<br><br>");
    } catch (e) {
        document.write("Ошибка: " + e.message + "<br><br>");
    }

    try {
        document.write("Переумножение матриц: " + matrixMultiplication(matrixA3x5, matrixB3x5) + "<br><br>");
    } catch (e) {
        document.write("Ошибка: " + e.message + "<br><br>");
    }

    try {
        document.write("Удаление строк и столбцов с положительной суммой и нулевым элементом: " + deleteNotValidRowFromMatrix(matrixB3x5) + "<br><br>");
    } catch (e) {
        document.write("Ошибка: " + e.message + "<br><br>");
    }

    document.write("----------Рекурсии----------<br><br>");

    try {
        document.write("Подсчитать % положительных/отрицательных/нулевых/простых чисел<br>" + showRatiosWithRecursion([1,-1,0,2,-3,9]) + "<br><br>");
    } catch (e) {
        document.write("Ошибка: " + e.message + "<br><br>");
    }

    try {
        document.write("Сортировка: " + myBubblesortWithRecursion([1,-1,0,2,-3,9]) + "<br><br>");
    } catch (e) {
        document.write("Ошибка: " + e.message + "<br><br>");
    }

    try {
        document.write("Транспонирование матрицы: " + transposeTheMatrixWithRecursion(matrixA3x5) + "<br><br>");
    } catch (e) {
        document.write("Ошибка: " + e.message + "<br><br>");
    }

    try {
        document.write("Переумножение матриц: " + matrixMultiplicationWithRecursion(matrixA3x5, matrixB3x5) + "<br><br>");
    } catch (e) {
        document.write("Ошибка: " + e.message + "<br><br>");
    }

    try {
        document.write("Удаление строк и столбцов с положительной суммой и нулевым элементом: " + deleteNotValidRowFromMatrixWithRecursion(matrixB3x5) + "<br><br>");
    } catch (e) {
        document.write("Ошибка: " + e.message + "<br><br>");
    }

    try {
        let mixedArr = [
            {"ololo": "lolo", "cheto-tam": "taram" },
            [1,2],
            [[3,4],[5,6]],
            [ 
            [ 
                [ 
                1, 
                10, 
                20,
                ], 
                1, 
            ], 
            ["qwe","wasd"], 
            ],
            [ 1, 2, 3, 4 ],
            [ 5 ]
        ];
        document.write("Рекурсивный проход по массиву разного уровся вложености: " + showAllValueFromAnyArr(mixedArr) + "<br><br>");
    } catch (e) {
        document.write("Ошибка: " + e.message + "<br><br>");
    }

    

});

function fromBinaryToDecimal(binaryNum)
{
    binaryNum = String(binaryNum);
    let a = binaryNum.match(/^[01]{1,16}$/);
    if (binaryNum.match(/^[01]{1,16}$/) && binaryNum != "10000000000000000") {
        binaryArr = binaryNum.split("");
        binaryArr = binaryArr.reverse();
        let decimal = 0;
        let powNum = 0;
        binaryArr.forEach(bin => {
            if (bin == "1") {
                decimal += Math.pow(2, powNum);
            }
            powNum++;
        });
        return decimal;
    } else {
        throw new Error("Некорректный аргумент");
    }
}

function showFibonacciNumbers(countOfFibNum)
{
    let result = "";
    if (countOfFibNum > 0) {
        let firstFib = 1;
        let secondFib = 1;
        if (countOfFibNum >= 2 ) {
            result += firstFib + ", " + secondFib;
        } else if (countOfFibNum == 1) {
            result += firstFib;
        }
        for (let i = 3; i <= countOfFibNum; i++) {
            let nextFib = firstFib + secondFib;
            result +=  ", " + nextFib;
            firstFib = secondFib;
            secondFib = nextFib;
        }
    } else {
        throw new Error("Некорректный аргумент")
    }
    return result;
}

function myPow(num, pow)
{
    if (Number.isInteger(num) && Number.isInteger(pow)) {
        if (pow > 0 || pow < 0) {
            let moduleOfPow = Math.abs(pow);
            let numResult = num;
            for(let i = 1; i < moduleOfPow; i++){
                numResult *= num;
            }
            if (pow < 0) {
                numResult = 1/numResult;
            }
            return numResult;
        } else {
            return 1;
        } 
    } else {
        throw new Error("Переданные аргументы не правильного формата");
    }
}

function checkIfTheIpIsInTheRange(ip){
    if (!ipVerification(ip)) {
        throw new Error("IP некорректного формата!");
    }
    let verifiableIp = addZeroToIP(ip);
    let ipRanges = [
        ["010.010.001.100", "010.255.255.255"],
        ["172.031.000.000", "172.031.255.255"],
        ["180.168.000.000", "180.168.255.250"],
        ["192.168.100.250", "194.168.200.100"],
    ];
    let result = false;
    ipRanges.forEach(oneOfRange => {
        if (verifiableIp >= oneOfRange[0] && verifiableIp <= oneOfRange[1]) {
            result = true;
            return true;
        }
    });
    return result;
}

function ipVerification(ip)
{
    let ipInArr = ip.split(".");
    if (ipInArr.length != 4) {
        return false;
    } else {
        for (let ipPart of ipInArr) {
            ipPart = Number(ipPart);
            if (isNaN(ipPart) || ipPart < 0 || ipPart > 255) {
                return false;
            }
        }
    }
    return true;
};

function addZeroToIP(ip)
{
    let ipArr = ip.split(".");
    for (let i = 0; i < ipArr.length; i++) {
        let numLength = ipArr[i].length;
        if (numLength < 3) {
            while (ipArr[i].length < 3) {
                ipArr[i] = "0" + ipArr[i];
            }
        }
    }
    return ipArr.join(".");
}

function showRatios(someArray)
{
    if (!Array.isArray(someArray) || someArray.length === 0) {
        throw new Error("Переданные аргументы не правильного формата");
    }
    let positiveNum = 0;
    let negativeNum = 0;
    let zeroNum = 0; 
    let simpleNum = 0;
    for (let num of someArray) {
        if (num > 0) {
            positiveNum++;
        } else if (num < 0) {
            negativeNum++;
        } else if (num == 0) {
            zeroNum++;
        }

        if (num == 2 || num == 3) {
            simpleNum++;
        } else {
            let isSimpleNum = false;
            for (let i = 2; i < num; i++) {
                if (num % i){
                    isSimpleNum = true;
                } else {
                    isSimpleNum = false;
                    break;
                }
            }
            if (isSimpleNum) {
                simpleNum++;
            }
        }
    }
    let totalNumCount = someArray.length;
    let positiveNumPercent = positiveNum * 100 / totalNumCount;
    let negativeNumPercent = negativeNum * 100 / totalNumCount;
    let zeroNumPercent = zeroNum * 100 / totalNumCount;
    let simpleNumPercent = simpleNum * 100 / totalNumCount;
    return "Позитивных: " + Math.round(positiveNumPercent) + "%<br>Отрицательных: " + Math.round(negativeNumPercent) + "%<br>Нулевых: " + Math.round(zeroNumPercent) + "%<br>Простых: " + Math.round(simpleNumPercent) + "%";
}

function myBubblesort(arrToSort)
{
    if (!Array.isArray(arrToSort)) {
        throw new Exception();
    } else {
        for (let i = 1; i <= arrToSort.length-1; i++) {
            for (let j = 1; j <= arrToSort.length-1; j++) {
                if (arrToSort[j] < arrToSort[j-1]) {
                    let temp = arrToSort[j-1];
                    arrToSort[j-1] = arrToSort[j];
                    arrToSort[j] = temp;
                }
            }
        }
    }
    return arrToSort;
}

function verifyMatrixSize(matrix)
{
    if (Array.isArray(matrix) || !matrix.length || !matrix[0].length) {
        return false;
    } else {
        let standartMatrixRows = matrix.length;
        let standartMatrixColumn = matrix[0].length;
        let matrixRows = 0;
        for (let row of matrix) {
            matrixRows++;
            let matrixColumn = 0;
            for (let column of row) {
                if (Number(column) !== column) {
                    return false;
                }
                matrixColumn++;
            }
            if (matrixColumn != standartMatrixColumn) {
                return false;
            }
        }
        if (standartMatrixRows != matrixRows) {
            return false;
        }
        return true;
    }
}

function transposeTheMatrix(matrix)
{
    if (!verifyMatrixSize(matrix)) {
        throw new Error();
    } else {
        newArr = [];
        matrixCount = matrix.length;
        for (i = 0; i < matrixCount; i++) {
            rowCount = matrix[i].length;
            for (j = 0; j < rowCount; j++) {
                if (!newArr[j]) {
                    newArr[j] = [];
                }
                newArr[j].push(matrix[i][j]);
            }
        }
        return newArr;
    }
}

function verificationForMatrixMultiplication(matrix1, matrix2)
{
    if (Array.isArray(matrix1) || Array.isArray(matrix2) || !matrix1[0] || !matrix2[0] || !matrix1[0][0] || !matrix2[0][0]) {
        return false;
    } else {
        let verifyResultMatrix1 = verifyMatrixSize(matrix1);
        let verifyResultMatrix2 = verifyMatrixSize(matrix2);
        if (verifyResultMatrix1 && verifyResultMatrix2 && matrix1.length === matrix2.length && matrix1[0].length === matrix2[0].length) {
            return true;
        } else {
            return false;
        }
    }
}

function matrixMultiplication(matrix1, matrix2)
{
    if (!verificationForMatrixMultiplication(matrix1, matrix2)) {
        throw new Error("Матрицы не прошли верификацию");
    } else {
        let finalMatrix = [];
        let rowCount = matrix1.length;
        for (let i = 0; i < rowCount; i++) {
            let columnCount = matrix1[i].length;
            for(let j = 0; j < columnCount; j++){
                if (!finalMatrix[i]) {
                    finalMatrix[i] = [];
                }
                finalMatrix[i].push(matrix1[i][j] * matrix2[i][j]);
            }
        }
        return finalMatrix;
    }	
}

function deleteNotValidRowFromMatrix(matrix)
{
    if (!verifyMatrixSize(matrix)) {
        throw new Error("Матрица не прошла верификацию");
    }
    let matrixWithValidRow = [];
    let rowCount = matrix.length;
    for (i = 0; i < rowCount; i++) {
        let columnCount = matrix[i].length;
        let summ = 0;
        let isZero = false;
        for (let j = 0; j < columnCount; j++) {
            summ += matrix[i][j];
            if(matrix[i][j] == 0){
                isZero = true;
            }
        }
        if (!(summ > 0 && isZero)) {
            matrixWithValidRow.push(matrix[i]);
        }
    }
    return matrixWithValidRow;
}

function showRatiosWithRecursion(someArray)
{
    if (!Array.isArray(someArray) || someArray.length === 0) {
        throw new Error("Переданные аргументы не правильного формата");
    }
    let returnedData = {
        positiveNum: 0,
        negativeNum: 0,
        zeroNum: 0,
        simpleNum: 0,
    };
    let result = recursiveShowRatiosF(someArray, returnedData, i = 0);
    let totalNumCount = someArray.length;
    let positiveNumPercent = result.positiveNum * 100 / totalNumCount;
    let negativeNumPercent = result.negativeNum * 100 / totalNumCount;
    let zeroNumPercent = result.zeroNum * 100 / totalNumCount;
    let simpleNumPercent = result.simpleNum * 100 / totalNumCount;
    return "Позитивных: " + Math.round(positiveNumPercent) + "%<br>Отрицательных: " + Math.round(negativeNumPercent) + "%<br>Нулевых: " + Math.round(zeroNumPercent) + "%<br>Простых: " + Math.round(simpleNumPercent) + "%";
}

function recursiveShowRatiosF(someArray, returnedData, i = 0)
{
    if (someArray.length == i) {
        return returnedData;
    }
    if (someArray[i] > 0) {
        returnedData["positiveNum"]++;
    } else if (someArray[i] < 0) {
        returnedData["negativeNum"]++;
    } else if(someArray[i] == 0) {
        returnedData["zeroNum"]++;
    }
    if (someArray[i] == 2 || someArray[i] == 3) {
        returnedData["simpleNum"]++;
    } else {
        let isSimpleNum = false;
        for (let j = 2; j < someArray[i]; j++) {
            if (someArray[i] % j) {
                isSimpleNum = true;
            } else {
                isSimpleNum = false;
                break;
            }
        }
        if (isSimpleNum) {
            returnedData["simpleNum"]++;
        }
    }
    i++;
    return recursiveShowRatiosF(someArray, returnedData, i);
}

function myBubblesortWithRecursion(arrToSort)
{
    if (Array.isArray(arrToSort) || !arrToSort[0]) {
        throw new Error("Переданные аргументы не правильного формата");
    } else {
        arrToSort = recursiveBubbleF(arrToSort);
    }
    return arrToSort;
}

function recursiveBubbleF(arrToSort, i = 0)
{
    if (arrToSort.length == i) {
        return arrToSort;
    }
    for (let j = 1; j <= arrToSort.length-1; j++) {
        if (arrToSort[j] < arrToSort[j-1]) {
            let temp = arrToSort[j-1];
            arrToSort[j-1] = arrToSort[j];
            arrToSort[j] = temp;
        }
    }
    i++;
    return recursiveBubbleF(arrToSort, i);
}

function transposeTheMatrixWithRecursion(matrix)
{
    if (!verifyMatrixSize(matrix)) {
        throw new Exception();
    } else {
        newMatrix = recursiveTransposeF(matrix);
        return newMatrix;
    }
}

function recursiveTransposeF(matrix, i = 0, newMatrix = [])
{
    if (matrix.length == i) {
        return newMatrix;
    }
    rowCount = matrix[i].length;
    for (j = 0; j < rowCount; j++) {
        if (!newMatrix[j]) {
            newMatrix[j] = [];
        }
        newMatrix[j].push(matrix[i][j]);
    }
    i++;
    return recursiveTransposeF(matrix, i, newMatrix);
}

function matrixMultiplicationWithRecursion(matrix1, matrix2)
{
    if (!verificationForMatrixMultiplication(matrix1, matrix2)) {
        throw new Error();
    } else {
        return recursiveMultiplication(matrix1, matrix2);
    }	
}

function recursiveMultiplication(matrix1, matrix2, i = 0, finalMatrix = [])
{
    if (matrix1.length == i) {
        return finalMatrix;
    }
    let columnCount = matrix1[i].length;
    for(let j = 0; j < columnCount; j++){
        if (!finalMatrix[i]) {
            finalMatrix[i] = [];
        }
        finalMatrix[i].push(matrix1[i][j] * matrix2[i][j]);
    }
    i++;
    return recursiveMultiplication(matrix1, matrix2, i, finalMatrix);
}


function deleteNotValidRowFromMatrixWithRecursion(matrix)
{
    if (!verifyMatrixSize(matrix)) {
        throw new Error("Переданные аргументы не правильного формата");
    }
    return recursiveDeleteF(matrix);
}

function recursiveDeleteF(matrix, i = 0, matrixWithValidRow = [])
{
    if (matrix.length == i) {
        return matrixWithValidRow;
    }
    let columnCount = matrix[i].length;
    let summ = 0;
    let isZero = false;
    for (let j = 0; j < columnCount; j++) {
        summ += matrix[i][j];
        if(matrix[i][j] == 0){
            isZero = true;
        }
    }
    if (!(summ > 0 && isZero)) {
        matrixWithValidRow.push(matrix[i]);
    }
    i++;
    return recursiveDeleteF(matrix, i, matrixWithValidRow);
}

function showAllValueFromAnyArr(mixedArr)
{
    if (!Array.isArray(mixedArr) || !mixedArr[0]) {
        throw new Error("Переданные аргументы не правильного формата");
    } else {
        return recurciveShowValues(mixedArr, returnedData = "");
    }
}

function recurciveShowValues(arr, returnedData)
{
    for (let key of Object.keys(arr)) {
        if (Array.isArray(arr[key]) || (typeof arr[key] === "object")) {
            returnedData = recurciveShowValues(arr[key], returnedData);
        } else {
            returnedData += arr[key] + "; "
        }
    }
    return returnedData;
}
