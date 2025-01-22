const Character = require('../models/CharacterSchema');

const getAllCharacters = async () => {
    try {
      const character = await Character.find({});
      return character;
    } catch (error) {
      console.error('Error fetching players:', error);
      throw error;
    }
  };

  module.exports = {
    getAllCharacters
}