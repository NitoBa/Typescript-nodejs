import { Router } from "express";

const routes = Router();

routes.get('/', (req, res) => {
    res.send('typescript show')
})


export default routes;