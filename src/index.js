const express = require('express') // nạp thư viện vào biến express từ folder node_modules

const app = express() // trả về đối tượng đại diện cho ứng dụng nodeJS tên app

const port = 3000 // cổng run website

const path = require('path')


// morgan - http logger
const morgan = require('morgan') 
app.use(morgan('combined'))

// template engine
const { engine } = require ('express-handlebars'); // import express handlebars
app.engine('hbs', engine(
  {extname: '.hbs'}
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// get - định nghĩa route, paramater đầu tiên thể hiện đường dẫn, đi đúng đường dẫn thì mới return kết quả của hàm send 
app.get('/trang-chu', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})