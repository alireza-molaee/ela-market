import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Factors = new Mongo.Collection('Factors');

Factors.schema = new SimpleSchema({
    seller:{
        type: String,
        regEx: SimpleSchema.RegEx.Id,
    },
    buyer:{
        type: String,
        regEx: SimpleSchema.RegEx.Id,
    },
    date: {
        type: Date,
    },
    discount: {
        type: Number,
        min: 0,
        defaultValue: 0,
    }
});

Factors.attachSchema(Factors.schema);