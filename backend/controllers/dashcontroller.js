const asyncHandler = require('express-async-handler')




const ViewDashboard = asyncHandler(async (req, res) => {
    res.status(200).json({ message : 'Dash Board '})
})




module.exports = {
    ViewDashboard,
    
}