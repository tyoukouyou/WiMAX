// 调用类函数
function toggleCheckboxes(checkboxName) {
    var checkboxes = document.querySelectorAll('input[name="' + checkboxName + '"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = !checkbox.checked;
    });
}



var init_step_1 = false;

// 页面初始化时，加载 step1.html 的内容
function step1_init() {
    // 使用 AJAX 加载 step1.html 的内容
    $.ajax({
        url: "./step2.html", // 替换为实际的文件路径
        type: "GET",
        dataType: "html",
        success: function (response) {
            // 使用响应更新 main 标签的内容
            $("main .container").html(response);
        },
        error: function () {
            alert("加载内容时出错");
        }
    });
}
step1_init();

// 自定义初始化函数
function init() {
    init_step_1 = false;
    return init_step_1;
}
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

function getValuesAndStoreInDictionary() {


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

function restoreValuesFromDictionary(valuesDictionary) {
    // 使用forEach遍历inputIds数组
    inputIds.forEach(function (inputId) {
        // 获取input元素
        var inputElement = document.getElementById(inputId);

        // 如果找到了input元素，将字典中的值设置为其值
        if (inputElement) {
            inputElement.innerText  = valuesDictionary[inputId];
        }
    });
}




// 加载类函数
$(document).ready(function () {
    // check form data
    function checkFormData() {
        init();
        // Check important agreement radio button
        var importantAgreement = document.getElementById("important_agreement_agree");
        var error01 = document.getElementById("error-01");

        if (!importantAgreement.checked) {
            error01.style.display = "block";
        } else {
            error01.style.display = "none";
        }

        // Check service agreement checkboxes
        var serviceAgreements = document.getElementsByName("service_agreement_check");
        var error02 = document.getElementById("error-02");
        var allChecked = true;

        for (var i = 0; i < serviceAgreements.length; i++) {
            if (!serviceAgreements[i].checked) {
                allChecked = false;
                break;
            }
        }

        if (!allChecked) {
            error02.style.display = "block";
        } else {
            error02.style.display = "none";
        }

        if (allChecked && importantAgreement.checked) {
            init_step_1 = true;
            return init_step_1;
        }

        console.log(init_step_1);
    }

    // 使用事件委托处理步骤按钮的点击事件
    $(document).on('click', '#step2_next_btn', function () {

        checkFormData(init_step_1)
        if (init_step_1) {
            // Remove 'active' & 'next' class
            $(".step-container .cont dl.active").removeClass("active");
            $(".step-container .cont dl.next").removeClass("next");

            // Add 'active' class to the next dl (STEP2)
            $(".step-container .cont dl:contains('STEP2')").addClass("active");

            // Add 'next' class to the next dl (STEP3)
            $(".step-container .cont dl:contains('STEP3')").addClass("next");

            // 使用 AJAX 加载 step2.html 的内容
            $.ajax({
                url: "./step2.html", // 替换为实际的文件路径
                type: "GET",
                dataType: "html",
                success: function (response) {
                    // 使用响应更新 main 标签的内容
                    $("main .container").html(response);
                },
                error: function () {
                    alert("加载内容时出错");
                }
            });
        }
        else {
            alert("チェックされていない項目があります。");
        }
    });

    $(document).on('click', '#step1_back_btn', function () {
        // Remove 'active' & 'next' class
        $(".step-container .cont dl.active").removeClass("active");
        $(".step-container .cont dl.next").removeClass("next");

        // Add 'active' class to the previous dl (STEP1)
        $(".step-container .cont dl:contains('STEP1')").addClass("active");

        // Add 'next' class to the next dl (STEP2)
        $(".step-container .cont dl:contains('STEP2')").addClass("next");


        // 使用 AJAX 加载 step1.html 的内容
        $.ajax({
            url: "./step1.html", // 替换为实际的文件路径
            type: "GET",
            dataType: "html",
            success: function (response) {
                // 使用响应更新 main 标签的内容
                $("main .container").html(response);
            },
            error: function () {
                alert("加载内容时出错");
            }
        });
    });

    $(document).on('click', '#step3_next_btn', function () {
        // Remove 'active' & 'next' class
        $(".step-container .cont dl.active").removeClass("active");
        $(".step-container .cont dl.next").removeClass("next");


        // Add 'active' class to the next dl (STEP3)
        $(".step-container .cont dl:contains('STEP3')").addClass("active");

        // Add 'active' class to the next dl (STEP4)
        $(".step-container .cont dl:contains('STEP4')").addClass("next");



        var valuesDictionary = getValuesAndStoreInDictionary();
        // console.log(valuesDictionary);

        // 使用 AJAX 加载 step3.html 的内容
        $.ajax({
            url: "./step3.html", // 替换为实际的文件路径
            type: "GET",
            dataType: "html",
            success: function (response) {
                // 使用响应更新 main 标签的内容
                $("main .container").html(response);

                // 将值设置回元素
            restoreValuesFromDictionary(valuesDictionary);
            },
            error: function () {
                alert("加载内容时出错");
            }
        });



    });

    $(document).on('click', '#step2_back_btn', function () {
        // Remove 'active' & 'next' class
        $(".step-container .cont dl.active").removeClass("active");
        $(".step-container .cont dl.next").removeClass("next");

        // Add 'active' class to the previous dl (STEP2)
        $(".step-container .cont dl:contains('STEP2')").addClass("active");

        // Add 'next' class to the next dl (STEP3)
        $(".step-container .cont dl:contains('STEP3')").addClass("next");


        // 使用 AJAX 加载 step2.html 的内容
        $.ajax({
            url: "./step2.html", // 替换为实际的文件路径
            type: "GET",
            dataType: "html",
            success: function (response) {
                // 使用响应更新 main 标签的内容
                $("main .container").html(response);
            },
            error: function () {
                alert("加载内容时出错");
            }
        });
    }
    );

});


