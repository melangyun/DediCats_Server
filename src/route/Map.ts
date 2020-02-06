import express from "express";
import wkx from "wkx";
// import storage from "../data/storage";
//* "location": "POINT(1 2)",
//* new wkx.Point(1, 2).toWkt();
const router:express.Router = express.Router();

router.post("/", (req:express.Request, res:express.Response) => {
    const {location} : {location:string} = req.body;
    

    // 타입 지정시  const defunt: PersoneModel = res.body; 형태로 사용
    console.log(`server received POST req from ip: ${req.ip}. data is ${req.body}`);
});

//* request.body.location
//! "((33.44843745687413, 126.56798357402302), (33.452964008206735, 126.57333898904454))"

// ? response
/*
[
    {
        cat_id:1,
        cat_nickname: "돼냥이",
        location:
            [
               latitude, longitude
            ]
    },
    {
        cat_id:2,
        cat_nickname: "고라파덕",
        location:
            [
               latitude, longitude
            ]
    }
]
*/


export default router;
