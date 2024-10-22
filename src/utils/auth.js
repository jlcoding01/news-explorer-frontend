export const authorize = (email, password) => {
  return new Promise((resolve, reject) => {
    resolve({ token: "Strong_TOKEN" });
  });
};

export const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    resolve({
      data: {
        name: "Jerry",
        email: "fake@example.com",
        password: "temp1234",
        id: "id1234",
      },
    });
  });
};
