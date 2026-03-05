const AssetModel = require('../models/assetModel');

const addAsset = async (req, res) => {
    try {
        // Extract data from the incoming JSON request
        const { imagePath, promptText, negativePrompt, aiModel } = req.body;
        
        // Note: We are passing 'null' for userId right now because we haven't built authentication yet.
        const newAsset = await AssetModel.createAsset(null, imagePath, promptText, negativePrompt, aiModel);
        
        res.status(201).json({ 
            status: 'success', 
            data: newAsset 
        });
    } catch (error) {
        console.error('Error in addAsset:', error);
        res.status(500).json({ 
            status: 'error', 
            message: 'Failed to save the asset' 
        });
    }
};

module.exports = {
    addAsset
};