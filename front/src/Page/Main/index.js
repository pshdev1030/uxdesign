import React, { useState, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import axios from 'axios';
import { MainWrapper, Button, Temp, Select } from './style.js';
import { Route } from 'react-router-dom';
import Result from '@/Page/Result';

const Main = ({ history }) => {
  const [curLocation, setCurLocation] = useState({ city: null, weather: null, temp: null });
  const [isDay, setIsDay] = useState(false);
  const [isRainy, setIsRainy] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [gender, setGender] = useState(null);
  const onChangeGender = (e) => {
    if (e.target.value === 'male' || e.target.value === 'female') setGender(e.target.value);
    else setGender(null);
  };

  useEffect(() => {
    let hours = new Date().getHours();
    const isDay = (data) => data < 18 && data > 6;
    setIsDay(isDay(hours));

    navigator.geolocation.getCurrentPosition(function (pos) {
      let lat = pos.coords.latitude;
      let lon = pos.coords.longitude;
      let appkey = '96d1e7975c7e926e234774358a9f359d';
      let lang = 'ko-KR';
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appkey}&lang=${lang}`;
      const kToC = (k) => k - 273.15;
      axios.get(url).then((res) => {
        if (res.status === 200) {
          setCurLocation({
            city: res.data.name,
            weather: res.data.weather,
            temp: kToC(res.data.main.temp).toFixed(2),
          });
          setIsRainy(res.data.weather[0].icon.substr(0, 2) === '09' || res.data.weather[0].icon.substr(0, 2) === '10');
          setIsLoading(false);
        } else {
          throw new Error('location data fetch error');
        }
      });
    });
  }, []);

  return (
    <>
      <MainWrapper day={isDay.toString()}>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <h1 className="title">날씨에 맞는 옷차림을 알려드려요.</h1>
              <br />
              {isLoading ? (
                <>
                  <div>위치 정보를 요청중이에요.</div>
                  <ClipLoader color="white" loading={isLoading} size={50} />
                </>
              ) : (
                <>
                  <img
                    src={`http://openweathermap.org/img/wn/${curLocation.weather[0].icon}@2x.png`}
                    alt={curLocation.weather[0].description}></img>
                  <div>
                    현재 {curLocation.city}는 <Temp>{curLocation.temp}</Temp> °C 이에요.
                  </div>
                  <div className="gender">
                    저는&nbsp;
                    <Select onChange={onChangeGender}>
                      <option>선택</option>
                      <option value="male">남자</option>
                      <option value="female">여자</option>
                    </Select>
                    &nbsp; 입니다.
                  </div>
                  {gender && (
                    <Button to={gender === 'male' ? '/result/male' : '/result/female'} day={isDay.toString()}>
                      확인
                    </Button>
                  )}
                </>
              )}
            </>
          )}
        />
        <Route path="/result/:gender" render={() => <Result isRainy={isRainy} />} />
      </MainWrapper>
    </>
  );
};

export default Main;
