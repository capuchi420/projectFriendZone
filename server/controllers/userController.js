import { User } from '../models/user.js';
import bcrypt from 'bcrypt';
import { v4 as uuid4 } from 'uuid';

export const register = async (req, res) => {
    try{
        const { username, email, password, confirmPassword } = req.body;
        
        if(!username) return res.json({msg: "Enter username", status: false});
        const usernameCheck = await User.findOne({ username });
        if(usernameCheck) return res.json({msg: "Username already in use", status: false});

        if(!email) return res.json({msg: "Enter email", status: false});
        const emailCheck = await User.findOne({ email });
        if(emailCheck) return res.json({msg: "Email already in use", status: false});

        if(!password || !confirmPassword) return res.json({msg: "Enter password", status: false});
        if(password !== confirmPassword) return res.json({msg: "Password do not match", status: false});

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            id: uuid4(),
            username,
            email,
            password: hashedPassword
        });

        delete user.password;
        res.json({status: true, user});
    }catch(err){
        next(err);
    }
};

export const login = async (req, res) => {
    try{
        const { email, password } = req.body;
        
        const user = await User.findOne({ email });
        if(!user) return res.json({msg: "Email not in use", status: false});

        const passwordCheck = await bcrypt.compare(password, user.password);
        if(!passwordCheck) return res.json({msg: "Incorrect password", status: false});

        delete user.password;
        res.json({status: true, user});
    }catch(err){
        next(err);
    }
}

export const update = async (req, res) => {
    try{
        const {id, newUsername} = req.body;
        const user = await User.findById(id);
        if(user.username === newUsername) return res.json({status: false, msg: "Username already in use"});

        user.username = newUsername;
        const updateUser = await user.save();
        res.json({status: true, updateUser});
    }catch(err){
        res.json({msg: "KURCINELA"})
    }
}