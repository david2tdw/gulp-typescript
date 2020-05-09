<center><font size=15>gulp</font></center>
## gulp
  gulp定义：基于流的自动化构建工具。

## webpack
  webpack定义：webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。

## 区别
  gulp类似Ant、Maven，是一个Task Runner。而webpack是一个模块化解决方案。

## gulp能做什么
- JavaScript和CSS的版本问题
- 性能优化
  　文件合并
  　文件压缩
- 添加浏览器前缀
- 单元测试
- 代码分析
## 步骤
检查 node、npm
```
node -v
npm -v
```
安装 gulp 命令行工具

```
npm install --global gulp-cli
```

安装 gulp
```
npm install --save-dev gulp
```

检查 gulp 版本
```
gulp -v
```

查看task执行顺序

```
gulp --tasks
```

## 主要API
- task(): 创建任务。
- src()： 创建一个流，用于从文件系统读取 Vinyl 对象。
- dest()： 创建一个用于将 Vinyl 对象写入到文件系统的流。
- series()：顺序依次执行任务。
- parallel()： 并行执行任务。

[gulp中文官网](http://www.gulpjs.com.cn/)
