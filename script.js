//your JS code here. If required.
// Function to extract browser name and version from userAgent
function getBrowserInfo() {
  const userAgent = navigator.userAgent;
  let browserName = navigator.appName;
  let version = '' + parseFloat(navigator.appVersion);

  // Simple browser detection
  if (userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Edg") === -1 && userAgent.indexOf("OPR") === -1) {
    browserName = "Chrome";
    version = userAgent.match(/Chrome\/([\d.]+)/)[1];
  } else if (userAgent.indexOf("Firefox") > -1) {
    browserName = "Firefox";
    version = userAgent.match(/Firefox\/([\d.]+)/)[1];
  } else if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1) {
    browserName = "Safari";
    version = userAgent.match(/Version\/([\d.]+)/)[1];
  } else if (userAgent.indexOf("OPR") > -1 || userAgent.indexOf("Opera") > -1) {
    browserName = "Opera";
    version = userAgent.match(/(Opera|OPR)\/([\d.]+)/)[2];
  } else if (userAgent.indexOf("Edg") > -1) {
    browserName = "Edge";
    version = userAgent.match(/Edg\/([\d.]+)/)[1];
  } else if (userAgent.indexOf("Trident") > -1) {
    browserName = "Internet Explorer";
    version = userAgent.match(/rv:([\d.]+)/)[1];
  }

  return `You are using ${browserName} version ${version}`;
}

// Display info inside the div
document.getElementById('browser-info').innerText = getBro
