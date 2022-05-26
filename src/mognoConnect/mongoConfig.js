import mongoose from 'mongoose'

//MONGOOSE  CONNECTION
const URLMONGO = 'mongodb+srv://jimenez1917:dajiru17@cluster0.vfuad.mongodb.net/bookstore?retryWrites=true&w=majority'

const mongoConnect =()=>{
mongoose.connect(URLMONGO)
    .then(() => {
        console.log('Connected to database')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

}

export default mongoConnect;