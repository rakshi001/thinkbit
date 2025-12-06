import Note from '../model/Note.js';

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // -1 will sort in desc. order (newest first)
    res.status(200).json(notes);
  } catch (error) {
    console.error('Error in getAllNotes controller', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const createNote = async (req, res) => {
  try {
    const title = req.body.title;
    const content = req.body.content;
  } catch (e) {}
};

const updateNote = async (req, res) => {
  res.status(200).json({
    msg: 'updateed the note',
  });
};

const deleteNote = async (req, res) => {
  res.status(200).json({
    msg: 'deleted the note',
  });
};

export { getAllNotes, createNote, updateNote, deleteNote };
