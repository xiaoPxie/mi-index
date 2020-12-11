# 小米官网主页
```
html + css，vs code
部分界面使用了flex，所以兼容性：ie10/10+

遇到问题：
1、ie上图片链接有边框，解决方法："border:none"
2、ie上iconfont不显示，其他浏览器则正常，首先排查了@font-face的正确写法
  如：@font-face {
    font-family: 'iconfont';
    src: url('font_2263102_lp2buor4hdd.eot'); /* IE9*/
    src: url('font_2263102_lp2buor4hdd.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('font_2263102_lp2buor4hdd.woff') format('woff'), /* chrome、firefox */
         url('font_2263102_lp2buor4hdd.ttf')  format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
         url('font_2263102_lp2buor4hdd.svg#uxiconfont') format('svg'); /*  iOS 4.1- */
  }
  然后，发觉阿里上的iconfont的url会导致ie浏览器无法正常显示字体图标，最后解决方法：eot、ttf、woff、svg下载到本地！！
  
动态效果，编写中。。。
```
