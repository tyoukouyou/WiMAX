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
}
step1_init();

// 自定义初始化函数
function init() {
    init_step_1 = false;
    return init_step_1;
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
            // Remove 'active' class from current STEP1 dl
            $(".step-container .cont dl.active").removeClass("active");

            // Add 'active' class to the next dl (STEP2)
            $(".step-container .cont dl:contains('STEP2')").removeClass("next");
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
        // Remove 'active' class from current STEP2 dl
        $(".step-container .cont dl.active").removeClass("active");
        $(".step-container .cont dl:contains('STEP2')").addClass("next");


        // Add 'active' class to the previous dl (STEP1)
        $(".step-container .cont dl:contains('STEP1')").addClass("active");

        // Remove 'next' class from the next dl (STEP3)
        $(".step-container .cont dl:contains('STEP3')").removeClass("next");

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
});


