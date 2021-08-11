import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchList } from '../../actions';
import WeatherCards from "../weather-cards/WeatherCards";

function Home() {

  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading)
  const error = useSelector(state => state.error)

  useEffect(() => {
    dispatch(fetchList())
  },[]);

  return (
    <>
      { 
        error ? <div style={{position:"absolute",top:'50%', left: '45%'}}>Error !!!</div> :
        loading ? 
        <div style={{position:"absolute",top:'50%', left: '45%'}}>Loading ....</div> 
        : <WeatherCards />
      }
    </>
  );
}

export default Home;
