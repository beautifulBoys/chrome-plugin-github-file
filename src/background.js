import tree from './lib/tree.js';

console.log('background.js ----------- 开始运行了');

chrome.runtime.onMessage.addListener(function (req, sender, sendRes) {
  send(sender.tab);
});

function send (tab) {
  chrome.tabs.sendMessage(tab.id, {greeting: 'rander', tab: tab});
  console.log('获取到tab----sendMessage');
}
