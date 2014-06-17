
function getOffsetLeft( element ) {
  var actualLeft = element.offsetLeft;
  var current = element.offsetParent;
  while ( current !== null ) {
    actualLeft += current.offsetLeft;
    current = current.offsetParent;
  }
  return actualLeft;
}

function getOffsetTop( element ) {
  var actualLeft = element.offsetTop;
  var current = element.offsetParent;
  while ( current !== null ) {
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }
  return actualTop;
}

function getViewport() {
  return {
    width: (document.body || document.documentElement).clientWidth,
    height: ( document.body || document.documentElement).clientHeight
  }
}

function getDocumentSize() {
  return {
    height: Math.max( document.documentElement.scrollHeight, document.documentElement.clientHeight ),
    width: Math.max( document.documentElement.scrollWidth, document.documentElement.clientWidth )
  };
}