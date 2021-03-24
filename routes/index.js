var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  let products = [
    {
      name: "IPhone X",
      category: "Mobile",
      description: "This is a good phone",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71i2XhHU3pL._SX679_.jpg",
    },
    {
      name: "Redmi Note 5 Pro",
      category: "Mobile",
      description: "This is a good phone",
      image:
        "https://www.91-img.com/pictures/125125-v3-xiaomi-redmi-note-5-pro-6gb-ram-mobile-phone-large-1.jpg?tr=q-60",
    },
    {
      name: "One Plus 7T",
      category: "Mobile",
      description: "This is a good phone",
      image:
        "https://www.91-img.com/pictures/133649-v9-oneplus-7-pro-mobile-phone-large-1.jpg?tr=q-60",
    },
    {
      name: "Nokia 9",
      category: "Mobile",
      description: "This is a good phone",
      image:
        "https://www.gizmochina.com/wp-content/uploads/2019/03/Nokia-9-PureView-500x500.jpg",
    },
  ];
  res.render("index", { products, admin: true });
});

module.exports = router;
