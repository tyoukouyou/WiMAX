// section05 daigaku-select

function setupRadioDisplay() {
    // 获取所有class为product-choose、type为radio的input元素
    var radioInputs = document.querySelectorAll('.product-choose[type="radio"]');

    // 获取section05 daigaku-select元素
    var daigakuSelect = document.querySelector('.section05.daigaku-select');

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

// section05 gakunen-select

function setupDaigakuListDisplay() {
    // 获取id为daigakuList的select元素
    var daigakuListSelect = document.getElementById('daigakuList');

    // 获取class为"section05 gakunen-select"的section元素
    var gakunenSelectSection = document.querySelector('.section05.gakunen-select');

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

// section06 
function setupCont06Display() {
    // 获取id为daigakuList的select元素
    var daigakuListSelect = document.getElementById('daigakuList');


    // 获取id为daigakuList的select元素
    var gakunenListSelect = document.getElementById('gakunenList');

    // 获取class为"section05 gakunen-select"的section元素
    var section06Section = document.querySelector('.section06');

    // 封装处理逻辑的函数
    function handleDaigakuListChange() {
        // 检查select的value是否不为空,;同时满足两个条件
        if (daigakuListSelect.value !== '' && gakunenListSelect.value !== '') {
            // 设置display属性为block
            section06Section.style.display = 'block';
        } else {
            // 设置display属性为none
            section06Section.style.display = 'none';
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
    let productChooseRadios = document.querySelectorAll('.product-choose[type="radio"]');
    let daigakuList = document.getElementById('daigakuList');
    let confirmForm02 = document.getElementById('confirm-form-02');
    let gakunenList = document.getElementById('gakunenList');
    let confirmForm03 = document.getElementById('confirm-form-03');
    let postDateInput = document.getElementById('post-date');
    let confirmForm04 = document.getElementById('confirm-form-04');
  
    productChooseRadios.forEach(function (radio) {
      radio.addEventListener("change", function () {
        if (radio.checked) {
          let value = radio.value;
          updateConfirmForm(value);
        }
      });
    });
  
    daigakuList.addEventListener("change", function () {
      let selectedOptionValue = daigakuList.value;
      if (selectedOptionValue !== "") {
        confirmForm02.value = selectedOptionValue;
      }
    });
  
    gakunenList.addEventListener("change", function () {
      let selectedOptionValue = gakunenList.value;
      if (selectedOptionValue !== "") {
        confirmForm03.value = selectedOptionValue;
      }
    });
  
    postDateInput.addEventListener("change", function () {
      let selectedDate = postDateInput.value;
      confirmForm04.value = selectedDate;
    });
  
    function updateConfirmForm(value) {
      let confirmFormInput = document.getElementById('confirm-form-01');
      let confirmFormInput05 = document.getElementById('confirm-form-05');
      let confirmFormInput06 = document.getElementById('confirm-form-06');
  
      if (value === "モバイルルーター") {
        confirmFormInput.value = "モバイルルーター";
        confirmFormInput05.value = "Speed Wi-Fi 5G X12";
        confirmFormInput06.value = "アイスホワイト";

      } else if (value === "ホームルーター") {
        confirmFormInput.value = "ホームルーター";
        confirmFormInput05.value = "Speed Wi-Fi HOME 5G L13";
        confirmFormInput06.value = "ホワイト";
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
  $(".section04 .product-table p").on('click', (function () {
      $(this).next().slideToggle();
      $(this).toggleClass("open");
 }));
  $(".section-faq h3").on('click', (function () {
      $(this).next().slideToggle();
      $(this).toggleClass("faq_open");
 }));
 $(".section-faq h4").on('click', (function () {
      $(this).next().slideToggle();
 }));
});

