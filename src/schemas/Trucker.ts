import { Schema, model } from 'mongoose'

import TruckerInterface from './TruckerInterface'

const TruckerSchema = new Schema({
    name: String,
    phone: Number,
    birthDate: Date,
    state: String,
    city: String,
    addresses: {
        name: String,
        state: String,
        country: String,
        neighborhood: String,
        city: String,
        streetNumber: Number,
        complement: String,
        postalCode: Number,
        streetName: String
    },
    documents: [
        {
            expiresAt: Date,
            country: String,
            number: Number,
            docType: String,
            category: String
        },
        {
            country: String,
            number: Number,
            docType: String
        }
    ]
}, {
    timestamps: true
})

export default model<TruckerInterface>('Trucker', TruckerSchema)
