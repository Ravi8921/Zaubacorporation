
const userModel = require("../model/Company");

const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const validator = require("../validation/validator");

const creatCompanydetails = async (req, res) => {
  try {
    let data = req.body;
    const { CIN, Company, RoC, Status } = data;

    if (!validator.isValidRequestBody(data)) {
      return res
        .status(400)
        .send({
          status: false,
          message: "Invalid request parameters.. Please Provide Company Details",
        });
    }

    if (!validator.isValid(CIN)) {
      return res
        .status(400)
        .send({ status: false, message: "Please Provide CIN Name" });
    }

    if (!validator.isValid(Company)) {
      return res
        .status(400)
        .send({ status: false, message: "Please Provide Company Name" });
    }


    if (!validator.isValid(RoC)) {
      return res
        .status(400)
        .send({ status: false, message: "Please Provide RoC " });
    }
    if (!validator.isValid(Status)) {
      res.status(400).send({ status: false, message: `please enter status ` })
      return
    }

    const savedData = await userModel.create(data);
    return res
      .status(201)
      .send({ status: true, message: "Successfully Created", data: savedData });
  }


  catch (err) {
    return res.status(500).send({ status: false, "message": err.message })
  }

}

const getAlldetails = async function (req, res) {
  try {
    let CompanyName = req.query.Company;

    let foundCompany = await userModel.find({ name: CompanyName, isDeleted: false })

    const CompanyId = foundCompany._id
    const internsDetails = await userModel.find({ CompanyId: CompanyId, isDeleted: false }).select({ "_id": 1, "Company": 1, "CIN": 1, "RoC": 1, "Status": 1 })

    // foundCompany.interests = internsDetails

    if (foundCompany) {
      res.status(200).send({ status: true, data: { foundCompany } });
    }
    else {
      res.status(404).send({ status: false, msg: "No documents found" });
    }
  }
  catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
}


const getbyCompanyname = async function (req, res) {
  try {
    const queryParams = req.query
    if (!validator.isValidRequestBody(queryParams)) {
      return res.status(400).send({ status: false, message: 'Please provide Company details' })
    }
    const { Company, CIN } = req.query

    let query = {};


    if (validator.isValid(Company)) {
      query['Company'] = Company.trim();
    }

    if (validator.isValid(CIN)) {
      query['CIN'] = CIN.trim();
    }

    let Companydetail = await userModel.find(query)
    if (Array.isArray(Company) && Companydetail.length === 0) {   //this sitution is for when the user gives details but details does not matches with any of the blogs.
      return res.status(404).send({ status: false, message: 'No Company found' })
    }

    query.isDeleted = false      //for finding only those blogs which are not deleted and they are publish.
    let allCompany = await userModel.find(query).sort({ Company: 1 }).select({ _id: 1,  Company: 1, CIN: 1,RoC: 1, Status: 1  })    //this time this sitution is for when we found that blog given details are valid now we will show only those data which are not deleted and are publish with query in it.
    return res.status(200).send({ status: true, message: 'Company list', data: allCompany })
  } catch (err) {
    console.error(err)
    res.status(500).send('Server Error')
  }
}






module.exports = { creatCompanydetails, getAlldetails ,getbyCompanyname}
