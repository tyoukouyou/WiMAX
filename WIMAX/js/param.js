// Cookieで

function getValuesAndStoreInDictionary() {
    // 存储所有需要获取值的输入元素的id
    // 値を取得する必要がある入力要素のidを全て格納します
    var inputIds = ['plan',
        'confirm-form-01',
        'confirm-form-02',
        'confirm-form-03',
        'confirm-form-04',
        'confirm-form-05',
        'confirm-form-06',
    ];

    // 创建一个空字典
    // 空の辞書を作成します
    var index_param = {};

    // 使用forEach遍历inputIds数组
    // inputIds配列をforEachでループします
    inputIds.forEach(function (inputId) {
        // 获取input元素
        // input要素を取得します
        var inputElement = document.getElementById(inputId);

        // 如果找到了input元素，将其值存入字典
        // input要素が見つかった場合、その値を辞書に格納します
        if (inputElement) {
            index_param[inputId] = inputElement.value;
        }
    });

    // 返回存储值的字典
    // 値を格納した辞書を返します
    return index_param;
}

function deliveryCookieData() {
    var index_param = getValuesAndStoreInDictionary();


    var jsonData = JSON.stringify(index_param);
    // 设置cookie的过期时间为1小时后
    var expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (1 * 60 * 60 * 1000)); // 1小时的毫秒数

    // 将JSON字符串存储在cookie中
    // JSON文字列をcookieに保存します
    document.cookie = "index_param=" + encodeURIComponent(jsonData) + "; expires=" + expirationDate.toUTCString() + "; path=/";
}

function getCookieData() {
    // 从cookie中获取字典并使用
    // cookieから辞書を取得して使用します
    var storedData = document.cookie.replace(/(?:(?:^|.*;\s*)index_param\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    if (storedData) {
        var parsedData = JSON.parse(decodeURIComponent(storedData));
        // console.log(parsedData);
    } else {
        console.log("No data found in the cookie.");
    }

    return parsedData;
}





