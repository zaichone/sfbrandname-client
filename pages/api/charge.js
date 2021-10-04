import axios from "axios";

export default function handler(req, res) {
  if (req.method === "POST") {
    var options = {
      method: "POST",
      url: "https://api.omise.co/charges",
      headers: {
        authorization: "Basic c2tleV90ZXN0XzVwZGRoanJ5Z25vbXZpa3RyZzc6",
      },
      data: { amount: "56789", currency: "THB", source: { type: "promptpay" } },
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
