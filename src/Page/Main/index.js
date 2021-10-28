import React, { useState, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import axios from 'axios';
import { MainWrapper } from './style.js';

const Main = () => {
  const [curLocation, setCurLocation] = useState({ city: null, weather: null, temp: null, day: null });
  const [isLoading, setIsLoading] = useState(true);
  const [gender, setGender] = useState(null);

  const onChangeGender = (e) => {
    console.log(e.target.value);
    if (e.target.value === 'male' || e.target.value === 'female') setGender(e.target.value);
    else setGender(null);
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      let lat = pos.coords.latitude;
      let lon = pos.coords.longitude;
      let appkey = '96d1e7975c7e926e234774358a9f359d';
      let lang = 'ko-KR';
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appkey}&lang=${lang}`;
      const kToC = (k) => k - 273.15;
      const isDay = (data) => data[data.length - 1] === 'd';
      axios.get(url).then((res) => {
        if (res.status === 200) {
          setCurLocation({
            city: res.data.name,
            weather: res.data.weather,
            temp: kToC(res.data.main.temp).toFixed(2),
            day: isDay(res.data.weather[0].icon),
          });
          setIsLoading(false);
        } else {
          throw new Error('location data fetch error');
        }
      });
    });
  }, []);

  if (isLoading) {
    return (
      <div>
        <ClipLoader color="#161E54" loading={isLoading} size={50} />
      </div>
    );
  } else
    return (
      <>
        <MainWrapper day={curLocation.day}>
          <h1 className="title">날씨에 맞는 옷차림을 추천해드릴게요.</h1>
          <br />
          <img
            src={`http://openweathermap.org/img/wn/${curLocation.weather[0].icon}@2x.png`}
            alt={curLocation.weather[0].description}></img>
          <div>
            현재 {curLocation.city}는 {curLocation.temp} °C 이에요.
          </div>
          <div className="gender">
            저는&nbsp;
            <select onChange={onChangeGender}>
              <option>선택</option>
              <option value="male">남자</option>
              <option value="female">여자</option>
            </select>
            &nbsp; 입니다.
          </div>
          {gender && <button>확인하기</button>}
        </MainWrapper>
      </>
    );
};

export default Main;
