const express = require('express') // nạp thư viện vào biến express từ folder node_modules
const app = express() // trả về đối tượng đại diện cho ứng dụng nodeJS tên app
const port = 3000 // cổng run website

// get - định nghĩa route, paramater đầu tiên thể hiện đường dẫn, đi đúng đường dẫn thì mới return kết quả của hàm send 
app.get('/', (req, res) => {
  let a = 1;
  let b = 2;
  let c = a + b;
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})