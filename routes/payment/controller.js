const { validationResult } = require('express-validator');
const { Payment } = require('#models/Payments.js');
const Stripe = require('stripe');

const stripe = new Stripe(process.env.STRIPE_SECRET);

// Request a payment
exports.requestPayment = async (req, res, next) => {
    try {
        const errors = validationResult(req).errors;
        if (errors.length > 0) throw new Error(errors[0].msg);

        const { email, amount } = req.body;
        
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100,
            currency: 'usd',
            metadata: {
                integration_check: 'accept_a_payment'
            },
            receipt_email: email
        })

        res.status(200).send({ secret: paymentIntent.client_secret });

    } catch (err) {
        next(err);
    }
}

exports.addPayment = async (req, res, next) => {
    try {   
        const errors = validationResult(req).errors;
        if (errors.length > 0) throw new Error(errors[0].msg);

        const payment = new Payment({...req.body});
        
        const result = await payment.save({ ordered: false });

        res.status(200).send(result);

    } catch (err) {
        next(err);
    }
}

exports.getPayments = async (req, res, next) => {
    try {   
        const errors = validationResult(req).errors;
        if (errors.length > 0) throw new Error(errors[0].msg);

        const { memberId, pageNumber } = req.query;    

        const page = parseInt(pageNumber);

        const resultCount = await Payment.count({ memberId });
        const result = await Payment.find({ memberId }).sort({ createdAt: 'desc' }).skip(page * 5).limit(5);

        const pageCountPartial = parseFloat(resultCount / 5);
        const isWholeNumber = pageCountPartial % 1 === 0.5;
        const finalPageCount = Math.trunc(pageCountPartial) + 1;

        const data = {
            payments: result,
            totalItems: resultCount,
            totalPages: isWholeNumber ? pageCountPartial : finalPageCount,
            currentPage: page
        }

        res.status(200).send(data);

    } catch (err) {
        next(err);
    }
}