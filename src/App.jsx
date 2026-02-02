import React, { useEffect, useRef, useState } from 'react';
import './App.css';
   
// 빈티지 샵 데이터
const SHOP_DATA = [
  // 🟢 마포구 (망원/합정/홍대)
  { 
    id: 1, region: "마포구", title: "오사키", lat: 37.553900, lng: 126.902300,
    profile: "/images/o0saki-logo.jpg",
    images: [
      "/images/o0saki1.jpg",
      "/images/o0saki2.jpg",
      "/images/o0saki3.jpg"
    ],
    link: "https://fruitsfamily.com/seller/1eog?sort=NEW", 
    insta: "https://www.instagram.com/o0saki/"
  },
  { 
    id: 2, region: "마포구", title: "미떼", lat: 37.554600, lng: 126.901500,
    profile: "/images/mtsh-logo.jpg",
    images: [
      "/images/mtsh1.jpg",
      "/images/mtsh2.jpg",
      "/images/mtsh3.jpg"
    ],
    link: "https://www.mtshseoul.co.kr/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnnmKYWpvCRi-u8Cy5kzNNDtkD896VQriFcL-Lv33EW9MS_Ri2Mo1Ftz2r_N8_aem_7h844c6Uxxq-nz5MAxttDA", 
    insta: "https://www.instagram.com/mtsh_seoul/"
  },
  { 
    id: 3, region: "마포구", title: "도비가", lat: 37.549200, lng: 126.905800,
    profile: "/images/dobbyga-logo.jpg",
    images: [
      "/images/dobbyga1.jpg",
      "/images/dobbyga2.jpg",
      "/images/dobbyga3.jpg"
    ],
    link: "https://fruitsfamily.com/seller/5fdf?sort=NEW", 
    insta: "https://www.instagram.com/dobbyga_/"
  },
  { 
    id: 4, region: "마포구", title: "athoce", lat: 37.564500, lng: 126.905400,
    profile: "/images/athoce-logo.jpg",
    images: [
      "/images/athoce1.png",
      "/images/athoce2.jpg",
      "/images/athoce3.jpg"
    ],
    link: "https://map.naver.com/p/search/athoce", 
    insta: "https://www.instagram.com/athoce.seoul/"
  },

  // 🟣 용산구 (이태원/해방촌/용산)
  { 
    id: 5, region: "용산구", title: "NOBOUNDARIEZ", lat: 37.537600, lng: 127.001600,
    profile: "/images/noboundariez-logo.jpg",
    images: [
      "/images/noboundariez1.jpg",
      "/images/noboundariez2.jpg",
      "/images/noboundariez3.jpg"
    ],
    link: "https://map.naver.com/p/search/노바운더리즈",
    insta: "https://www.instagram.com/noboundariez_gallery/"
  },
  { 
    id: 6, region: "용산구", title: "시아와세 인테리어", lat: 37.528400, lng: 126.972200,
    profile: "/images/siawase-logo.jpg",
    images: [
      "/images/siawase1.jpg",
      "/images/siawase2.jpg",
      "/images/siawase3.jpg"
    ],
    link: "https://map.naver.com/p/search/시아와세인테리어", 
    insta: "https://www.instagram.com/siawaseinterior/"
  },
  { 
    id: 7, region: "용산구", title: "아카이빈", lat: 37.542800, lng: 126.986300,
    profile: "/images/archivin-logo.jpg",
    images: [
      "/images/archivin1.jpg",
      "/images/archivin2.jpg",
      "/images/archivin3.jpg"
    ],
    link: "https://archivin.kr/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnXbX6al0J5cZgOzHHv5lmN1zssbGWH42MRjJVIpUWLX_jFVx8Td_jqhW59-A_aem_4JWWO7mrNKKGXbMQJ3tf8A", 
    insta: "https://www.instagram.com/archivin.kr/"
  },
  { 
    id: 8, region: "용산구", title: "펜트하우스샵", lat: 37.534800, lng: 126.992200,
    profile: "/images/phshop-logo.jpg",
    images: [
      "/images/phshop1.jpg",
      "/images/phshop2.jpg",
      "/images/phshop3.jpg"
    ],
    link: "https://penthouseshop.co.kr/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnPLheNeKFkIaEuHYhZpDvyDxc4vGpuM1DvIYmk7OS8pG-q06Nuy9Xg8oZ6lc_aem_q4-Dg45H2Tg5ax12jRk4Rg", 
    insta: "https://www.instagram.com/penthouse.shop/"
  },

  // 🔵 종로/중구 (을지로/서촌/사직)
  { 
    id: 9, region: "종로/중구", title: "테키토", lat: 37.557400, lng: 127.016300,
    profile: "/images/tekito-logo.jpg",
    images: [
      "/images/tekito1.jpg",
      "/images/tekito2.jpg",
      "/images/tekito3.jpg"
    ],
    link: "https://fruitsfamily.com/seller/190l?sort=NEW", 
    insta: "https://www.instagram.com/tekito_seoul/"
  },
  { 
    id: 10, region: "종로/중구", title: "Itsyourshopvous", lat: 37.577600, lng: 126.971500,
    profile: "/images/ityourshopvous-logo.jpg",
    images: [
      "/images/ityourshopvous1.jpg",
      "/images/ityourshopvous2.jpg",
      "/images/ityourshopvous3.jpg"
    ],
    link: "https://itsyourshopvous.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnNPK9skVRGuMyy_RWA7a3t_mbordQZSmdvRQsDzF2zZfTnKdUAoyLvBQJMxw_aem_g5qZrvF5ZxMslRlMj5mPGQ", 
    insta: "https://www.instagram.com/itsyourshopvous/"
  },
  { 
    id: 11, region: "종로/중구", title: "티피컬라이프큐레이션", lat: 37.563000, lng: 126.987700,
    profile: "/images/typical-logo.jpg",
    images: [
      "/images/typical1.jpg",
      "/images/typical2.jpg",
      "/images/typical3.jpg"
    ],
    link: "https://typicallifecuration.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnnc1gNpqgMo3_sRAA27cMbezTVK-2fhZAKSbdUUmMXUa8YoFPYol8-Lgi11c_aem_uXlmTX4szRE4CT67VDw7fw", 
    insta: "https://www.instagram.com/typicallife.curation/"
  },
  { 
    id: 12, region: "종로/중구", title: "cemeterypark", lat: 37.576100, lng: 126.966700,
    profile: "/images/cemeterypark-logo.jpg",
    images: [
      "/images/cemetery1.jpg",
      "/images/cemetery2.png",
      "/images/cemetery3.png"
    ],
    link: "https://cemeterypark.kr/product/list.html?cate_no=24", 
    insta: "https://www.instagram.com/cemeterypark/"
  },

  // 🟠 성북/서대문 (안암/연희)
  { 
    id: 13, region: "성북/서대문", title: "킷사카라수", lat: 37.566700, lng: 126.930400,
    profile: "/images/karasu-logo.jpg",
    images: [
      "/images/karasu1.jpg",
      "/images/karasu2.jpg",
      "/images/karasu3.jpg"
    ],
    link: "https://fruitsfamily.com/seller/420k?sort=NEW", 
    insta: "https://www.instagram.com/karasu_vtg/"
  },
  { 
    id: 14, region: "성북/서대문", title: "rentedroom", lat: 37.576000, lng: 126.920800,
    profile: "/images/rentedroom-logo.jpg",
    images: [
      "/images/rentedroom1.jpg",
      "/images/rentedroom2.jpg",
      "/images/rentedroom3.jpg"
    ],
    link: "https://rentedroom.kr/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn--ZWcHuWj5YDjkKz2NZuGoO22QtADKaf2g3qU7tezfflDjajUojkYtBAS6g_aem_JrepwbYP7WniT0ZgtMR_cQ", 
    insta: "https://www.instagram.com/rentedroom.kr/"
  },
  { 
    id: 15, region: "성북/서대문", title: "deliroom", lat: 37.585200, lng: 127.028600,
    profile: "/images/deliroom-logo.jpg",
    images: [
      "/images/deliroom1.jpg",
      "/images/deliroom2.jpg",
      "/images/deliroom3.jpg"
    ],
    link: "https://map.naver.com/p/search/델리룸", 
    insta: "https://www.instagram.com/deliroom.shop/"
  },
  { 
    id: 16, region: "성북/서대문", title: "socio", lat: 37.585800, lng: 127.029200,
    profile: "/images/socio-logo.jpg",
    images: [
      "/images/socio1.jpg",
      "/images/socio2.jpg",
      "/images/socio3.jpg"
    ],
    link: "https://socio.kr/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn5boPVDjREsVjLILOWVsxJIjqKaKX9ZxldShwKHI7_mRoLb7_eryGBLR894M_aem_uwpe3_PZZJaih6KobVB2sg", 
    insta: "https://www.instagram.com/socioshop_/"
  },

  // 🔴 강남구
  { 
    id: 17, region: "강남구", title: "mine_archive", lat: 37.521800, lng: 127.022300,
    profile: "/images/mine-logo.jpg",
    images: [
      "/images/mine1.jpg",
      "/images/mine2.jpg",
      "/images/mine3.jpg"
    ],
    link: "https://minearchive.co.kr/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnAqPGRsxOQi-19rEcXv2xIByE6c47KPcU8dRzNj1MplgYJSV-FztLuewDgjc_aem_Chvld8niw7S6PoOZQwxRdQ", 
    insta: "https://www.instagram.com/mine_archive_shop/"
  },
];

