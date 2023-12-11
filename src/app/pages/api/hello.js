import connectMongo from "@/app/database/conn";

export default function handler (req,res){
    connectMongo()
    res.status(200).json({ name:'John Doe'})
}