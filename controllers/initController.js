const Axios = require("axios");

const Models = require("../models");

const storeInfo = async (res) => {
  let data;
  await Axios.get("http://localhost:3000/users").then(
    (res) => (data = res.data)
  );
  // console.log(data);
  try {
    for (let user of data) {
      const [user, created] = await Models.User.findOrCreate({
        where: { userName: user.userName },
        defaults: user,
      });
    }
    res.send("success");
  } catch (err) {
    console.log(err);
  }

  // Models.Like.findAll({})
  // .then((data) => {
  //   res.send({ result: 200, data: data });
  // })
  // .catch((err) => {
  //   console.log(err);
  //   res.send({ result: 500, error: err.message });
  // });
};

module.exports = {
  storeInfo,
};
