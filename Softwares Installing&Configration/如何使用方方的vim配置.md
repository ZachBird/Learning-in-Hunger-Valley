# 如何使用方方的vim配置 #

前提：你用的是 Linux 或 macOS 系统，因为 Windows 下有任何问题，我都不知道怎么解决。

1. 安装依赖
`npm i -g prettier`
2. 安装 plug.vim
`curl -fLo ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim`
3. 下载 vimrc 覆盖你的 ~/.vimrc
`mv ~/.vimrc ~/.old.vimrc ; curl -L https://raw.githubusercontent.com/FrankFang/dot-files/master/vimrc > ~/.vimrc`
4. 运行 `vim -c ":PlugInstall"` 等待安装，如果中途提示 molokai 出错，按回车就好。
退出重进 vim

5. 完成

## 用法 ##
----
### 如何使用 Emmet ###
在 HTML 文件里面输入 ! 然后 ctrl + y，哒哒！完成。

### 快捷键 ###
我们的 `<leader>` 键是 `<space>`，你可以搜索 mapleader 将它改成你喜欢的键位。

`leader` + `F`: 显示文件列表，按 q 或 ESC 可以退出文件列。

`leader` + `C` + `space`：注释

`Ctrl` + `Y`：Emmet，你也可以选中一段文字再按这个快捷键。

`leader` + `Y`：复制到系统剪切板

`leader` + P：粘贴自系统剪切板

`tab`：切换到下一个 buffer

`shift` + `tab`：切换到上一个 buffer

`leader` + `K`：kill 当前 buffer

`ctrl` + `P`：搜索文件，需要你安装好 ag：brew install ag

`ctrl` + `G`：搜索文件内容，需要 ag

`<ESC>=G`：格式化文件内容

更新1：

`ctrl` + `L`：格式化 JS 文件（只在 JS 文件里有效），需要安装 npm i -g prettier

### 如何更新你的 vim 配置？ ###
1. 重新下载 vimrc 

`mv ~/.vimrc ~/.old.vimrc ; curl -L https://raw.githubusercontent.com/FrankFang/dot-files/master/vimrc > ~/.vimrc`

2. 安装插件

`vim -c ":PlugInstall"`

3. 重启 vim

----

本文章版权归**方应杭**和**饥人谷**所有。

©2017 Frank Fang and Jirengu. All rights reserved.

----