// param.js

function saveData(dataObject) {
    Object.keys(dataObject).forEach(key => {
      localStorage.setItem(key, JSON.stringify(dataObject[key]));
    });
  }
  
  function getData(keys) {
    const dataObject = {};
    keys.forEach(key => {
      const storedValue = localStorage.getItem(key);
      dataObject[key] = storedValue ? JSON.parse(storedValue) : null;
    });
    return dataObject;
  }
  
  function removeData(keys) {
    keys.forEach(key => {
      localStorage.removeItem(key);
    });
  }
  
  function clearAllData() {
    localStorage.clear();
  }
  