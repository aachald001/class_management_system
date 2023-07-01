const mongoose=require('mongoose');
mongoose.set('strictQuery', false);
//inplace of localhost put 0.0.0.0
mongoose.connect('mongodb://0.0.0.0:27017/college_space',{
    useNewUrlParser:true,
    useUnifiedTopology:true
    //useCreateIndex:true
})
.then(()=>{
    console.log('connect');
})
.catch((error)=>{
    console.log(error);
})