/*
这个文件是改变原来网页的。
*/
import randerHtml from './rander.js';
import tree from './lib/tree.js';
let bodyDom = document.getElementsByTagName('body')[0];
var dom = document.createElement('nav');
dom.setAttribute('id', 'contentDom'); // contentDom
dom.innerHTML = '哈哈哈哈';
bodyDom.appendChild(dom);
console.log('github.js ----------- 开始运行了');

chrome.extension.sendMessage({cmd: "hello"},function(response) {
  console.log('hello开始发送消息');
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.greeting === 'rander') {
    getUrlInfo(request.tab);
    sendResponse('success1');
  }
});

function getUrlInfo (tab) {
  var url = tab.url;
  var urlArr = url.split('github.com/');
  var user = {};

  if (urlArr[1].length > 0) { // 非首页
    var master = urlArr[1].split('/');
    user.name = master[0];
    if (master.length > 1) user.master = master[1]; // 带仓库
  }
  if (user.master && user.name) {
    randerHtml({
      username: user.name,
      url: `https://api.github.com/repos/${user.name}/${user.master}/git/trees/master?recursive=1`,
      repository: user.master
    });
  }
}
