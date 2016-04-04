import {Goods} from '../imports/api/goodstype.js'
//
// export function loadData() {
//
//     if (Goods.find({}).count() === 0) {
//
//
//         var goods = [
//             { title: 'english book', serial: 123456789, price: 12.5, items: [
//                 {add_at: new Date(), factor_id: 123},
//                 {add_at: new Date(), factor_id: 123},
//                 {add_at: new Date(), factor_id: 321},
//                 {add_at: new Date(), factor_id: 123}
//             ],
//                 count: () => {
//                     return this.items.length
//                 }
//             },
//             { title: 'franc book', serial: 123456789, price: 12.5, items: [
//                 {add_at: new Date(), factor_id: 123},
//                 {add_at: new Date(), factor_id: 123},
//                 {add_at: new Date(), factor_id: 321},
//                 {add_at: new Date(), factor_id: 321},
//                 {add_at: new Date(), factor_id: 321}
//             ],
//                 count: () => {
//                     return this.items.length
//                 }
//             },
//             { title: 'germany book', serial: 123456789, price: 12.5, items: [
//                 {add_at: new Date(), factor_id: 124},
//                 {add_at: new Date(), factor_id: 124}
//             ],
//                 count: () => {
//                     return this.items.length
//                 }
//             }
//         ];
//
//
//         for (var i = 0; i < goods.length; i++) {
//
//             Goods.insert(goods[i]);
//
//         }
//
//     }
//
// };
