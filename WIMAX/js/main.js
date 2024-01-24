// cont05 daigaku_select

function setupRadioDisplay() {
    // 获取所有class为product_choose、type为radio的input元素
    var radioInputs = document.querySelectorAll('.product_choose[type="radio"]');

    // 获取cont05 daigaku_select元素
    var daigakuSelect = document.querySelector('.cont05.daigaku_select');

    // 检查radio是否被选中，并设置display属性
    function handleRadioChange() {
        // 使用some遍历所有radio元素
        var isAnyRadioChecked = Array.from(radioInputs).some(function (radioInput) {
            return radioInput.checked;
        });

        // 设置display属性
        if (isAnyRadioChecked) {
            daigakuSelect.style.display = 'block';
        } else {
            daigakuSelect.style.display = 'none';
        }
    }

    // 为每个radio元素添加事件监听器
    radioInputs.forEach(function (radioInput) {
        radioInput.addEventListener('change', handleRadioChange);
    });

    // 初始化时执行一次，确保初始状态正确
    handleRadioChange();
}

// cont05 gakunen_select

function setupDaigakuListDisplay() {
    // 获取id为daigakuList的select元素
    var daigakuListSelect = document.getElementById('daigakuList');

    // 获取class为"cont05 gakunen_select"的section元素
    var gakunenSelectSection = document.querySelector('.cont05.gakunen_select');

    // 封装处理逻辑的函数
    function handleDaigakuListChange() {
        // 检查select的value是否不为空
        if (daigakuListSelect.value !== '') {
            // 设置display属性为block
            gakunenSelectSection.style.display = 'block';
        } else {
            // 设置display属性为none
            gakunenSelectSection.style.display = 'none';
        }
    }

    // 添加事件监听器
    daigakuListSelect.addEventListener('change', handleDaigakuListChange);

    // 初始化时执行一次，确保初始状态正确
    handleDaigakuListChange();
}

// cont06 
function setupCont06Display() {
    // 获取id为daigakuList的select元素
    var daigakuListSelect = document.getElementById('daigakuList');


    // 获取id为daigakuList的select元素
    var gakunenListSelect = document.getElementById('gakunenList');

    // 获取class为"cont05 gakunen_select"的section元素
    var cont06Section = document.querySelector('.cont06');

    // 封装处理逻辑的函数
    function handleDaigakuListChange() {
        // 检查select的value是否不为空,;同时满足两个条件
        if (daigakuListSelect.value !== '' && gakunenListSelect.value !== '') {
            // 设置display属性为block
            cont06Section.style.display = 'block';
        } else {
            // 设置display属性为none
            cont06Section.style.display = 'none';
        }
    }

    // 添加事件监听器、
    daigakuListSelect.addEventListener('change', handleDaigakuListChange);
    gakunenListSelect.addEventListener('change', handleDaigakuListChange);

    // 初始化时执行一次，确保初始状态正确
    handleDaigakuListChange();
}

// form
function setupProductChooseListener() {
    const productChooseRadios = document.querySelectorAll('.product_choose[type="radio"]');
    const daigakuList = document.getElementById('daigakuList');
    const confirmForm02 = document.getElementById('confirm-form-02');
    const gakunenList = document.getElementById('gakunenList');
    const confirmForm03 = document.getElementById('confirm-form-03');
    const postDateInput = document.getElementById('post-date');
    const confirmForm04 = document.getElementById('confirm-form-04');
  
    productChooseRadios.forEach(function (radio) {
      radio.addEventListener("change", function () {
        if (radio.checked) {
          const value = radio.value;
          updateConfirmForm(value);
        }
      });
    });
  
    daigakuList.addEventListener("change", function () {
      const selectedOptionValue = daigakuList.value;
      if (selectedOptionValue !== "") {
        confirmForm02.value = selectedOptionValue;
      }
    });
  
    gakunenList.addEventListener("change", function () {
      const selectedOptionValue = gakunenList.value;
      if (selectedOptionValue !== "") {
        confirmForm03.value = selectedOptionValue;
      }
    });
  
    postDateInput.addEventListener("change", function () {
      const selectedDate = postDateInput.value;
      confirmForm04.value = selectedDate;
    });
  
    function updateConfirmForm(value) {
      const confirmFormInput = document.getElementById('confirm-form-01');
  
      if (value === "モバイルルーター") {
        confirmFormInput.value = "モバイルルーター";
      } else if (value === "ホームルーター") {
        confirmFormInput.value = "ホームルーター";
      }
    }
  }
  
// 调用函数进行设置
setupRadioDisplay();

// 调用函数进行设置
setupDaigakuListDisplay();

// 调用函数进行设置
setupCont06Display();

// 调用函数
setupProductChooseListener();

// jquery

$(function(){
  $(".cont04 .column2 p").on('click', (function () {
      $(this).next().slideToggle();
      $(this).toggleClass("open");
 }));
  $(".cont_faq h3").on('click', (function () {
      $(this).next().slideToggle();
      $(this).toggleClass("faq_open");
 }));
 $(".cont_faq h4").on('click', (function () {
      $(this).next().slideToggle();
 }));
});

