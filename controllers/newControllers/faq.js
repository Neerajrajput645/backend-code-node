const Faq = require("../../models/newModels/faq");
const asyncHandler = require("express-async-handler");
const successHandler = require("../../common/successHandler");
const validMongooseId = require("../../common/new/mongoIDvalidation");

const createFaq = asyncHandler(async(req, res)=>{
    const { question, answer } = req.body;
    if(!question || !answer){
        res.status(400);
        throw new Error("Please provide both question and answer");
    }
    const faq = await Faq.create({ question, answer });
    successHandler(res, 201, faq);
})

const updateFaq = asyncHandler(async(req, res)=>{
    const faqId = req.params.faqId;
    validMongooseId(faqId);
    const { question, answer } = req.body;
    if(!question || !answer){
        res.status(400);
        throw new Error("Please provide question and answer");
    }
    const faq = await Faq.findByIdAndUpdate(faqId, { question, answer }, { new: true });
    if(!faq){
        res.status(404);
        throw new Error("FAQ not found");
    }
    successHandler(res, 200, faq);
})

const deleteFaq = asyncHandler(async(req, res)=>{
    const faqId = req.params.faqId;
    validMongooseId(faqId);
    const faq = await Faq.findByIdAndDelete(faqId);
    if(!faq){
        res.status(404);
        throw new Error("FAQ not found");
    }
    successHandler(res, 200, faq);
})

const listAllFaqs = asyncHandler(async(req, res)=>{
    const faqs = await Faq.find({status: true}).lean();
    successHandler(res, 200, faqs);
});

// for admin
const listAllFaqsAdmin = asyncHandler(async(req, res)=>{
    const faqs = await Faq.find().lean();
    successHandler(res, 200, faqs);
});

const getFaqDetails = asyncHandler(async(req, res)=>{
    const faqId = req.params.faqId;
    validMongooseId(faqId);
    const faq = await Faq.findById({_id: faqId, status: true}).lean();
    if(!faq){
        res.status(404);
        throw new Error("FAQ not found");
    }
    successHandler(res, 200, faq);
})

module.exports = {
    createFaq,
    updateFaq,
    deleteFaq,
    listAllFaqs,
    listAllFaqsAdmin,
    getFaqDetails
}
