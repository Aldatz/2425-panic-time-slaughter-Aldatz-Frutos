const characterService = require('../services/characterServices');

const getAllCharacters = async (req, res) => {
    try {
        const characters = await characterService.getAllCharacters();
        res.json(characters);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching characters' });
    }
};

module.exports = {
    getAllCharacters
}