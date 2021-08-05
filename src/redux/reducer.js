// For Shoes
import F1 from "../Assets/images/FormalShoes/F1.jpeg";
import S1 from "../Assets/images/SportShoes/S1.jpeg";
import nike1 from "../Assets/images/casualShoes/nike1.jpeg";
import C2 from "../Assets/images/casualShoes/C2.jpeg";
import C3 from "../Assets/images/casualShoes/C3.jpeg";
import C4 from "../Assets/images/casualShoes/C4.jpeg";
import C5 from "../Assets/images/casualShoes/C5.jpeg";
import C6 from "../Assets/images/casualShoes/C6.jpeg";
import C7 from "../Assets/images/casualShoes/C7.jpeg";
import C8 from "../Assets/images/casualShoes/C8.jpeg";
import C9 from "../Assets/images/casualShoes/C9.jpeg";
import C10 from "../Assets/images/casualShoes/C10.jpeg";
import C11 from "../Assets/images/casualShoes/C11.jpeg";
import C12 from "../Assets/images/casualShoes/C12.jpeg";
import C13 from "../Assets/images/casualShoes/C13.jpeg";
import F2 from "../Assets/images/FormalShoes/F2.jpeg";
import F3 from "../Assets/images/FormalShoes/F3.jpeg";
import F4 from "../Assets/images/FormalShoes/F4.jpeg";
import F5 from "../Assets/images/FormalShoes/F5.jpeg";
import F6 from "../Assets/images/FormalShoes/F6.jpeg";
import F7 from "../Assets/images/FormalShoes/F7.jpeg";
import F8 from "../Assets/images/FormalShoes/F8.jpeg";
import F9 from "../Assets/images/FormalShoes/F9.jpeg";
import F10 from "../Assets/images/FormalShoes/F10.jpeg";
import F11 from "../Assets/images/FormalShoes/F11.jpeg";
import F12 from "../Assets/images/FormalShoes/F12.jpeg";
import F13 from "../Assets/images/FormalShoes/F13.jpeg";
import F14 from "../Assets/images/FormalShoes/F14.jpeg";
import F15 from "../Assets/images/FormalShoes/F15.jpeg";
import S2 from "../Assets/images/SportShoes/S2.jpeg";
import S3 from "../Assets/images/SportShoes/S3.jpeg";
import S4 from "../Assets/images/SportShoes/S4.jpeg";
import S5 from "../Assets/images/SportShoes/S5.jpeg";
import S6 from "../Assets/images/SportShoes/S6.jpeg";
import S7 from "../Assets/images/SportShoes/S7.jpeg";
import S8 from "../Assets/images/SportShoes/S8.jpeg";
import S9 from "../Assets/images/SportShoes/S9.jpeg";
import S10 from "../Assets/images/SportShoes/S10.jpeg";
// For shirts roadster
import R1 from "../Assets/images/shirts/1/R1.webp";
import R2 from "../Assets/images/shirts/1/R2.webp";
import R3 from "../Assets/images/shirts/1/R3.webp";
import R4 from "../Assets/images/shirts/1/R4.webp";
//For shirts  Wrongn
import W1 from "../Assets/images/shirts/2/W1.webp";
import W2 from "../Assets/images/shirts/2/W2.webp";
import W3 from "../Assets/images/shirts/2/W3.jpg";
import W4 from "../Assets/images/shirts/2/W4.jpg";
export const CARTITEM = 'CARTITEM';
export const COUPON = 'COUPON';
export const SHOESDATA = 'SHOESDATA';
export const WISHLIST = "WISHLIST";
export const SHIRTSDATA = "SHIRTSDATA";
export const PRODUCTTYPES = "PRODUCTTYPES";
export const FILTERBRAND = "FILTERBRAND";

