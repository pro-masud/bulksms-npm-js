/**
 * 
 * student information 
 * 
 * */ 

export const studentInfo = (req, res) => {
    res.send(`You Are a Student Here Now`);
}


/**
 * student info responsive 
 * */ 

export const studentPost = (req, res) => {
    console.log(req.body);
}