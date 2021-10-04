import axios from "axios";

export default function handler(req, res) {
  const { id } = req.query;
  if (req.method === "GET") {
    axios
      .request({
        method: "GET",
        url: `https://api.omise.co/charges/${id}`,
        headers: {
          authorization: "Basic c2tleV90ZXN0XzVwZGRoanJ5Z25vbXZpa3RyZzc6",
        },
      })
      .then((response) => {
        let originResponse = response.data;
        res.status(200).json({
          date: new Date(),
          id: originResponse.id,
          status: originResponse.status,
          image: originResponse.source.scannable_code.image.download_uri,
          transaction: originResponse.transaction,
        });
      })
      .catch((error) => {
        res.status(200).json(error);
      });
  } else if (req.method === "POST") {
    const options = {
      method: "POST",
      url: "https://api.omise.co/charges",
      headers: {
        authorization: "Basic c2tleV90ZXN0XzVwZGRoanJ5Z25vbXZpa3RyZzc6",
        "content-type": "application/x-www-form-urlencoded",
      },
      data: { amount: "56789", currency: "THB", type: "promptpay" },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        res.status(200).json(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
}
