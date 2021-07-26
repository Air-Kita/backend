const router = require('express').Router();
let Monitoring = require('../models/monitoring.model');

router.get('/display', (req, res) => {
    Monitoring.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

// router.route('/display').get(async (req, res) => {
//     await Monitoring.find()
//         .then(monitoring => res.json(monitoring))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// router.get('/display', async (req, res, next) => {
//     try {
//         const value = await Monitoring.find()
//         res.json(value);
//         res.send(value);
//         console.log('isok bosq');
//     } catch (e) {
//         console.log('error bosq');
//         next(e)
//     }
// })

// router.route('/display/today').get(async (req, res) => {
//     await Monitoring.find({}, { _id: 0, value: 1 }).limit(1).sort({$natural:-1})
//         .then(monitoring => res.json(monitoring))
//         .catch(err => res.status(400).json('Error: ' + err));
// })

// router.get('/display/today', async (req, res, next) => {
//     try {
//         const value = await Monitoring.find({}, { _id: 0, value: 1 }).limit(1).sort({$natural:-1})
//         res.json(value);
//         res.send(value);
//         console.log('isok bosq');
//     } catch (e) {
//         console.log('error bosq');
//         next(e)
//     }
// })

// router.route('/display/week').get(async (req, res) => {
//     await Monitoring.aggregate([
//         { 
//             $match: { 
//                 date: { 
//                     $gte: new Date(new Date().getTime() - (1000 * 3600 * 24 * 7)), 
//                     $lte: new Date(),
//                 }, 
//             }, 
//         },
//         { 
//             $set: { 
//                 day: { $dayOfMonth: "$date" }
//             } 
//         },
//         {
//             $group: {
//                 _id: {
//                     $dateFromParts: {
//                        year: { $year: "$date" },
//                        month: { $month: "$date" },
//                        day: { $dayOfMonth: "$date" }
//                     }
//                 },
//                 last: { $last: "$$ROOT" }
//             }
//         },
//         { $replaceRoot: { newRoot: "$last" } }
//     ]).sort({date: 1})
//     .then(monitoring => res.json(monitoring))
//     .catch(err => res.status(400).json('Error: ' + err));
// })

// router.get('/display/week', async (req, res, next) => {
//     try {
//         const value = await Monitoring.aggregate([
//             { 
//                 $match: { 
//                     date: { 
//                         $gte: new Date(new Date().getTime() - (1000 * 3600 * 24 * 7)), 
//                         $lte: new Date(),
//                     }, 
//                 }, 
//             },
//             { 
//                 $set: { 
//                     day: { $dayOfMonth: "$date" }
//                 } 
//             },
//             {
//                 $group: {
//                     _id: {
//                         $dateFromParts: {
//                            year: { $year: "$date" },
//                            month: { $month: "$date" },
//                            day: { $dayOfMonth: "$date" }
//                         }
//                     },
//                     last: { $last: "$$ROOT" }
//                 }
//             },
//             { $replaceRoot: { newRoot: "$last" } }
//         ]).sort({date: 1})
//         res.json(value);
//         res.send(value);
//         console.log('isok bosq');
//     } catch (e) {
//         console.log('error bosq');
//         next(e)
//     }
// })

// router.route('/add').post(async (req, res) => {
//     const nama = req.body.nama;
//     const alamat = req.body.alamat;
//     const id = req.body.id;
//     const value = Number(req.body.value);
//     // const date = Date.parse(req.body.date);

//     const newMonitoring = new Monitoring({
//         nama,
//         alamat,
//         id,
//         value,
//         // date,
//     });

//     newMonitoring.save()
//     .then(() => res.json('Monitoring added'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;

