const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
DIST_DIR = path.join(__dirname, '../dist/');
console.log(DIST_DIR)
HTML_FILE = path.join(DIST_DIR, 'index.html')
console.log(HTML_FILE);
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
// app.use('/', (req, res) => {
//   res.send('This is from the back end');
// })

app.use(express.static(`${__dirname}/frontend`));
app.use('/', express.static(path.join(__dirname, '../index.html')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, HTML_FILE));
})
app.listen(PORT, () => {
    console.log(`Listening in on port ${PORT}`);
})