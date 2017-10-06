辣鸡开发环境 Windows 之 node.js不安装在默认路径下的问题
----

产生的问题就是你npm装的包，没办法使用！
根本原因懒得探究，从解决方式来推测，有可能是安装时npm包的目录和默认安装的环境目录没匹配上，结果就导致了：你安装包是按照默认目录装的，但是因为你node装在了自定义的目录下，所以使用的时候是从自定义目录中提取，那必然是不存在的。
![npm 问题.png](https://i.loli.net/2017/10/06/59d661a9769d2.png)
所以，解决方式自然就是：配！环！境！

## 配！环！境！ ##

头疼死了。实在懒得配，就默认目录安装吧，方便快捷省心。

----

附上参考文章地址：[NodeJS、NPM安装配置步骤(windows版本) 以及环境变量](http://xiaoyaojones.blog.163.com/blog/static/28370125201351501113581/)
[追根溯源：Nodejs && npm超灵活安装 -- Windows篇](http://cnodejs.org/topic/4fae80c02e8fb5bc650a8360)

关键步骤：
1. 要先配置npm的全局模块的存放路径以及cache的路径，例如我希望将以上两个文件夹放在NodeJS的主目录下，便在NodeJS的安装根目录下**建立** **node_global**及**node_cache**两个文件夹。
2. 配置.npmrc文件
`npm config set prefix "<你的Node.js的根目录>\node_global"`
`npm config set cache "<你的Node.js的根目录>\node_global"`
3. 系统“环境变量”的配置
> 系统变量下新建"NODE_PATH"，输入“<你的Node.js的根目录>\node_global\node_modules”。（ps：这一步相当关键。）
> 由于改变了module的默认地址，所以上面的用户变量都要跟着改变一下（用户变量"PATH"修改为“<你的Node.js的根目录>\node_global\”）

因为配置完node之后，hexo命令不存在的问题就解决了。暂时可能跟git没有使用默认安装目录无关。

----
**tips：查看已安装的npm包的命令**
`npm list -g --depth 0`