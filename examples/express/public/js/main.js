$(document).ready(function(){

  // SIMPLE exmaple
  if($('#simple').length) {
    DrawBack.draw('#chart', 'linealChart', 'getData', {
      download: true
    });

    DrawBack.draw('#chart-twin', 'linealChart', 'getData', {
      sync: true,
      forceServer: true,
      urlBuilder: function (name, url, forceDownload) {
        return 'draw/' + name + '?url=/' + url + '&forceDownload=' + (forceDownload ? forceDownload : false);
      }
    });
  }

  // FLOT exmaple
  if($('#flot-example').length) {
//    DrawBack.draw('#flot-chart', 'linealBallsChart', 'getChartData', {
//      download: true,
//      urlBuilder: function (name, url, forceDownload) {
//        return 'draw/' + name + '?url=/' + url + '&forceDownload=' + (forceDownload ? forceDownload : false);
//      }
//    });

    DrawBack.draw('#flot-chart-twin', 'linealBallsChart', 'getChartData', {
      sync: true,
      forceServer: true,
      urlBuilder: function (name, url, forceDownload) {
        return 'draw/' + name + '?url=/' + url + '&forceDownload=' + (forceDownload ? forceDownload : false);
      }
    });
  }

})