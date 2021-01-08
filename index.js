var url = document.URL;
var target = url.substring(url.indexOf("?") + 1).replace("xurl=s://","https://");
window.location.replace(target);