import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import React from 'react';
import { useSelector } from 'react-redux';
import RadioButtonsGroup from './CheckboxGroup';
import usePagination from "./Pagination";
import WeatherCard from "./WeatherCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    justifyContent: 'space-around'
  },
  iconStyle: {
    fontSize: '10rem'
  }
}));


function WeatherCards() {
  const classes = useStyles();
  const list = useSelector(state => state.list);
  const PER_PAGE = 3;
  const { next, prev, currentData, currentPage, maxPage } = usePagination(list, PER_PAGE);
  const clr = currentPage === 0 ? "disabled" : "primary";
  const right_clr = (currentPage+PER_PAGE >= maxPage) ? "disabled" : "primary";

  const handleLeftClick = () => {
    prev();
  }
  const handlRightClick = () => {
    if(currentPage+PER_PAGE < maxPage)
    next();
  }

  return (
    <div>
        <RadioButtonsGroup />
        <div style={{display:'flex',justifyContent: 'space-between'}}>
          <ArrowLeftIcon className={classes.iconStyle} fontSize={"large"} color={clr} onClick={handleLeftClick} />
          <ArrowRightIcon className={classes.iconStyle} color={right_clr} fontSize={"large"} onClick={handlRightClick}/> 
        </div>
        <Grid container className={classes.root} spacing={10}>
          {currentData().map(v => {
            return (
              <Grid key={v.date} item md={3}>
                <WeatherCard data={v} />    
              </Grid>
            );
          })}
        </Grid>
    </div>
  );
}

export default WeatherCards;
