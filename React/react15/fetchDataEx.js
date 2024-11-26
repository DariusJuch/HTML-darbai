const url = "http://localhost:5000/users/b53a";
const newUser = {
  username: "UserTEST",
  email: "user1@gmail.com",
  channel: "UserchannelTEST",
  likes: 23,
};

const fetchData = async () => {
  try {
    const response = await fetch(
      url,
    //   {
    //     method: `POST`,
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(newUser),
    //   },
    //   {
    //     method: `PATCH`,
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       completed: true,
    //     }),
    //   }
    {
        method: `DELETE`,
    }
    );
    console.log(response);
    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      throw new Error("Klaida! " + response.statusText);
    }
  } catch (error) {
    console.log(error.message);
  }
};
fetchData();
