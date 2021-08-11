export const groupArrayOfObjects = (list, key) => {
    return list.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};

//Calculates average of 8 segments for a day
export const calculateAvgTemp = (list) => {
    let initialValue = 0
    const sum = list.reduce((a, b) => {
        return a + b.main.temp
    },initialValue);
    const avg = (sum / list.length) || 0;
    return avg;
}

//Formula to calculate celcius from fahrenheit
export const tempInCelcius = (x) => {
    const celcius = (x-32)*(5/9);
    return celcius;
}
  
//gives date in dd mmm yyyy format
export const humanReadableDate = (date) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    return date.split("-")[2]+" "+monthNames[parseInt(date.split("-")[1])]+" "+date.split("-")[0];
}
  
export const constructDataFromRaw = (list) => {
    const finalArray = Object.entries(list).map(entries => {
      const temp_faren = calculateAvgTemp(entries[1]);
      const temp_celcius = tempInCelcius(temp_faren);
      const date_in_english = humanReadableDate(entries[0]);
      return {
        avg_temp: temp_faren,
        avg_temp_celcius: temp_celcius,
        date: date_in_english
      }
    })
    return finalArray;
}