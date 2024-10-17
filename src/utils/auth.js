export const authorize = (email, password) => {
  return new Promise((resolve, reject) => {
    resolve({ token: "Strong_TOKEN" });
  });
};

export const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    resolve({
      data: {
        name: "fake user",
        email: "fake@example.com",
        id: "fake-id",
      },
    });
  });
};
