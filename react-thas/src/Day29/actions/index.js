const updateCity = (city) => {
  return {
    type: "UPDATE_CITY",
    payload: city,
  };
};

const updatePlaceData = (city) => {
  return (dispatch) => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=dae9b6da211246ffbbf84549211608&q=${city}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: "UPDATE_PLACE_DATA",
          payload: data,
        });
      });
  };
};

export { updateCity, updatePlaceData };
