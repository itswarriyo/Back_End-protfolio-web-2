const enqueryModle = require("../Modle/protfolio.modle");



let enqueryInsert = async (req, res) => {
    try {
        let { name, email, phone, subject ,country , services ,message } = req.body;


        let enquiry = new enqueryModle({
            name,
            email,
            phone,
            subject,
            country,
            services,
            message
        });

        await enquiry.save();


        res.send({ status: 1, message: "Information Saved Successfully!" , Data:enquiry });

    } catch (err) {
    console.log("FULL ERROR:", err);
    console.log("ERROR NAME:", err.name);
    console.log("ERROR MESSAGE:", err.message);

    res.send({
        status: 0,
        message: "Error while saving data",
        error: err.message
    });
}
}

module.exports = {enqueryInsert}

