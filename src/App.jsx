// import { Fragment, useState } from "react";
// import Card from "./components/card";
// import "./App.css"

// import img_1 from "./assets/img-1.webp"
// import img_2 from "./assets/img-2.webp"
// const data_1 = "some data has a child"
// const data_2 = "some data has not a child"

// export default function App(){
//     const [heading, setHeading] = useState("App page") 

//     const cardData = [
//         {
//             id:1,
//             value:data_1,
//             img:img_1,
//             title:"মতামত এস আলম তখন কার এখন কার?",
//             description : "অনেকের ধারণা ছিল, এস আলমের সঙ্গে আওয়ামী লীগের দহরমমহরম বেশি থাকায় বিএনপির নেতারা তাঁর বিরুদ্ধে অবস্থান নেবেন। কিন্তু সেই ধারণা ভুল প্রমাণিত হলো দুটি ঘটনায়।"

//         },
//         {
//             id:2,
//             value:data_2,
//             img:img_2,
//             title:"খুলনায় মহানবী (সা.)–কে নিয়ে কটূক্তির অভিযোগে পুলিশ কার্যালয়ে ঢুকে কিশোরকে গণপিটুনি",
//             description : "একটি ছয়তলা ভবনের পঞ্চম তলা থেকে এক ব্যক্তি মোস্তাফিজদের ডেকে বলেন, তাঁর পাশের একতলা ভবনের সিঁড়ির ওপর একটি শিশু একা পড়ে আছে।"
//         }
//     ]
    
//     return <Fragment>
//         <div className="card-parent">

//             {
//                 cardData.map((card) => {
//                  const {value,img,title,description,id} = card
                 

//                     return <Card 
//                   key={id}
//                   ttitl={title}
//                   description={description}
//                   img={img}
//                   value={value}>
       
//                </Card>
//                 } )
//             }

//             {/* <Card 
                
//                 title="খুলনায় মহানবী (সা.)–কে নিয়ে কটূক্তির অভিযোগে পুলিশ কার্যালয়ে ঢুকে কিশোরকে গণপিটুনি"
//                 description="একটি ছয়তলা ভবনের পঞ্চম তলা থেকে এক ব্যক্তি মোস্তাফিজদের ডেকে বলেন, তাঁর পাশের একতলা ভবনের সিঁড়ির ওপর একটি শিশু একা পড়ে আছে।"
//                 img={img_1}
//                 value={data}>
     
//              </Card> */}
        
//             {/* <Card 
//                 title="খুলনায় মহানবী (সা.)–কে নিয়ে কটূক্তির অভিযোগে পুলিশ কার্যালয়ে ঢুকে কিশোরকে গণপিটুনি"
//                 description="একটি ছয়তলা ভবনের পঞ্চম তলা থেকে এক ব্যক্তি মোস্তাফিজদের ডেকে বলেন, তাঁর পাশের একতলা ভবনের সিঁড়ির ওপর একটি শিশু একা পড়ে আছে।"
//                 img={img_2}
//                 value={data}>
//             </Card> */}
        
//             {/* <Card title="খুলনায় মহানবী (সা.)–কে নিয়ে কটূক্তির অভিযোগে পুলিশ কার্যালয়ে ঢুকে কিশোরকে গণপিটুনি"

//              description="একটি ছয়তলা ভবনের পঞ্চম তলা থেকে এক ব্যক্তি মোস্তাফিজদের ডেকে বলেন, তাঁর পাশের একতলা ভবনের সিঁড়ির ওপর একটি শিশু একা পড়ে আছে।"
//              img="/public/images.webp">
//              </Card> */}
//             {/* <Card></Card>
//             <Card></Card> */}
//         </div>
        
//     </Fragment>
// }

// // export default App




import { Fragment, useState } from "react";
import Card from "./components/card";
import "./App.css"

const data = "some have a child data"
const roll = "126376"

const cardData = [
    {
        roll:roll,
        data:data,
        img:img_1,
        title:"জুলাইয়ের গণহত্যাকারীদের ক্ষমা করার অধিকার কারও নেই: জামায়াতের আমির",
        description : "শফিকুর রহমান বলেন, ‘আমরা আইন হাতে তুলে নেব না। কিন্তু সুনির্দিষ্ট অপরাধ যিনি করেছেন, তাঁর বিরুদ্ধে মামলাও হবে এবং তাঁকে সে মামলায় শাস্তিও পেতে’"

    },
    {
        roll:roll,
        data:data,
        img:img_2,
        title:"এখনো যুদ্ধ শেষ হয়ে যায়নি: শহীদি মার্চে নেতারা, শহীদি মার্চে নেতারা",
        description : "মিছিলে তাঁরা বিভিন্ন ধরনের স্লোগান দেন। এর মধ্যে রয়েছে ‘শহীদের রক্ত বৃথা যেতে দেব না’, ‘আমার ভাই কবরে, খুনি কেন বাহিরে’, ‘আইয়ুব-মুজিব-হাসিনা স্বৈরাচার মানি না’,"
    },
    {
        roll:roll,
        data:data,
        img:img_3,
        title:"জাতীয় পতাকা হাতে শহীদি মার্চ , জাতীয় পতাকা হাতে শহীদি মার্চ",
        description : "রাজধানীর বিভিন্ন শিক্ষাপ্রতিষ্ঠানের শিক্ষার্থীরা থেকে শুরু করে নানা শ্রেণি-পেশার মানুষ মার্চে অংশ নিতে ঢাকা বিশ্ববিদ্যালয় এলাকায় আসছিলেন।"
    }
]

import img_1 from "./assets/img-1.webp"
import img_2 from "./assets/img-2.webp"
import img_3 from "./assets/img-3.webp"
// const data_1 = "some data has a child"
// const data_2 = "some data has not a child"

export default function App(){
    const [heading, setHeading] = useState("App page") 
      
    
    return <Fragment>
        <div className="card-parent">
          
           {
           cardData.map((card)=>{
            const{roll,data,img,title,description} = card
        return <Card
                roll={roll}
                data={data}
                img={img}
                title={title}
                description ={description}
              ></Card>
            })
           }

            {/* <Card
              rol={roll}
              data={data}
              img={img_1}
              title="মতামত এস আলম তখন কার এখন কার?"
              description = "অনেকের ধারণা ছিল, এস আলমের সঙ্গে আওয়ামী লীগের দহরমমহরম বেশি থাকায় বিএনপির নেতারা তাঁর বিরুদ্ধে অবস্থান নেবেন। কিন্তু সেই ধারণা ভুল প্রমাণিত হলো দুটি ঘটনায়।"
            ></Card>

            <Card
              rol={roll}
              data={data}
              img={img_2}
              title="মতামত এস আলম তখন কার এখন কার?"
              description = "অনেকের ধারণা ছিল, এস আলমের সঙ্গে আওয়ামী লীগের দহরমমহরম বেশি থাকায় বিএনপির নেতারা তাঁর বিরুদ্ধে অবস্থান নেবেন। কিন্তু সেই ধারণা ভুল প্রমাণিত হলো দুটি ঘটনায়।"
            ></Card> */}

 
        </div>
        
    </Fragment>
}

// export default App