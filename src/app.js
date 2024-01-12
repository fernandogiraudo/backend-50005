import express from 'express';
import { orderModel } from './model/order.model.js';
import mongoose from 'mongoose';
import { studentModel } from './model/students.model.js';
import { userModel } from './model/users.model.js';
import handlebars from 'express-handlebars';
import viewsRoutes from './routes/views.routes.js';

const PORT = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
mongoose.connect('mongodb+srv://fergiraudo91:Luna.2024@coder.3hytpje.mongodb.net/coder');

const hbs = handlebars.create({
    runtimeOptions: {
        allowProtoPropertiesByDefault: true
    }
});

app.engine('handlebars', hbs.engine);
app.set('views', 'src/views');
app.set('view engine', 'handlebars');

app.get('/api/orders', async (req, res) => {
    const {sizeReceived} = req.query;
    console.log({sizeReceived});
    const orders = await orderModel.aggregate([
        {
            $match: {size: sizeReceived}
        },
        {
            $group: {_id: '$name', totalQuantity: {$sum: '$quantity'}, size: {$first: sizeReceived}}
        },
        {
            $sort: {totalQuantity: -1}
        },
        {
            $group: {_id: 1, orders: {$push: '$$ROOT'}}
        },
        {
            $project: {
                _id: 0,
                orders: '$orders'
            }
        },
        {
            $merge: {
                into: 'reports'
            }
        }
    ]);

    res.send({message: 'report generated'});
})

app.get('/api/students', async (req, res) => {
    const students = await studentModel.aggregate([
        {
            $sort: {grade: -1}
        },
        {
            $group: {
                _id: '$group',
                estudiantes: {$push: '$$ROOT'},
                promedio_varones: {
                    $avg: {
                        $cond: {
                            if: {$eq: ['$gender', 'Male']},
                            then: '$grade',
                            else: null
                        }
                    }
                },
                promedio_mujeres: {
                    $avg: {
                        $cond: {
                            if: {$eq: ['$gender', 'Female']},
                            then: '$grade',
                            else: null
                        }
                    }
                },
                promedio_total: {$avg: '$grade'}
            }
        },
        {
            $group:{
                _id: 0,
                grupos: {$push: '$$ROOT'},
                promedio_general: {$avg: '$promedio_total'}
            }
        }
    ]);

    res.send({students});
});

app.get('/api/users', async (req, res) => {
    const users = await userModel.paginate({gender: 'Female'}, {limit: 20, page: 1});
    res.send({users});
});

app.use('/', viewsRoutes);

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});