function App() {
  const mapElement = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);

  // 상태 관리 (React State)
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 사이드바 열림/닫힘
  const [currentShops, setCurrentShops] = useState(SHOP_DATA); // 현재 보여줄 샵 목록
  const [searchText, setSearchText] = useState(""); // 검색어
  const [expandedRegion, setExpandedRegion] = useState(null); // 현재 펼쳐진 지역이 어디인지 기억하는 변수

  // 초기 지도 로드
  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    // 지도 생성 (화면 꽉 채우기)
    const mapOptions = {
      center: new naver.maps.LatLng(37.554600, 126.970600),
      zoom: 15,
      zoomControl: true, // 줌 버튼 표시
      zoomControlOptions: { position: naver.maps.Position.TOP_RIGHT },
    };

    mapRef.current = new naver.maps.Map(mapElement.current, mapOptions);
  }, []);

    // 마커 & 정보창 만들기
    useEffect(() => {
    const { naver } = window;
    if (!mapRef.current || !naver) return;

    // (A) 기존 마커 싹 지우기
    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];

    // (B) 지도 범위 재설정을 위한 Bounds 객체 생성
    const bounds = new naver.maps.LatLngBounds();

    let openedInfowindow = null;

    const mapListener = naver.maps.Event.addListener(mapRef.current, "click", () => {
      if (openedInfowindow) {
        openedInfowindow.close();
        openedInfowindow = null;
      }
    });

    // (C) 새 마커 찍기
    currentShops.forEach((shop) => {
      const position = new naver.maps.LatLng(shop.lat, shop.lng);
      
      const marker = new naver.maps.Marker({
        position: position,
        map: mapRef.current,
        title: shop.title,
        icon: {
           content: `<div style="color:black; font-size:30px;">📍</div>`, // 간단한 이모지 마커
           size: new naver.maps.Size(24, 24),
           anchor: new naver.maps.Point(12, 24)
        }
      });

      naver.maps.Event.addListener(mapRef.current, "click", () => {
      if (openedInfowindow) {
        openedInfowindow.close();
        openedInfowindow = null;
      }
    });

      // 정보창(말풍선) 내용 만들기
      const contentString = `
        <div style="padding:15px; min-width:220px; text-align:center; color:#000;">

          <div style="margin-bottom: 1px;">
            <img src="${shop.profile}" alt="profile" 
              style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover; box-shadow: 0 2px 5px rgba(0,0,0,0.2);" />
          </div>

          <h4 style="margin:0 0 5px; color:#333; font-size: 16px;">${shop.title}</h4>

          <div style="display: flex; gap: 8px; justify-content: center; margin-bottom: 12px;">
          ${shop.images.map(imgUrl => `
              <img src="${imgUrl}" alt="${shop.title} 사진" 
                   style="width: 70px; height: 70px; object-fit: cover; border-radius: 6px; border: 1px solid #eee;" />
            `).join('')}
          </div>
          
          <div style=" display: flex; gap: 10px; justify-content: center;"> 
            <a href="${shop.link}" target="_blank" style="
              padding:5px 15px; 
              background:#000000; 
              color:white; 
              text-decoration:none; 
              border-radius:4px; 
              font-size:12px; 
              font-weight:bold;">
              홈페이지
            </a>
            
            ${shop.insta ? `
              <a href="${shop.insta}" target="_blank" style="
                padding:5px 10px; 
                background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); 
                color:white; 
                text-decoration:none; 
                border-radius:4px; 
                font-size:12px; 
                font-weight:bold;">
                Instagram
              </a>
            ` : ''}
          </div>
        </div>
      `;

      // 정보창 객체 생성
      const infoWindow = new naver.maps.InfoWindow({
        content: contentString,
        maxWidth: 300,
        backgroundColor: "white",
        borderColor: "#ccc",
        borderWidth: 1,
        anchorSize: new naver.maps.Size(10, 10), // 말풍선 꼬리 크기
        anchorSkew: true,
        anchorColor: "white",
      });

      // 4. 클릭 이벤트 (마커를 누르면 정보창 열기/닫기)
      naver.maps.Event.addListener(marker, "click", () => {
        // 1. 만약 이 마커의 정보창이 이미 지도에 열려있다면? -> 닫기!
        if (infoWindow.getMap()) {
            infoWindow.close();
            openedInfowindow = null; // 이제 열린 창 없음
        } 
        // 2. 안 열려 있다면? -> 열기!
        else {
            // 만약 다른 마커의 정보창이 열려있다면 먼저 닫아줌 (깔끔하게)
            if (openedInfowindow) {
                openedInfowindow.close();
            }
            
            // 내 정보창을 염
            infoWindow.open(mapRef.current, marker);
            // "이제 내가 대장이야"라고 기록
            openedInfowindow = infoWindow;
        }
      });

      // 마커 관리 배열에 넣기
      markersRef.current.push(marker);
      // 지도 범위에 이 좌표 포함시키기
      bounds.extend(position);
    });

    if (currentShops.length === 1) {
      // 1. 샵이 하나일 때: 적당히 줌(16)하고 부드럽게 이동
      const target = new naver.maps.LatLng(currentShops[0].lat, currentShops[0].lng);
      mapRef.current.morph(target); 
      mapRef.current.setZoom(16); // 👈 이 숫자를 15로 바꾸면 더 멀리, 17로 하면 더 가까이 보입니다.
    } else if (currentShops.length > 1) {
      // 2. 샵이 여러 개일 때: 모든 마커가 보이도록 자동 조절
      mapRef.current.fitBounds(bounds, { top: 50, right: 50, bottom: 50, left: 50 });
    }

    // (cleanup) 컴포넌트가 다시 그려질 때 기존 맵 클릭 리스너 제거
    return () => {
      naver.maps.Event.removeListener(mapListener);
    };

    }, [currentShops]);

    // 기능 1: 카테고리(지역) 클릭 처리
  const handleRegionClick = (region) => {
    if (region === "전체") {
      setCurrentShops(SHOP_DATA);
      setExpandedRegion(null);
    } 
    else {
      // 이미 열려있는 지역을 또 누르면? -> 닫기 (토글)
      if (expandedRegion === region) {
        setExpandedRegion(null); 
        // 닫아도 지도는 해당 지역 필터 유지 or 전체로? -> 보통은 유지
      } else {
        // 안 열려있으면 -> 열기
        setExpandedRegion(region);
        
        // 지도도 해당 지역 샵들로 필터링
        const filtered = SHOP_DATA.filter(shop => shop.region === region);
        setCurrentShops(filtered);
      }
    }
  };

  const handleShopClick = (targetShop) => {
    // 1. 지도에 이 샵 하나만 보여주기 (그러면 지도가 알아서 거기로 줌인 됨)
    setCurrentShops([targetShop]);
    
    // 2. 모바일이라면 메뉴 닫아주기 (지도 보라고)
    if (window.innerWidth < 768) {
      setIsMenuOpen(false);
    }
  };

  // 기능 2: 검색 처리
  const handleSearch = (e) => {
    const text = e.target.value;
    setSearchText(text);
    if (text === "") {
      setCurrentShops(SHOP_DATA);
    } else {
      const filtered = SHOP_DATA.filter(shop => 
        shop.title.includes(text) || shop.region.includes(text)
      );
      setCurrentShops(filtered);
      setExpandedRegion(null);
    }
  };

  // 지역 목록 추출 (중복 제거)
  const regions = ["전체", ...new Set(SHOP_DATA.map(shop => shop.region))];
  
  return (
    <div className="app-container">
      {/* 지도 위에 떠있는 제목 박스 */}
      <div className="map-title">
        My Vintage Map
      </div>
      
      {/* 메뉴 버튼 */}
      <button className='menu-btn' onClick={() => setIsMenuOpen(true)}>
        ☰
      </button>

      {/* 사이드 바 */}
      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <button className="close-btn" onClick={() => setIsMenuOpen(false)}>✕</button>
        </div>

        {/* 검색창 */}
        <div className="search-box">
          <input 
            type="text" 
            placeholder="샵 이름이나 지역 검색..." 
            value={searchText}
            onChange={handleSearch}
          />
        </div>

      {/* 지역 리스트 */}
        <ul className="category-list">
          {regions.map((region, index) => (
            <React.Fragment key={index}>
              {/* 상위 지역 목록 */}
              <li 
                className="category-item" 
                onClick={() => handleRegionClick(region)}
                style={{ 
                  backgroundColor: expandedRegion === region ? '#f0f0f0' : 'white',
                  borderLeft: expandedRegion === region ? '5px solid #03c75a' : 'none'
                }}
              >
                <div style={{display:'flex', justifyContent:'space-between'}}>
                  <span>{region}</span>
                  <span className="sub-item">
                    {region === '전체' ? SHOP_DATA.length : SHOP_DATA.filter(s => s.region === region).length}
                    {region !== '전체' && (expandedRegion === region ? ' ▲' : ' ▼')}
                  </span>
                </div>
              </li>

              {/* 🔥 [핵심] 하위 샵 목록 (조건부 렌더링) */}
              {region !== "전체" && expandedRegion === region && (
                <ul className="sub-shop-list">
                  {SHOP_DATA
                    .filter(shop => shop.region === region)
                    .map(shop => (
                      <li 
                        key={shop.id} 
                        className="sub-shop-item"
                        onClick={(e) => {
                          e.stopPropagation(); // 부모(지역) 클릭 이벤트 방지
                          handleShopClick(shop);
                        }}
                      >
                        - {shop.title}
                      </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
      
      {/* 지도가 그려질 영역 (화면 전체) */}
      <div ref={mapElement} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}

export default App;