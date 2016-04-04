import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Goods } from './goods.js'

class GoodsTypeCollection extends Mongo.Collection {
    insert(goodsType, callback){
        for(i = 0; i < goodsCount; i++) {
            Goods.insert({
                addDate: new Date(),
                factorId: null,
                discount: discount,
                typeId: goodType._id,
            });
        }
        return super.insert(goodsType, callback);
    }
}


export const GoodsType = new Mongo.Collection('GoodsType');

GoodsType.schema = new SimpleSchema({
    title: {
        type: String,
    },
    price:{
        type: Number,
        min: 0,
    },
    serial: {
        type: Number,
        min: 0,
    },
});

GoodsType.attachSchema(GoodsType.schema);

GoodsType.helpers({
    goodsCount() {
        return Goods.find({ typeId: this._id}, {}).count();
    }
});
