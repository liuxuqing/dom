# DOM

## 节点
* node.nodeType
* node.nodeName/node.tagName
* Node.nodeValue

## 属性
* node.attributes
* node.hasAttribute( key )
* node.getAttribute( key )
* node.setAttribute( key, value )
* node.removeAttribute( key )

## 子节点
* node.children
* node.childNodes
* node.hasChildNodes()
* node.childElementCount

## DOM Tree

### 节点关系
* node.firstChild
* node.lastChild
* node.previousSibling
* node.nextSibling
* node.parentNode
* node.firstElementChild
* node.lastElementChild
* node.previousElementSibling
* node.nextElementSibling
* node.parentElement

### 节点查询
* node.getElementById( id )
* node.getElementsByTagName( tag )
* node.getElementsByName( name )
* node.getElementsByClassName( classname )
* node.querySelector( selector )
* node.querySelectorAll( selector )

### 节点检查和位置关系
* node.contains( _node )
* node.matches( selector )/node.matchesSelector( selector )
* node.isEqualNode( _node )
* node.compareDocumentPosition( _node )

### 创建新节点
* document.createElement( tag )
* document.createTextNode( text )
* document.createDocumentFragement()
* node.cloneNode( boolean )

### 更新到文档
* node.appendChild( _node )
* node.parentNode.insertBefore( _node, node )
* node.parentNode.removeChild( node )
* node.parentNode.replaceChild( _node, node )

### 插入标记
* node.insertAdjacentElement( position, _node )
* node.insertAdjacentHTML( position, htmlstring )
* node.insertAdjacentText( position, text )
* node.innerHTML
* node.outerHTML
* node.innerText 和 node.textContent
* node.outerText

## 文本节点
* document.createTextNode( text )
* textNode.nodeValue/textNode.data
* textNode.appendData( text )
* textNode.deleteData( offset, count )
* textNode.insertData( offset, text )
* textNode.replaceData( offset, count, text )
* textNode.splitText( offset )
* textNode.substringData( offset, count )
* node.normalize()
* node.length

## classList
* node.classList
* classList.add( classname )
* classList.remove( classname )
* classList.contains( classname )
* classList.toggle( classname )

## data-
* node.dataset.


## event

### 事件 bind/unbind
* node.on__ = callback;
* node.addEventListener( name, callback, boolean )
* node.removeEventListener( name, callback )
* node.dispatchEvent( event )

### event list
* MutationObserver
* visibilitychange
* DOMContentLoaded
* onpropertychange


## CSS
* window.getComputedStyle( 节点, 伪类 );
* document.defaultView.getComputedStyle( 节点, 伪类 );
* node.currentStyle
* node.style
* node.style.cssText

## XML
* xmlSerializer
* DOMparser

## shadow dom
document.registerElement( tag, prototype )


## 滚动
* element.scrollIntoView()
* scrollIntoViewIfNeeded()
* scrollByLines( lineCount )
* scrollByPages( pageCount )

## size
* element.offsetHeight
* element.offsetWidth -> (width+padding+border) -> include scrollbar
* element.offsetTop 
* element.offsetLeft -> 元素的左外边框至包含元素(offset.parent)的左内边框距离
* element.clientHeight
* element.clientWidth -> (width+padding) -> exclude scrollbar -> 可视区域尺寸
* element.scrollHeight
* element.scrollWidth -> 在没有滚动条情况下, 元素内容宽度 -> 内容实际尺寸
* element.scrollTop
* element.scrollLeft -> 滚动位置
* element.getBoundingClientRect() -> 返回相对于 viewport 四个方向值.
* node.getClientRects()


## other
* node.id
* node.className
* node.tabIndex
* node.spellcheck
* node.isContentEditable
* node.prefix
* node.localName -> 'svg:book'
* node.baseURI
* document.title
* document.URL
* document.domain
* document.activeElement
* document.hasFocus()
* document.readyState -> loading/complete
* document.head
* document.charset
* document.documentElement 只读, 获取任意文档的根元素
* window.toStaticHTML( string )


## TODO
* range