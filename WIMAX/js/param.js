function getValuesAndStoreInDictionary() {
    // 存储所有需要获取值的输入元素的id
    var inputIds = ['lastName',
        'firstName',
        'lastNameKana',
        'firstNameKana',
        'birthDay',
        'zipCode1',
        'zipCode2',
        'area',
        'address1',
        'address2',
        'telNo1',
        'telNo2',
        'telNo3',
        'email',
        'emailConfirm',
        'payerLastName',
        'payerFirstName',
        'payerLastNameKana',
        'payerFirstNameKana',
        'payerZipCode1',
        'payerZipCode2',
        'payerArea',
        'payerAddress1',
        'payerAddress2',
        'payerTelNo1',
        'payerTelNo2',
        'payerTelNo3',
        'payerEmail',
        'payerEmailConfirm',
    ];

    // 创建一个空字典
    var valuesDictionary = {};

    // 使用forEach遍历inputIds数组
    inputIds.forEach(function (inputId) {
        // 获取input元素
        var inputElement = document.getElementById(inputId);

        // 如果找到了input元素，将其值存入字典
        if (inputElement) {
            valuesDictionary[inputId] = inputElement.value;
        }
    });

    // 返回存储值的字典
    return valuesDictionary;
}

// 获取具有类名 "formarea" 的所有输入框
var formAreas = document.querySelectorAll('.formarea');

// 为每个输入框添加事件处理程序
formAreas.forEach(function (inputElement) {
    inputElement.addEventListener('blur', function () {
        getValuesAndStoreInDictionary(inputElement);
        var temp = getValuesAndStoreInDictionary();
        console.log('temp' + temp);
    });
});
