import Note from "../models/Note.js";
export async function getNotes (req,res) {
    try {
        const notes = await Note.find();
    res.status(200).json(notes);
    } catch (error) {
        console.error(" Errpr in all get notes ",error)
        res.status(500).json({message:"Internal server error"})
    }
};

export const createNotes = (req,res)=>{
    res.status(201).json({message:"Notes created sucessfully"})
};

export const updateNotes = (req,res)=>{
    res.status(200).json({message:"Notes updated sucessfully"})
};

export const deleteNotes = (req,res)=>{
    res.status(200).json({message:"Notes deleted sucessfully"})
};