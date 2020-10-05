const express = require('express')
const cors = require('cors')

const app = express()


app.listen(5000, () => console.log('App has been started...'))

app.use(express.json());
app.use(cors());

app.get('/api/v1/schedule', function(request, response) {
    const data = {
        items: { 
            'П-17': {
                'subjects': {
                    'Физкультура': {'room': 'С/З', 'teacher': ''},
                    'ТРПО': {'room': 'А204', 'teacher': ''},
                    'Докум. и серт.': {'room': 'А201', 'teacher': ''}
                }
            }, 
            'П-20': {
                'subjects': {
                    'Математика': {'room': 'А102', 'teacher': ''},
                    'Информатика': {'room': 'А122', 'teacher': ''},
                    'Русский язык': {'room': 'А232', 'teacher': ''}
                }
            }
        }
    }

    return response.json(data)
})