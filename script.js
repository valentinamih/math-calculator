let isValid = (num) => {
    if (!num || num <= 0) {
        return false;
    }
    return true;
};



let showIfIsntValid = () => alert('enter valid nums!')


let findRootsOfQE = () => {
    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    let c = Number(document.getElementById('num3').value);
    let msg = '';
    if (a && b && c) {
        let d = b **2 - 4 * a * c;
        if (d < 0) {
            msg = 'there is no roots';
        } else {
           let x1 = (-b + Math.sqrt(d)) / (2 * a);
            if (d === 0) {
                msg = 'the root is ' + x1;
            } else {
            let x2 = (-b - Math.sqrt(d)) / (2 * a);
            msg = 'the roots are: ' + x1 + ", " + x2 + ".";
            };
        } ;
        document.getElementById("answer1").innerHTML = msg;
    } else {
        showIfIsntValid()
    };
}


let isPythagoreanTriple = () => {
    let a = Number(document.getElementById('num4').value);
    let b = Number(document.getElementById('num5').value);
    let c = Number(document.getElementById('num6').value);
    let nums = [];
    nums.push(a,b,c)
    if (isValid(a) && isValid(b) && isValid(c)) {
        nums.sort((a, b) => b - a)
        if (nums[0] ** 2 === nums[1] ** 2 + nums[2] ** 2) {
            document.getElementById("answer2").innerHTML = "yes it's a Pythagorean Triple";
        } else {
            document.getElementById("answer2").innerHTML = 'unfortunately, no :('
        }
    } else {
        showIfIsntValid()
    }
};


let findAllDivisors = () => {
    let num = Number(document.getElementById('num7').value);
    if (num === 1) {
        document.getElementById("answer3").innerHTML = 'there is only one - one';
    } else if (isValid(num)) {
        let divisors = [];
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                divisors.push(i);
            };
        };
        document.getElementById("answer3").innerHTML = 'the divisors are: ' + divisors;
    } else {
        showIfIsntValid()
    }
};



let findCommonDivisors = () => {
    let num1 = Number(document.getElementById('num8').value);
    let num2 = Number(document.getElementById('num9').value);
    let biggerNum;
    if (isValid(num1) && isValid(num2)) {
        let divisors = [];
        if (num1 > num2) {
            biggerNum = num1;
        } else {
            biggerNum = num2
        }
        for (let i = 1; i <= biggerNum; i++) {
            if (num1 % i === 0 && num2 % i === 0) {
                divisors.push(i);
            };
        };
        document.getElementById("answer4").innerHTML = 'the divisors are: ' + divisors;
    } else {
        showIfIsntValid();
    }
};



let findTheBiggestivisor = () => {
    let num1 = Number(document.getElementById('num10').value);
    let num2 = Number(document.getElementById('num11').value);
    let smallerNum;
    if (isValid(num1) && isValid(num2)) {
        if (num1 < num2) {
            smallerNum = num1;
        } else {
            smallerNum = num2;
        }
        for (let i = smallerNum; i > 0; i--) {
            if (num1 % i === 0 && num2 % i === 0) {
                document.getElementById("answer5").innerHTML = 'the biggest divisor is: ' + i;
                break
            };
        };
    } else {
        showIfIsntValid();
    }
};


let findSmallestCommonMultiple = () => {
    let num1 = Number(document.getElementById('num12').value);
    let num2 = Number(document.getElementById('num13').value);
    let biggerNum;
    if (isValid(num1) && isValid(num2)) {
        if (num1 > num2) {
            biggerNum = num1;
        } else {
            biggerNum = num2;
        };
        for (let i = biggerNum; ; i++) {
            if (i % num1 === 0 && i % num2 === 0) {
                document.getElementById("answer6").innerHTML = 'the smallest common multiple is: ' + i;
                break;
            }
        };
    } else {
        showIfIsntValid();
    };
};

