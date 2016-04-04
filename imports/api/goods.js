import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Goods = new Mongo.Collection('Goods');

Goods.schema = new SimpleSchema({
    typeId: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
    },
    factorId:{
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        optional: true,
    },
    addDate: {
      type: Date,
    },
    discount: {
        type: Number,
        min: 0,
        defaultValue: 0,
    },
});

Goods.attachSchema(Goods.schema);