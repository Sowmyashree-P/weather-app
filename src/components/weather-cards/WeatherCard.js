import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

export default function WeatherCard({data}) {
  const classes = useStyles();
  const degreeType = useSelector(state => state.degree);

  return (
    <Paper className={classes.paper}>
      {degreeType === "celcius" ?
        <Typography color="textSecondary" gutterBottom>
          Temp: {Math.round(data.avg_temp_celcius)+'C'}
        </Typography> : 
        <Typography color="textSecondary" gutterBottom>
        Temp: {Math.round(data.avg_temp)+'F'}
        </Typography>
      }
    <Typography color="textSecondary" gutterBottom>
      {data.date}
    </Typography>
    </Paper>  
  );
}
