function printCurrentTime() {
    // 创建一个 Date 对象
    var currentDate = new Date();

    // 获取当前时间的小时、分钟和秒
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    // 格式化时间，确保显示两位数
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    // 构建时间字符串
    var currentTimeString = hours + ':' + minutes + ':' + seconds;

    // 打印当前时间
    console.log('当前时间：' + currentTimeString);
}

// 获取所有的 input 元素
var allInputs = document.querySelectorAll('input');

// 为每个输入框添加事件处理程序
allInputs.forEach(function (inputElement) {
    inputElement.addEventListener('focus', function () {
        // 在焦点进入时调用打印当前时间的函数
        printCurrentTime();
    });
});
