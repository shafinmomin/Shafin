//const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let blankSchema = new Schema({
    name: {
        type: String,
    },
    type: {
    }
}, { collection: 'blank'
});



// create models from mongoose schemas
//const primarydata = mongoose.model('primaryData', primaryDataSchema);
//const eventdata = mongoose.model('eventData', eventDataSchema);

//module.exports = { primarydata, eventdata }

module.exports = mongoose.model('diff name than blank', blankSchema);

