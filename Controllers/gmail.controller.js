import Gmail from '../Models/gmail.schema.js';
import nodemailer from 'nodemailer'; 
import dotenv from 'dotenv';
dotenv.config()


const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
       user:"sanjaysanjay132002@gmail.com",
       pass:"ggrhjgigarblegrp"
    }
})

export const gmailSend=async(req,res)=>{
 
    try {
        console.log(req.body);
        const {email,subject,Text}=req.body;
    
            const mailOptions={
                from:"sanjaysanjay132002@gmail.com",
                to:email,
                subject:subject,
                Text:Text
            }

            transporter.sendMail(mailOptions,(error,info)=>{
                if(error){
                    console.log("error",error);
                    res.status(400).json({status:400,message:"email not send"})
                }else{
                    console.log("Email send",info.response);
                    res.status(200).json({status:200,message:"email sent Succesccfully"})
                }

 
            })
        
                const newGmail=new Gmail({email,subject,Text})
                await newGmail.save()
                res.status(200).json({message:"Email sent Successfully", data:newGmail})
              
                 
    } catch (error) {
        console.log(error);
        res.status(400).json({status:400,message:"internel Error"})
    }
}