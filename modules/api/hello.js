export default function (req, res) {
  res.send({ key: Math.floor(Math.random() * (101 - 1) + 1 ) })
}
