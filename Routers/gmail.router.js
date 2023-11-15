import express from "express"

import {gmailSend} from '../Controllers/gmail.controller.js';

import cors from 'cors'


const router=express.Router()

router.use(
    cors({
        credentials:true,
        origin: 'http://localhost:5173'
    })
)


router.post('/sendmail',gmailSend)





export default router;
