import businessModel from "../models/business.model.js";

export default class Business {
    getBusiness = async () => {
        try {
            const result = await businessModel.find();
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    getBusinessById = async (id) => {
        try {
            const result = await businessModel.findOne({_id: id});
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    saveBusiness = async (business) => {
        try {
            const result = await businessModel.create(business);
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    updateBusiness = async (id, business) => {
        try {
            const result = await businessModel.updateOne({_id: id}, {$set: business});
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}