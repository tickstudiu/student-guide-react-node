const controller = require('../controllers/studentGuideController')

module.exports = app => {
    app.get('/studentGuides', controller.findAll)
    app.get('/studentGuide/:id', controller.findById)
    app.post('/studentGuides', controller.create)
    app.put('/studentGuide/:id', controller.update)
    app.delete('/studentGuide/:id', controller.destroy)
}
