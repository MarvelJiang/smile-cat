let html = document.querySelector("#html");
let style = document.querySelector('style');

let string = `
/* Hi~ 今天咱们来画一只小猫 */
/* 给小猫加一个背景颜色 */
.skin {
  height: 100vh;
  background: rgb(214, 154, 68);
  padding-top: 100px;
}

.container {
  width: 400px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

/* 画出小猫脸的轮廓 */
.face {
  border: 3px solid black;
  background: rgb(251, 248, 241);
  width: 350px;
  height: 250px;
  position: absolute;
  left: 25px;
  bottom: 50px;
  border-radius: 50% 50% 30% 30%;
  z-index: 2;
  overflow: hidden;
}

.ear {
  position: relative;
}

/* 给它加上左耳朵 */
.ear .left {
  border: 3px solid black;
  background: rgb(251, 248, 241);
  width: 80px;
  height: 100px;
  border-radius: 100% 10% 50% 0%;
  position: absolute;
  top: 70px;
  left: 55px;
  z-index: 1;
}

/* 再给它加上黄色的右耳朵 */
.ear.right {
  border: 3px solid black;
  background: rgb(251, 248, 241);
  width: 80px;
  height: 100px;
  border-radius: 10% 100% 0% 50%;
  position: absolute;
  top: 70px;
  right: 55px;
  z-index: 1;
  background: rgb(214, 154, 68);
}

.eye {
  position: relative;
}

/* 画出两只眼睛的轮廓 */
.eye .left {
  border: 3px solid black;
  border-color: black black rgb(251, 248, 241) black;
  width: 100px;
  height: 80px;
  position: absolute;
  top: 70px;
  left: 35px;
  border-radius: 50% 50% 30% 30%;
}
.eye .bottomLeft {
  border: 3px solid black;
  border-color: black transparent transparent transparent;
  background: rgb(251, 248, 241);
  width: 130px;
  height: 20px;
  position: absolute;
  top: 132px;
  left: 20px;
  border-radius: 50% 50% 30% 30%;
}
.eye .right {
  border: 3px solid black;
  border-color: black black rgb(251, 248, 241) black;
  width: 100px;
  height: 80px;
  position: absolute;
  top: 70px;
  right: 35px;
  border-radius: 50% 50% 30% 30%;
}
.eye .bottomRight {
  border: 3px solid black;
  border-color: black transparent transparent transparent;
  background: rgb(251, 248, 241);
  width: 130px;
  height: 20px;
  position: absolute;
  top: 132px;
  right: 20px;
  border-radius: 50% 50% 30% 30%;
}

/* 添上眼球 */
.eyeBall {
  background: black;
  width: 55px;
  height: 65px;
  position: absolute;
  border-radius: 50%;
}
.left .eyeBall {
  left: 20px;
}
.right .eyeBall {
  right: 20px;
}

/* 添上鼻子 */
.nose {
  border: 1px solid black;
  background: black;
  width: 20px;
  height: 8px;
  position: absolute;
  top: 150px;
  left: 50%;
  margin-left: -10px;
  border-radius: 0 0 50% 50%;
}

/* 再加上两撇小胡子 */
.mustache {
  position: relative;
}
.mustache .left {
  border: 3px solid red;
  width: 60px;
  height: 50px;
  border-radius: 50% 50% 40% 40%;
  border-color: transparent transparent black transparent;
  position: absolute;
  top: 125px;
  left: 50%;
  margin-left: -60px;
  transform: rotate(-15deg);
}
.mustache .right {
  border: 3px solid red;
  width: 60px;
  height: 50px;
  border-radius: 50% 50% 40% 40%;
  border-color: transparent transparent black transparent;
  position: absolute;
  top: 125px;
  right: 50%;
  margin-right: -60px;
  transform: rotate(15deg);
}

/* 最后给它加个花纹方便辨认 */
.face .mark {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgb(214, 154, 68);
  position: absolute;
  top: -30px;
  left: 220px;
}

/* 大功告成！你可以尝试把鼠标移到它的脸上 */`

let string2 = '';

let n = 0;
let time = 300;
let step;

let globalStep = () => {
    step = () => {
      setTimeout(() => {
        if (string[n] === '\n') {
          string2 += "<br>";
        } else if (string[n] === ' ') {
          string2 += "&nbsp";
        } else {
          string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n + 1 < string.length) {
          n += 1;
          step();
        }
      }, time)
  }
  step();
}

globalStep();

btnPause.onclick = () => {
  time = 99999999
}

btnPlay.onclick = () => {
  if (time === 99999999) {
    time = 300;
    step();
  } 
}

btnFast.onclick = () => {
  if (time === 300 || time === 99999999) {
    console.log('快')
    time = 50;
    step();
  } else {
    return
  }
}








