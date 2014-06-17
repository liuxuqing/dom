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
* node.matches( selector )
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
* node.insertAdjacentElement( position, _node )
* node.insertAdjacentHTML( position, htmlstring )
* node.insertAdjacentText( position, text )
* node.innerHTML
* node.outerHTML
* node.innerText 和 node.textContent
* node.outerText

## 文本节点
* node.normalize()
* textNode.splitText( offset );

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


## size
* node.getClientRects()
* node.getBoundingClientRect()
* element.scrollIntoView()
* element.clientHeight
* element.clientWidth
* element.scrollHeight
* element.scrollWidth
* element.scrollLeft
* element.scrollTop
* element.clientLeft
* element.clientTop


## other
* node.id
* node.className
* node.tabIndex
* node.spellcheck
* node.isContentEditable
* node.prefix
* node.localName -> 'svg:book'
* node.baseURI
* document.activeElement
* document.documentElement 只读, 获取任意文档的根元素
* window.toStaticHTML( string )
