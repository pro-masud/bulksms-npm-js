export const getStudents = (req, res) => {
    res.send("Hello, How Are You??");
}
export const postStudents = (req, res) => {
    res.json(req.body);
}