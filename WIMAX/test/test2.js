// script.js

function saveUserData() {
    const username = document.getElementById('username').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
  
    // 构建数据对象
    const userData = {
      'username': username,
      'age': age,
      'email': email
    };
  
    // 保存数据到本地存储
    saveData(userData);
  
    // 打印保存的数据到控制台
    console.log('Saved User Data:', userData);
  }
  