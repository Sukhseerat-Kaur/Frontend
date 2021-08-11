const copyUsername = (input) => {
  return {
    type: "COPY_USERNAME",
    payload: input,
  };
};

const copyEmail = (input) => {
  return {
    type: "COPY_EMAIL",
    payload: input,
  };
};

export { copyUsername, copyEmail };
