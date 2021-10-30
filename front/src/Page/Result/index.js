import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import axios from 'axios';

const Result = ({ isRainy }) => {
  const { gender } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (gender === 'male') {
      axios.get('https://uxdesignproject-b1fca-default-rtdb.firebaseio.com/male.json').then((res) => {
        if (res.status === 200) {
          setData(res.data);
          setIsLoading(false);
        } else {
          throw new Error('data Fetch Error');
        }
      });
    } else {
      axios.get('https://uxdesignproject-b1fca-default-rtdb.firebaseio.com/female.json').then((res) => {
        if (res.status === 200) {
          setData(res.data);
          setIsLoading(false);
        } else {
          throw new Error('data Fetch Error');
        }
      });
    }
  }, []);

  if (!gender) return <Redirect to="/" />;
  else if (isLoading)
    return (
      <>
        <div>데이터를 요청중이에요.</div>
        <ClipLoader color="white" loading={isLoading} size={50} />
      </>
    );
  else
    return (
      <div>
        <h1 className="title" style={{ textAlign: 'center' }}>
          추천드리는 옷이에요.
        </h1>
        <div style={{ display: 'flex', margin: '30px 0' }}>
          {data.map((ele) => (
            <div key={ele.image} style={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
              <img src={ele.image} style={{ width: '100px', height: '100px' }} alt={ele.name} />
              <span style={{ textAlign: 'center' }}>{ele.name}</span>
            </div>
          ))}
        </div>
        {isRainy && <h2 className="title">비가 오니 우산을 착용하세요.</h2>}
      </div>
    );
};

export default Result;
