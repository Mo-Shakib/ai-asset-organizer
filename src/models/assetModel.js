const db = require('../config/db');

const createAsset = async (userId, imagePath, promptText, negativePrompt, aiModel) => {
    const query = `
        INSERT INTO assets (user_id, image_path, prompt_text, negative_prompt, ai_model)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
    `;
    // We pass values as an array to prevent SQL Injection attacks!
    const values = [userId, imagePath, promptText, negativePrompt, aiModel];
    const result = await db.query(query, values);
    return result.rows[0];
};

module.exports = {
    createAsset
};