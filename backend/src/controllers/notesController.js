export const getNotes = (req,res)=>{
    res.status(200).send("Notes fetched sucessfully");
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