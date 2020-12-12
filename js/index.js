window.onload = function () {

	// 秒杀倒计时
	// 设定为下个小时
	var cutdownTitle = document.querySelector(".cutdown_title")
	var hour = new Date().getHours()
	cutdownTitle.innerHTML = (hour+1)+":00 场"
  timeUtil((hour+1)+":00:00");
  setInterval("timeUtil('"+(hour+1)+":00:00')", 1000);
};

// 计算给定的小时计算剩余时间
function timeUtil(time) {
	
  var hourEle = document.querySelector(".hour"),
    minuteEle = document.querySelector(".minute"),
    secondEle = document.querySelector(".second");
		var now = new Date(),
    Y = now.getFullYear(),
    M = now.getMonth() + 1,
		D = now.getDate(),
		targetDate = new Date(Y+"/"+M+"/"+D + " " + time)

  // 剩余秒数
	var cutdownSecond = (targetDate.getTime() - now.getTime()) / 1000;
	// 已结束
  if (cutdownSecond <= 0) {
    hourEle.innerText = "00";
    minuteEle.innerText = "00";
    secondEle.innerText = "00";
    return;
  }

  var h = parseInt((cutdownSecond / 60 / 60) % 24);
  h = h < 10 ? "0" + h : h;
  var m = parseInt((cutdownSecond / 60) % 60);
  m = m < 10 ? "0" + m : m;
  var s = parseInt(cutdownSecond % 60);
  s = s < 10 ? "0" + s : s;

  hourEle.innerText = h;
  minuteEle.innerText = m;
  secondEle.innerText = s;
}
