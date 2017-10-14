/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function objMap (obj, arr1) {
  if (obj['$index'] || obj['$index'] === 0) { // 文件夹
    arr1[obj.$index].tree = [];
    for (let k in obj) {
      if (k === '$index') continue;
      arr1[obj.$index].tree.push(objMap(obj[k], arr1));
    }
    return arr1[obj.$index];
  } else { // 文件
    return arr1[obj];
  }
}

function sort (arr) {
  return arr.sort(function (a, b) {
    return a.info.size - b.info.size;
  });
}
function mapTree (arr, object) { // username: url: repository:
  for (let i = 0; i < arr.length; i++) {
    let info = {};
    info.index = i;
    info.arr = arr[i].path.split('/');
    info.size = info.arr.length;
    info.text = info.arr[info.size - 1];
    info.fold = false;
    info.aurl = '/' + object.username + '/' + object.repository + '/blob/master/' + arr[i].path;
    info.file = arr[i].type === 'blob' ? true : false;
    arr[i].info = info;
  }
  return arr;
}

/* harmony default export */ __webpack_exports__["a"] = ((arr1, object) => {
  let arr = sort(mapTree(arr1.concat([]), object));
  let newArr = [];
  let newObj = {};
  for (let i = 0; i < arr.length; i++) {

    if (arr[i].info.size === 1) {
      if (arr[i].info.file) newObj[arr[i].info.arr[0]] = arr[i].info.index;
      else newObj[arr[i].info.arr[0]] = {$index: arr[i].info.index};
    } else if (arr[i].info.size === 2) {
      if (arr[i].info.file) newObj[arr[i].info.arr[0]][arr[i].info.arr[1]] = arr[i].info.index;
      else newObj[arr[i].info.arr[0]][arr[i].info.arr[1]] = {$index: arr[i].info.index};
    } else if (arr[i].info.size === 3) {
      if (arr[i].info.file) newObj[arr[i].info.arr[0]][arr[i].info.arr[1]][arr[i].info.arr[2]] = arr[i].info.index;
      else newObj[arr[i].info.arr[0]][arr[i].info.arr[1]][arr[i].info.arr[2]] = {$index: arr[i].info.index};
    } else if (arr[i].info.size === 4) {
      if (arr[i].info.file) newObj[arr[i].info.arr[0]][arr[i].info.arr[1]][arr[i].info.arr[2]][arr[i].info.arr[3]] = arr[i].info.index;
      else newObj[arr[i].info.arr[0]][arr[i].info.arr[1]][arr[i].info.arr[2]][arr[i].info.arr[3]] = {$index: arr[i].info.index};
    } else if (arr[i].info.size === 5) {
      if (arr[i].info.file) newObj[arr[i].info.arr[0]][arr[i].info.arr[1]][arr[i].info.arr[2]][arr[i].info.arr[3]][arr[i].info.arr[4]] = arr[i].info.index;
      else newObj[arr[i].info.arr[0]][arr[i].info.arr[1]][arr[i].info.arr[2]][arr[i].info.arr[3]][arr[i].info.arr[4]] = {$index: arr[i].info.index};
    } else if (arr[i].info.size === 6) {
      if (arr[i].info.file) newObj[arr[i].info.arr[0]][arr[i].info.arr[1]][arr[i].info.arr[2]][arr[i].info.arr[3]][arr[i].info.arr[4]][arr[i].info.arr[5]] = arr[i].info.index;
      else newObj[arr[i].info.arr[0]][arr[i].info.arr[1]][arr[i].info.arr[2]][arr[i].info.arr[3]][arr[i].info.arr[4]][arr[i].info.arr[5]] = {$index: arr[i].info.index};
    } else if (arr[i].info.size === 7) {
      if (arr[i].info.file) newObj[arr[i].info.arr[0]][arr[i].info.arr[1]][arr[i].info.arr[2]][arr[i].info.arr[3]][arr[i].info.arr[4]][arr[i].info.arr[5]][arr[i].info.arr[6]] = arr[i].info.index;
      else newObj[arr[i].info.arr[0]][arr[i].info.arr[1]][arr[i].info.arr[2]][arr[i].info.arr[3]][arr[i].info.arr[4]][arr[i].info.arr[5]][arr[i].info.arr[6]] = {$index: arr[i].info.index};
    }
  }

  for (let k in newObj) {
    if (k === '$index') continue;
    newArr.push(objMap(newObj[k], arr1));
  }
  return newArr;
});


/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_tree_js__ = __webpack_require__(0);


console.log('background.js ----------- 开始运行了');

chrome.runtime.onMessage.addListener(function (req, sender, sendRes) {
  send(sender.tab);
});

function send (tab) {
  chrome.tabs.sendMessage(tab.id, {greeting: 'rander', tab: tab});
  console.log('获取到tab----sendMessage');
}


/***/ })

/******/ });