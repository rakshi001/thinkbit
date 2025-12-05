import express from 'express';
import {
  createAllNotes,
  deleteAllNotes,
  getAllNotes,
  updateAllNotes,
} from '../controllers/noteController.js';

const router = express.Router();

router.get('/', getAllNotes);

router.post('/', createAllNotes);

router.put('/:id', updateAllNotes);

router.delete('/:id', deleteAllNotes);

export default router;
