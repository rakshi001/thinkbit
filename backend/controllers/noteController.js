const getAllNotes = (req, res) => {
  res.status(200).json({
    msg: 'this is notes',
  });
};

const createAllNotes = (req, res) => {
  if (true) {
    res.status(200).json({
      msg: 'notes created ',
    });
  }
};

const updateAllNotes = (req, res) => {
  res.status(200).json({
    msg: 'updateed the note',
  });
};

const deleteAllNotes = (req, res) => {
  res.status(200).json({
    msg: 'deleted the note',
  });
};

export { getAllNotes, createAllNotes, updateAllNotes, deleteAllNotes };
