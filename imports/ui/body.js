import { Template } from 'meteor/templating';
import {Goods} from '../api/goods.js'
import {GoodsType} from '../api/goodstype.js'

import './body.html';

Template.body.helpers({
    goodsType() {
        return GoodsType.find({});
    },
    goods() {
        return Goods.find({});
    }
});

Template.body.events({
    'submit .new-goods-type'(event) {

        event.preventDefault();

        const target = event.target;
        const title = target.title.value;
        const serial = target.serial.value;
        const price = target.price.value;
        const goodsCount = target.goodsCount.value;
        const discount = target.discount.value;

        let goodType = GoodsType.insert({
            title,
            serial,
            price,
        });

        for(i = 0; i < goodsCount; i++) {
            Goods.insert({
                addDate: new Date(),
                factorId: null,
                discount: discount,
                typeId: goodType,
            });
        }


        target.title.value = '';
        target.serial.value = 0;
        target.price.value = 0;
        target.goodsCount.value = 0;
        target.discount.value = 0;
    }
});
