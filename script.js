function openSite(url) {
  var pswd = prompt("password")
    if (pswd === "1234") {
      var win = window.open('about:blank', '_blank');
      var iframe = win.document.createElement('iframe');
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.border = "none";
      iframe.src = url;
      win.document.body.appendChild(iframe);
    }
}
