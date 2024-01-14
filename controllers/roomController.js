const Room = require('../models/Room');
const Student = require('../models/Student');

exports.getRoomById = async (req, res) => {
  try {
    const roomId = req.params.id;
    const room = await Room.findById(roomId);
    if(!room){
      return res.status(404).json({message:'Room not found'});
    }
    // TODO: Fetch room by ID and send a response
    res.status(200).json(room);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getAllRoom = async (req, res) => {
  try {
    const room = await Room.find();
    // TODO: Fetch all rooms and send a response
    res.status(200).json(room);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.createRoom = async (req, res) => {
  try {
    const {roomNumber,capacity} = req.body;
    const room = await Room.create({roomNumber,capacity,occupants:[]});
    // TODO: Extract necessary details from the request body (roomNumber, capacity)
    // TODO: Validate request data
    // TODO: Create a new room and send a success response

    res
      .status(201)
      .json({ message: 'Room created successfully', room: newRoom });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateRoom = async (req, res) => {
  try {
    const roomId = req.params.id;
    const {roomNumber,capacity} = req.body;
    const updatedRoom = await Room.findByIdAndUpdate(
      roomId,
      {roomNumber,capacity},
      {new:true}
    );
    // TODO: Extract necessary details from the request body (roomNumber, capacity)
    // TODO: Validate request data
    // TODO: Update the room and send a success response
    res
      .status(200)
      .json({ message: 'Room updated successfully', room: updatedRoom });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deleteRoom = async (req, res) => {
  try {
    // TODO: Delete the room by ID and send a success response
    const roomId = req.params.id;
    res
      .status(200)
      .json({ message: 'Room deleted successfully', room: deletedRoom });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
exports.addOccupantToRoom = async (req, res) => {
  try {
    const {roomId,StudentId} = req.body;
    // TODO: Extract necessary details from the request body (roomId, studentId)
    // TODO: Add the student to the occupants array
    // TODO: Populate occupants and send the response

    res.status(200).json({
      message: 'Occupant added to room successfully',
      room,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
