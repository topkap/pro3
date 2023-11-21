
const 서점위도 = 37.5709413,
  서점경도 = 126.977787;

let 지도상자 = document.querySelector('#map'),
  지도옵션 = {
    center: new kakao.maps.LatLng(서점위도, 서점경도),
    level: 2
  };

let 교보문고 = new kakao.maps.Map(지도상자, 지도옵션);


let 교보문고마커위치 = new kakao.maps.LatLng(서점위도, 서점경도);
let 교보문고마커 = new kakao.maps.Marker({
  position: 교보문고마커위치
});

교보문고마커.setMap(교보문고);

let 정보창옵션 = {
  content: `<div class="iw">교보문고</div>`,
  removable: true
};

let 정보창 = new kakao.maps.InfoWindow(정보창옵션);

kakao.maps.event.addListener(교보문고마커, 'click', function () {
  정보창.open(교보문고, 교보문고마커);
});