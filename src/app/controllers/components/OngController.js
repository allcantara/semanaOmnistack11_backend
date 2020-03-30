const generateUniqueId = require('../../../utils/generateUniqueId')

const connection = require('../../../database/connection')

module.exports = {
    async store(request, response) {
        const { name, email, whatsapp, city, uf } = request.body
        
        const id = generateUniqueId()
    
        const data = {
            id,
            name: name.toUpperCase(),
            email,
            whatsapp,
            city: city.toUpperCase(),
            uf: uf.toUpperCase(),
        }
    
        await connection('ongs').insert(data)
    
        return response.json({ id })
    },

    async index(request, response) {
        const ongs = await connection('ongs').select('*')
        return response.json(ongs)
    }
}