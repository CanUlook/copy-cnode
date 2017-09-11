var star = document.getElementById('star');
var context = star.getContext("2d"); // 鑾峰緱缁樺浘涓婁笅鏂�
var point = 70; // 鍒濆鍦嗙偣鐨勬暟閲�
var circleArr = [];

//鐢诲竷鐨勭浉鍏宠瀹�
star.width = window.innerWidth;
star.height = window.innerHeight;

// 鐢诲渾
function drawCircle (x, y, r, changeX, changeY) {
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI);
    context.closePath();
    context.fillStyle = "rgba(255,255,255,.5)";
    context.fill();

    return {x: x, y: y, r: r, changeX: changeX, changeY: changeY};
}

//鐢荤嚎
function drawLine (x, y, _x, _y, o) {
    context.moveTo(x, y);   // 璧峰鐐�
    context.lineTo(_x, _y); // 缁堢偣
    context.strokeStyle = "rgba(240, 240, 240, " + o + ")";
    context.strokeWidth = 1;
    context.stroke();
}

//浜х敓 b(b涓嶅瓨鍦ㄦ椂涓�0) 鍒� a 闅忔満鏁�
function generateNum (a, b) {
    // b = arguments[1] || 0;
    //return Math.ceil(Math.random() * (a - b)) + b;
    var b = arguments[1] || 0;
    return Math.floor(Math.random()*(a-b+1)+b);
}

//缁樺埗鎵€鏈夊渾鐐�
function init () {
    for (var i = 0; i < point; i++) {
        //鐢诲渾,骞跺瓨鍌ㄥ叾鍧愭爣
        circleArr[i] = drawCircle(generateNum(star.width), generateNum(star.height), generateNum(4, 2), generateNum(10, -10) / 5, generateNum(10, -10) / 5);
    }
}
init();

//甯у姩鐢�
function control () {
    context.clearRect(0,0,star.width, star.height);//鍒濆鍖栫敾甯�

    for (var i = 0; i < point; i++) {
        var x = circleArr[i]["x"] + circleArr[i]["changeX"];
        var y = circleArr[i]["y"] + circleArr[i]["changeY"];
        var r = circleArr[i]["r"];
        var changeX = circleArr[i]["changeX"];
        var changeY = circleArr[i]["changeY"];
        if (x > star.width) {
            x = 0;
        } else if (x < 0) {
            x = star.width;
        }
        if (y > star.height) {
            y = 0;
        } else if (y < 0) {
            y = star.height;
        }
        //鐢诲渾,骞跺瓨鍌ㄥ叾鍧愭爣
        circleArr[i] = drawCircle(x, y, r, changeX, changeY);
    }

    //杩炵嚎
    for (var j = 0; j < point; j++) {
        for (var k = j + 1; k < point; k++) {
            //璁＄畻涓ょ偣闂寸殑璺濈
            var a = circleArr[j]["x"] - circleArr[k]["x"];
            var b = circleArr[j]["y"] - circleArr[k]["y"];
            var lineLength = Math.sqrt(a*a + b*b);
            //鐢荤嚎
            var x = circleArr[j]["x"],
                ifLine = star.width / 8,
                y = circleArr[j]["y"],
                _x = circleArr[k]["x"],
                _y = circleArr[k]["y"];

            if (lineLength < ifLine) {
                o = (lineLength / ifLine) / 200;
                drawLine(x, y, _x, _y, o);
            }
        }
    }

    setTimeout(arguments.callee, 115);
    //requestID = window.requestAnimationFrame(control);
}
//requestID = window.requestAnimationFrame(control);
control();

//榧犳爣婊戝姩鏁堟灉
function moveAni (e) {
    var x = e.offsetX;
    var y = e.offsetY;

    drawCircle(x, y, 2);
    for (var i = 0; i < point; i++) {
        //璁＄畻涓ょ偣闂寸殑璺濈
        var a = circleArr[i]["x"] - x;
        var b = circleArr[i]["y"] - y;
        var lineLength = Math.sqrt(a*a + b*b);
        //杩炵嚎
        var ifLine = ifLine = star.width / 8,
            _x = circleArr[i]["x"],
            _y = circleArr[i]["y"];

        if (lineLength < ifLine) {
            o = 0.1;
            drawLine(x, y, _x, _y, o);
        }

    }
};
star.onmousemove = moveAni;
// star.onmouseover = moveAni;