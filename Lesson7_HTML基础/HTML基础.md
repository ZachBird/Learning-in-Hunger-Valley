HTML基础
----

### HTML简介 ###
超文本标记语言（英语：**H**yper**t**ext **M**arkup **L**anguage，简称：HTML）是一种用于创建网页的标准标记语言。HTML是一种基础技术，常与CSS、JavaScript一起被众多网站用于设计令人赏心悦目的网页、网页应用程序以及移动应用程序的用户界面。网页浏览器可以读取HTML文件，并将其渲染成可视化网页。HTML描述了一个网站的**结构语义**随着线索的呈现，使之成为一种**标记语言**而非编程语言。
HTML元素是构建网站的基石。HTML允许嵌入图像与对象，并且可以用于创建交互式表单，它被用来结构化信息——例如标题、段落和列表等等，也可用来在一定程度上描述文档的外观和语义。HTML的语言形式为尖括号包围的HTML元素（如`<html>`），浏览器使用HTML标签和脚本来诠释网页内容，但不会将它们显示在页面上。
HTML可以嵌入如JavaScript的脚本语言，它们会影响HTML网页的行为。网页浏览器也可以引用层叠样式表（CSS）来定义文本和其它元素的外观与布局。维护HTML和CSS标准的组织**万维网联盟**（W3C--World Wide Web Consortium,李爵士（Tim Berners-Lee）创建）鼓励人们使用CSS替代一些用于表现的HTML元素。

HTML主要是用来展示页面的**结构**。

### HTML语法 ###

~~有个鸡儿的语法~~

`<` `标签名` `>` `<` `/` `标签名` `>`

上面就是个标准的闭合标签的写法，当然还有部分标签可以不用闭合，不多单独记忆就好。

还有就是最前面要写DOCTYPE声明：`<!DOCTYPE HTML>` (也可以是小写的html,但DOCTYPE要大写)，这个是HTML5的写法，早期版本的写法[在这儿](https://www.w3.org/QA/2002/04/valid-dtd-list.html)，都很复杂。

不写声明的话，浏览器解析之后会出现一些奇怪的BUG，写不写自己掂量吧。

### 标签去哪儿看 ###

1. [MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)(优先查这个吧)

2. [W3Schools](https://www.w3schools.com/default.asp)(不翻墙上不了)

3. [W3school](http://www.w3school.com.cn/)([2]的国内仿站)

4. [W3Cschool](https://www.w3cschool.cn/)([2]的国内仿站)

5. [RUNOOB](http://www.runoob.com/)(菜鸟教程)

6. [W3C](https://www.w3.org/html/ig/zh/wiki/HTML5)(最权威，但贼鸡儿长，你确定要看吗？)

### 常用标签 ###

> tips: `<html>` `<head>` `<body>`三大结构标签都可以不写，但是`<title>`标签一定得写，不然会出错。（自己测试好像都可以不写......）

常见标签：`a`、`form`、`input`、`button`、`h1`、`p`、`ul`、`ol`、`small`、`strong`、`div`、`span`、`kbd`、`video`、`audio`、`svg`、`canvas`
基本上，你知道标签对应单词的意思，就知道这个标签怎么用了（语义化）
除了 `div` 和 `span`，其他标签都有默认样式(`ul`默认display: block，`body`默认margin: 8px)

### 空元素 ###

一个空元素（empty element）可能是 HTML，SVG，或者 MathML 里的一个不可能存在子节点（例如内嵌的元素或者元素内的文本）的element。**标签里面不能有内容**。

`HTML`，`SVG` 和 `MathML` 的规范都详细定义了每个元素能包含的具体内容（define very precisely what each element can contain）。许多组合是没有任何语义含义的，比如一个 `<audio>` 元素嵌套在一个 `<hr>` 元素里。

在 `HTML` 中，通常**在一个空元素上使用一个闭标签是无效的**。例如， `<input type="text"></input>` 的闭标签是无效的 HTML。

[空元素列表](https://developer.mozilla.org/zh-CN/docs/Glossary/%E7%A9%BA%E5%85%83%E7%B4%A0)


### 可以出现在head标签里的标签 ###

Elements

```html
<!-- Document Title -->
<title>Page Title</title>

<!-- Base URL to use for all relative URLs contained within the document -->
<base href="https://example.com/page.html">

<!-- External CSS -->
<link rel="stylesheet" href="styles.css">

<!-- In-document CSS -->
<style>
  /* ... */
</style>

<!-- JavaScript -->
<script src="script.js"></script>
<noscript><!--no JS alternative--></noscript>
```

具体来说，就是`title` (标题) ，`base` (baseURL) ， `link` 、 `style` (CSS) ， `script`、`noscript` (JS) 和很多用途的`meta`标签

meta的用途[在这里](https://github.com/joshbuchea/HEAD#meta)，要么就去搜索吧，有很多作用的。