import { Msg } from "../models/msg.js";

export const postMsg = async (req, res) => {
    try{
        const { username, txt } = req.body;
        console.log(username, txt);
        if(!txt) return res.json({msg: 'No message', status: false});

        const msg = await Msg.create({
            username: username,
            txt: txt
        });

        res.json({status: true, msg});
    }catch(err){
        next(err);
    }
}

export const getAllMsgs = async (req, res) => {
    try{
        Msg.find({}).then((msgs) => {
            res.send(msgs);
        });
    }catch(err){
        next(err);
    } 
}