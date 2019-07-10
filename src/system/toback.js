import { Toast } from 'cube-ui'
document.addEventListener('plusready', function (a) {
    // 名单
    var whiteList = ['/login', '/index', '/personal']
    var first = '';
    const toast = Toast.$create({
        txt: '再按一次退出应用',
        time: 2000,
        type: 'warn'
    })
    plus.key.addEventListener('backbutton', function () {
      //获取地址栏目中的url
      var urls = location.hash.split('#')[1]
      if (whiteList.indexOf(urls) !== -1) {//判断是首页的时候点击二次退出app
        if (new Date().getTime() - first < 2000) {
          //  关闭程序
          plus.runtime.quit();
        } else {
          toast.show()
          first = new Date().getTime();
        }
      } else {
        history.go(-1)
      }
    }, false);
});