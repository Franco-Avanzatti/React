import db from "../db/db.js";
import { collection, addDoc } from "firebase/firestore"

const products = [
    {
        id: "Gtr34",
        name: "Guitarra Gibson SG",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, officiis cumque quis sapiente voluptates nulla quos vel ad soluta dolore, libero vitae commodi facere fugiat laudantium. Suscipit atque nam saepe.",
        price: 2774909,
        stock: 5,
        image: "/img/gtr-gibson-sg.png",
        category: "guitarras-electricas"
    },
    {
        id: "Gtr45",
        name: "Guitarra Telecaster Jay",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, officiis cumque quis sapiente voluptates nulla quos vel ad soluta dolore, libero vitae commodi facere fugiat laudantium. Suscipit atque nam saepe.",
        price: 454037,
        stock: 8,
        image: "/img/gtr-telecaster-jay.png",
        category: "guitarras-electricas"
    },
    {
        id: "Bj566",
        name: "Bajo Squier Jazz Bass",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, officiis cumque quis sapiente voluptates nulla quos vel ad soluta dolore, libero vitae commodi facere fugiat laudantium. Suscipit atque nam saepe.",
        price: 898204,
        stock: 6,
        image: "/img/bajo-squier-jazz.png",
        category: "bajo-electrico"
    },
    {
        id: "Bj455",
        name: "Bajo SX",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, officiis cumque quis sapiente voluptates nulla quos vel ad soluta dolore, libero vitae commodi facere fugiat laudantium. Suscipit atque nam saepe.",
        price: 505007,
        stock: 3,
        image: "/img/bajo-sx-bd1.png",
        category: "bajo-electrico"
    },
    {
        id: "Bt467",
        name: "Batería Pearl",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, officiis cumque quis sapiente voluptates nulla quos vel ad soluta dolore, libero vitae commodi facere fugiat laudantium. Suscipit atque nam saepe.",
        price: 1515248,
        stock: 1,
        image: "/img/bateria-pearl-ex.png",
        category: "bateria-percusion"
    },
    {
        id: "bt765",
        name: "Batería DW Collectors",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, officiis cumque quis sapiente voluptates nulla quos vel ad soluta dolore, libero vitae commodi facere fugiat laudantium. Suscipit atque nam saepe.",
        price: 11025001,
        stock: 2,
        image: "/img/bateria-dw-collectors.png",
        category: "bateria-percusion"
    },
    {
        id: "sn6547",
        name: "Sistema de Sonido Street Sound",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, officiis cumque quis sapiente voluptates nulla quos vel ad soluta dolore, libero vitae commodi facere fugiat laudantium. Suscipit atque nam saepe.",
        price: 671289,
        stock: 11,
        image: "/img/sistema-sonido-street-sound.png",
        category: "audio-sonido"
    },
    {
        id: "sn456",
        name: "Consola SKP Pro",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, officiis cumque quis sapiente voluptates nulla quos vel ad soluta dolore, libero vitae commodi facere fugiat laudantium. Suscipit atque nam saepe.",
        price: 514498,
        stock: 4,
        image: "/img/consola-skp-pro.png",
        category: "audio-sonido" 
    }
]

const seedProducts = async() => {
    try{
      const productsRef = collection(db, "products")
      products.map( async( { id, ...dataProduct } ) => {
        await addDoc(productsRef, dataProduct)
      })
  
      console.log("Productos subidos correctamente!")
    }catch(error){
      console.log(error)
    }
  }
  
  seedProducts()