export const addCartItem = id => ({
    type: CARTITEM,
    payload: id,
});
export const addCoupon = id =>({
    type:COUPON,
    payload:id,
});
export const addShoesData =id =>({
    type:SHOESDATA,
    payload:id,
});
export const addWishList = id =>({
  type:WISHLIST,
  payload:id
});
export const addShirtsData= id=>({
  type:SHIRTSDATA,
  payload:id
});
export const addProductTypes = id=>({
  type:PRODUCTTYPES,
  payload:id
})
export const addFilterBrand=id=>({
  type:FILTERBRAND,
  payload:id
})
export const initialState = {
    cartItem: [],
    coupon: [
        {
            name:"FRIDAY",
            discount:40
        },
        {
            name:"ISITHORA",
            discount:100
        }
    ],
    // for wishList
    wishList:[],
    // Shoes data
    shoesData : [
        {
          ID: "001",
          productName:"shoes",          
          type: "casual",
          brand: "Nike",
          name: "Court Royale 2 Low Sneakers For Men  (Black)",
          price: 2517,
          imageMain: nike1,    
          qty:1,
          added:false,
          addedWishList:false,
        },
        {
          ID: "002",
          productName:"shoes",          
          type: "formal",
          brand: "Jack & Jones",
          name: "Oxford For Men  (Blue)",
          price: 4499,
          imageMain: F1,    
          qty:1,
          added:false,addedWishList:false,
        },
        {
          ID: "003",
          productName:"shoes",          
          type: "sports",
          brand: "Adidas",
          name: "Ub 21 Running Shoes For Men  (Grey)",
          price: 17999,
          imageMain: S1,    
          qty:1,
          added:false,addedWishList:false,
        },
        
        {      
          ID: "004",
          productName:"shoes",          
          type:"casual",
          brand:"Nike",
          name: "Air Max VG-R Casuals For Men  (White)",
          price: 5163,
         imageMain:C2,
         qty:1,
         added:false,addedWishList:false,
         
        },
        {      
          ID: "005",
          productName:"shoes",          
          type:"casual",
          brand:"Adidas",
          name: "IIM 4D Casuals For Men  (Yellow)",
          price: 21999,
         imageMain:C3,
         qty:1,
         added:false,addedWishList:false,
         
        },
        {      
          ID: "006",
          productName:"shoes",          
          type:"casual",
          brand:"Cole Haan ",
          name: "Boots For Men  (Brown)",
          price: 19999,
         imageMain:C4,
         qty:1,
         added:false,addedWishList:false,
         
        },
        {      
          ID: "007",
          productName:"shoes",          
          type:"casual",
          brand:"ADIDAS ORIGINALS",
          name: "ZX 2K BOOST MOLDED Casuals For Men  (White)",
          price: 14999,
         imageMain:C5, 
         qty:1  ,
         added:false,addedWishList:false,
        },
        {      
          ID: "008",
          productName:"shoes",          
          type:"casual",
          brand:"ADIDAS ORIGINALS",
          name: "ZX 2K BOOST Casuals For Men  (Black)",
          price: 13999,
         imageMain:C6,   
         qty:1,
         added:false,addedWishList:false,
        },
        {      
          ID: "009",
          productName:"shoes",          
          type:"casual",
          brand:"REEBOK CLASSICS   ",
          name: "Instapump Fury OG Casuals For Men  (Grey)",
          price: 12999,
         imageMain:C7,  
         qty:1,
         added:false,addedWishList:false, 
        },
        {      
          ID: "010",
          productName:"shoes",          
          type:"casual",
          brand:"ADIDAS ORIGINALS",
          name: "Nmd_R1 Sneakers For Men  (Beige)",
          price: 8660,
         imageMain:C8,  
         qty:1 ,
         added:false,addedWishList:false,
        },
        {      
          ID: "011",
          productName:"shoes",          
          type:"casual",
          brand:"FILA",
          name: "GRANT HILL 2 High Tops For Men  (Multicolor)",
          price: 7999,
         imageMain:C9,
         qty:1,
         added:false,addedWishList:false,   
        },
        {      
          ID: "012",
          productName:"shoes",          
          type:"casual",
          brand:"PUMA",
          name: "SF Rom Sneakers For Men  (Red)",
          price: 7499,
         imageMain:C10,  
         qty:1,
         added:false,addedWishList:false, 
        },
        {      
          ID: "013",
          productName:"shoes",          
          type:"casual",
          brand:"PUMA",
          name: "Backcourt Mid High Tops For Men  (White)",
          price: 6999,
         imageMain:C11,
         qty:1,
         added:false,addedWishList:false,   
        },
        {      
          ID: "014",
          productName:"shoes",          
          type:"casual",
          brand:"TIMBERLAND ",
          name: "Boots For Men  (Tan)",
          price: 10499,
         imageMain:C12, 
         qty:1,
         added:false,addedWishList:false,  
        },
        {      
          ID: "015",
          productName:"shoes",          
          type:"casual",
          brand:"Bugatti",
          name: "Boots For Men  (Brown)",
          price: 7199,
         imageMain:C13, 
         qty:1,
          added:false,addedWishList:false,  
        },
        {
          ID: "016",
          productName:"shoes",          
          type: "formal",
          brand: "Cole Haan",
          name: "Derby For Men  (Brown)",
          price: 19999,
          imageMain: F2,    
          qty:1,
          added:false,addedWishList:false,
        },
        {
          ID: "017",
          productName:"shoes",          
          type: "formal",
          brand: "Cole Haan",
          name: "JEFFERSON GRAND 2.0 PLAIN OX Derby For Men  (Black)",
          price: 19999,
          imageMain: F3,    
          qty:1,
          added:false,addedWishList:false,
        },
        {
          ID: "018",
          productName:"shoes",          
          type: "formal",
          brand: "Cole Haan",
          name: "Lace Up For Men  (Black)",
          price: 19999,
          imageMain: F4,    
          qty:1,
          added:false,addedWishList:false,
        },
        {
          ID: "019",
          productName:"shoes",          
          type: "formal",
          brand: "Cole Haan",
          name: "Lace Up For Men  (Tan)",
          price: 19999,
          imageMain: F5,    
          qty:1,
          added:false,addedWishList:false,
        },
        {
          ID: "020",
          productName:"shoes",          
          type: "formal",
          brand: "CELBY ",
          name: "Oxford For Men  (Tan)",
          price: 14990,
          imageMain: F6,    
          qty:1,
          added:false,addedWishList:false,
        },
        {
          ID: "021",
          productName:"shoes",          
          type: "formal",
          brand: "CELBY ",
          name: "Oxford For Men  (Black)",
          price: 14990,
          imageMain: F7,    
          qty:1,
          added:false,addedWishList:false,
        },
        {
          ID: "022",
          productName:"shoes",          
          type: "formal",
          brand: "CELBY ",
          name: "Oxford For Men  (Tan)",
          price: 14990,
          imageMain: F8,    
          qty:1,
          added:false,addedWishList:false,
        },
        {
          ID: "023",
          productName:"shoes",          
          type: "formal",
          brand: "CELBY ",
          name: "Celby Formal Black Wingtip Brogue Height Increasing Leather Shoes for Men Lace Up For Men  (Black)",
          price: 14990,
          imageMain: F9,    
          qty:1,
          added:false,addedWishList:false,
        },
        {
          ID: "024",
          productName:"shoes",          
          type: "formal",
          brand: "CELBY ",
          name: "Lace Up For Men  (Tan)",
          price: 14990,
          imageMain: F10,    
          qty:1,
          added:false,addedWishList:false,
        },
        {
          ID: "025",
          productName:"shoes",          
          type: "formal",
          brand: "ARROW",
          name: "Brogues For Men  (Red)",
          price: 3000,
          imageMain: F11,    
          qty:1,
          added:false,addedWishList:false,
        },
        {
          ID: "026",
          productName:"shoes",          
          type: "formal",
          brand: "Bugatti",
          name: "Derby For Men  (Grey)",
          price: 3000,
          imageMain: F12,    
          qty:1,
          added:false,addedWishList:false,
        },
        {
          ID: "027",
          productName:"shoes",          
          type: "formal",
          brand: "WAGOUS ",
          name: "Lace Up For Men  (Brown)",
          price: 2999,
          imageMain: F13,    
          qty:1,
          added:false,addedWishList:false,
        },
        {
          ID: "028",
          productName:"shoes",          
          type: "formal",
          brand: "LEE COOPER  ",
          name: "Lace Up For Men  (Brown)",
          price: 2999,
          imageMain: F14,    
          qty:1,
          added:false,addedWishList:false,
        },
        {
          ID: "029",
          productName:"shoes",          
          type: "formal",
          brand: "VESFRITA ",
          name: "Height Increasing Formal Derby Lace-Up Shoes Slip On For Men  (Black)",
          price: 2500,
          imageMain: F15,    
          qty:1,
          added:false,addedWishList:false,
        },
        {
          ID: "30",

          productName:"shoes",          type: "sports",
          brand: "REEBOCK ",
          name: "Kosko Running Shoes For Men  (Navy)",
          price: 2100,
          imageMain: S2,    
          qty:1,
          added:false,addedWishList:false,
        },
        {
          ID: "31",

          productName:"shoes",          type: "sports",
          brand: "ADIDAS",
          name: "Solar Boost 19 M Running Shoes For Men  (Black)",
          price: 15999,
          imageMain: S3,    
          qty:1,
          added:false,addedWishList:false,
        },
        {
          ID: "32",

          productName:"shoes",          type: "sports",
          brand: "ADIDAS",
          name: "Solar Boost 19 M Running Shoes For Men  (White)",
          price: 15999,
          imageMain: S4,    
          qty:1,
          added:false,addedWishList:false,
        },
        {
          ID: "33",

          productName:"shoes",          type: "sports",
          brand: "asics",
          name: "GEL-NIMBUS 23 Running Shoes For Men  (Grey, Blue)",
          price: 14999,
          imageMain: S5,    
          qty:1,
          added:false,addedWishList:false,
        },
        {
          ID: "34",

          productName:"shoes",          type: "sports",
          brand: "asics",
          name: "GEL-NIMBUS 23 Running Shoes For Men  (Blue, Black)",
          price: 14999,
          imageMain: S6,    
          qty:1,
          added:false,addedWishList:false,
        },
        {
          ID: "34",

          productName:"shoes",          type: "sports",
          brand: "asics",
          name: "GEL-KAYANO 27 Running Shoes For Men  (Grey, Blue)",
          price: 14949,
          imageMain: S7,    
          qty:1,
          added:false,addedWishList:false,
        },
        {
          ID: "35",

          productName:"shoes",          type: "sports",
          brand: "ADIDAS",
          name: "X9000L4 Running Shoes For Men  (Grey)",
          price: 13999,
          imageMain: S8,    
          qty:1,
          added:false,addedWishList:false,
        },
        {
          ID: "36",
          type: "sports",
          productName:"shoes",          
          brand: "asics ",
          name: "Running Shoes For Men  (Blue)",
          price: 13999,
          imageMain: S9,    
          qty:1,
          added:false,addedWishList:false,
        },
        {
          ID: "37",
          productName:"shoes",                  
          type: "sports",
          brand: "SAUCONY",
          name: "Triumph 19 Neutral Running Shoes For Men  (Blue)",
          price: 13990,
          imageMain: S10,    
          qty:1,
          added:false,addedWishList:false,
        },
      ],
      // Shirts data
      shirtsData:[
        {
          ID:'S1',
          productName:"shirts", 
          brand:'Roadster',
          name:"Men Maroon & Navy Blue Checked Regular Fit Casual Shirt",
          price:1174,
          size:0,
          seller:"Truenet Commerce",
          bestOffers:["Applicable on: Orders above Rs. 2499 (only on first purchase)","Coupon code: MYNTRA400","Coupon Discount: Rs. 400 off (check cart for final savings)"],
          emi:["EMI option available","EMI starting from Rs.40/month"],
          productDetails:[{productDetails:"Maroon and Navy Blue checked casual shirt, has a spread collar, a full button placket, long sleeves with roll-up tab features, a patch pocket, curved hem",sizeFit:["Regular Fit","The model (height 6') is wearing a size 40"],materialCare:["100% cotton","Machine-wash"],specification:[{sleeveLength:"LongSleeves",collar:"Spread Collor",fit:"Regular Fit",print:"Tartan Checks",occasion:"Casual",length:"Regular",hemline:"curved",placket:"Button Placket"}]}],
          imageMain:R1,
          images:[R1,R2,R3,R4],
          qty:1,
          added:false,
          
        },
        {
          ID:'S2',
          productName:"shirts", 
          brand:'WRONGN',
          name:"testing",
          price:1077,
          size:0,
          seller:"Truenet Commerce",
          bestOffers:["Applicable on: Orders above Rs. 2499 (only on first purchase)","Coupon code: MYNTRA400","Coupon Discount: Rs. 400 off (check cart for final savings)"],
          emi:["EMI option available","EMI starting from Rs.40/month"],
          productDetails:[{productDetails:"Maroon and Navy Blue checked casual shirt, has a spread collar, a full button placket, long sleeves with roll-up tab features, a patch pocket, curved hem",sizeFit:["Regular Fit","The model (height 6') is wearing a size 40"],materialCare:["100% cotton","Machine-wash"],specification:[{sleeveLength:"LongSleeves",collar:"Spread Collor",fit:"Regular Fit",print:"Tartan Checks",occasion:"Casual",length:"Regular",hemline:"curved",placket:"Button Placket"}]}],
          imageMain:W1,
          images:[W1,W2,W3,W4],
          qty:1,
          added:false,
          addedWishList:false
          
        }
      ],
      // Product types for check box in product page
      productTypes:[
        // 1
        {
          name:"Add-Ons",
            types:[
              {
                name:"comes with...",
                status:false
              },          
            ],
            arrow:false,                 
        
        },
        // 2
        {
          name:"Bundles",
            types:[
              {
                name:"Bundles",
                status:false
              },  
              {
                name:"Single Styles",
                status:false
              },         
            ],
            arrow:false,                 
        
        },
        // 3
        {
          name:"Character",
            types:[
              {
                name:"Angry Birds",
                status:false
              },  
              {
                name:"Avengers",
                status:false
              },
              {
                name:"Captain America",
                status:false
              },  
              {
                name:"Donald Duck",
                status:false
              }, {
                name:"Iron Man",
                status:false
              },  
              {
                name:"Little Krishna",
                status:false
              }, {
                name:"Marvel",
                status:false
              },  
              {
                name:"NASA",
                status:false
              }, {
                name:"Spongebob",
                status:false
              },  
              {
                name:"Batman",
                status:false
              },         
            ],
            arrow:false,                 
        
        },
        // 4
        {
          name:"Collar",
            types:[
              {
                name:"Band Collar",
                status:false
              },  
              {
                name:"Built-up Collar",
                status:false
              },
              {
                name:"Button-Down...",
                status:false
              },  
              {
                name:"Club Collar",
                status:false
              }, {
                name:"Collar less",
                status:false
              },  
              {
                name:"Cuban collar",
                status:false
              }, {
                name:"Cutaway collar",
                status:false
              },  
              {
                name:"Hood",
                status:false
              }, {
                name:"Manadarin...",
                status:false
              },  
              {
                name:"Peter Pan Col...",
                status:false
              },
                       
            ],
            arrow:false,                 
        
        },
        // 5
        {
          name:"Country of Origin",
            types:[
              {
                name:"All countries",
                status:false
              },  
              {
                name:"India",
                status:false
              },
            ]
          },
          // 6
          {
            name:"Fabric",
              types:[
                {
                  name:"Cotton",
                  status:false
                },  
                {
                  name:"Coton Linen",
                  status:false
                },
                {
                  name:"crepe",
                  status:false
                },  
                {
                  name:"Hemp",
                  status:false
                }, {
                  name:"Linen",
                  status:false
                },  
                {
                  name:"Liva",
                  status:false
                }, {
                  name:"Lyocell",
                  status:false
                },  
                {
                  name:"Modal",
                  status:false
                }, {
                  name:"Nylon",
                  status:false
                },  
                {
                  name:"Organic cotton",
                  status:false
                },
                         
              ],
              arrow:false,                 
          
          },
          // 7
          {
            name:"Fit",
              types:[
                {
                  name:"Boxy",
                  status:false
                },  
                {
                  name:"Regular Fit",
                  status:false
                },
                {
                  name:"Skinny Fit",
                  status:false
                },  
                {
                  name:"Slim Fit",
                  status:false
                },
                {
                  name:"Tailored Fit",
                  status:false
                },
              ]
            },

      ] ,
      filterBrand:[]
      
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CARTITEM:
            return {
                ...state,
                cartItem: action.payload
            }
        case COUPON:
            return{
                ...state,
                coupon:action.payload
            }  
        case SHOESDATA:
            return{
                ...state,
                shoesData:action.payload
            }
        case WISHLIST:
          return{
            ...state,
            wishList:action.payload
          } 
          case SHIRTSDATA:
          return{
            ...state,
            shirtsData:action.payload
          }  
          case PRODUCTTYPES:
            return{
              ...state,
              productTypes:action.payload
            } 
           case FILTERBRAND:
             return{
               ...state,
               filterBrand:action.payload
             }    
        default:
            return state
    }
};
export default rootReducer;