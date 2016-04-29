

function goToGoogle(){
  var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
  var isFirefox = typeof InstallTrigger !== 'undefined';
  var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
  var isIE = /*@cc_on!@*/false || !!document.documentMode;
  var isEdge = !isIE && !!window.StyleMedia;
  var isChrome = !!window.chrome && !!window.chrome.webstore;
  var isBlink = (isChrome || isOpera) && !!window.CSS;
  if(isChrome){
    return true
  } if(isFirefox){
    document.body.innerHTML = "This website depends on technology that is not supported by FireFox, please open this website in Google Chrome or Safari";
  } else {
    return
  }
}
