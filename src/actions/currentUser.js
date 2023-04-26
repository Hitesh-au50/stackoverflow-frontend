export const setCurrentUser = (data) => {
  return {
    type: "FETCH_CURRENT_USER",
    payload: data,
  };
};

// in data there is a profile
