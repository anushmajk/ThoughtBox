import Note from "../models/Note.js";
export async function getNotes (req,res) {
    try {
        const notes = await Note.find().sort({createdAt:-1}); //newest first
    res.status(200).json(notes);
    } catch (error) {
        console.error(" Error in all get notes ",error)
        res.status(500).json({message:"Internal server error"})
    }
};

export async function getNoteById (req,res) {
    try {
        const noteById = await Note.findById(req.params.id)
        if(!noteById) return res.status(404).json({message:"Notes by id not found"})
    res.status(200).json(noteById);
    } catch (error) {
        console.error(" Error in  get notes by Id",error)
        res.status(500).json({message:"Internal server error"})
    }
};

export async function createNotes (req,res){
    try {
        const {title,content} = req.body;
        const note = new Note({title,content});
        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.error("Error in createNote controller",error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
};

export async function updateNotes  (req,res){
    try{
    const {title,content}= req.body;
    const updateNote= await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true,});
    
    if(!updateNote){
        return res.status(404).json({message:"Note not found"});
    }
        res.status(200).json(updateNote);
}
catch (error) {
        console.error("Error in updatedNote controller",error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
};

export async function deleteNotes(req,res){
    try {
        const deleteNote = await Note.findByIdAndDelete(req.params.id)
        if(!deleteNote){
        return res.status(404).json({message:"Note not found"});
    }
    res.status(200).json({message:"Note deleted sucessfully"});
    } catch (error) {
        console.error("Error in deletedNote controller",error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
};