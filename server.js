const bodyParser = require('body-parser');
const viewEngine = require('./config/viewEngine');
const initWebRoutes = require('./routers/web');
const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const cookieParser = require("cookie-parser");

const authorRouter = require("./routers/authRoute");
const userRoute = require("./routers/userRoute");
const cateRoute = require("./routers/cateRoute.js");
const proRoute = require("./routers/productRoute.js");
const cartRoute = require('./routers/cartRoute.js');
const orderRoute = require('./routers/orderRoute.js');
const orderDetailRoute = require('./routers/orderDetailRoute.js');
dotenv.config();

//change
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
// end change
viewEngine(app);
initWebRoutes(app);


app.use(express.json());
// app.use(bodyParser.json({ limit: "30mb" }));
// app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
// app.use(cors());
app.use(cookieParser());
app.use('image', express.static('image'));

app.use("/user", userRoute);
app.use("/auth", authorRouter);
app.use("/cate", cateRoute);
app.use("/pro", proRoute);
app.use('/cart', cartRoute);
app.use('/order', orderRoute);
app.use('/orderdetail', orderDetailRoute);



// app.get('/', (req, res) => {
//     console.log(req);
//     return res.status(234).send('QUAY LAI DE BAN EI')
// })


mongoose.connect(process.env.MongoDB_URL).then(() => {
    console.log('Ket noi thanh cong DB')
    app.listen(PORT, () => {
        console.log(`Chay cong ${PORT}`)
    })
})
