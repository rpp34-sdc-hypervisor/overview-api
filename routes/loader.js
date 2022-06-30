const express = require('express');
const router = express.Router();

router.get(`/loaderio-1e7749863d6c4e8d271921474a8e777f`, loader.loader)

const loader =  (req, res) => {
  const text = “loaderio-1e7749863d6c4e8d271921474a8e777f”;
  res.send(text);
}

module.exports = router