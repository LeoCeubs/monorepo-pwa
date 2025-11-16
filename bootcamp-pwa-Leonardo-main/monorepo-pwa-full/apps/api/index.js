import express from 'express'
import cors from 'cors'
const app=express();app.use(cors());app.use(express.json());
app.get('/api/hello',(req,res)=>res.json({ok:true,msg:'Hello Bootcamp!'}))
app.get('/api/cep/:cep',async(req,res)=>{try{const r=await fetch(`https://viacep.com.br/ws/${req.params.cep}/json/`);res.json(await r.json())}catch(e){res.status(500).json({ok:false,error:String(e)})}})
app.listen(3000,()=>console.log('API on :3000'))