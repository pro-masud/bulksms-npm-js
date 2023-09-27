// create customer controllers here
export const createCustomer = (req, res) => {
    res.status(201).json(req.body);
}