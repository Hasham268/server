import mongoose from 'mongoose';

const WorkerRegisterationSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    cnic: String,
    work: String,
    contact: String,
    salary: String,
    description: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const WorkerRegistration = mongoose.model('WorkerRegistration', WorkerRegisterationSchema);
export default WorkerRegistration;
