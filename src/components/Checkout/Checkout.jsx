import { useState, useContext } from "react"
import FormCheckout from "./FormCheckout"
import { CartContext } from "../../context/CartContext"
import { Timestamp, collection, addDoc } from "firebase/firestore"
import { Link } from "react-router-dom"
import db from "../../db/db.js"
import validateForm from "../../utils/validateForm.js";
import { toast } from "react-toastify"
import "./checkout.css"

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: "",
    emailRepeat: ""
  })
  const [orderId, setOrderId] = useState(null)
  const [orderDate, setOrderDate] = useState(null);
  const { cart, totalPrice, deleteCart } = useContext(CartContext)

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value })
  }

  const handleSubmitForm = async (event) => {
    event.preventDefault()

    if (dataForm.email !== dataForm.emailRepeat) {
      toast.warn("Los correos no coinciden.");
      return;
    }


    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      total: totalPrice(),
      date: Timestamp.fromDate(new Date())
    }

    
    const response = await validateForm(dataForm)
    if(response.status === "success"){
      await uploadOrder(order)
    }else{
      
      toast.warn(response.message)
    }
  }

  const uploadOrder = async (newOrder) => {
    try {
      const ordersRef = collection(db, "orders")
      const response = await addDoc(ordersRef, newOrder)

      setOrderId(response.id);
      setOrderDate(new Date().toLocaleString());
      
      deleteCart(true);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="checkout">
      {
        orderId ? (
          <div className="container-order">
            <h2>Orden enviada correctamente!! </h2>
            <p>Guarde su número de seguimiento: {orderId}</p>
            <p>Fecha y hora de la orden: {orderDate}</p>
            <Link to="/" className="button-to-home">Volver al inicio</Link>
          </div>
        ) : (
          <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm} />
        )
      }
    </div>
  )
}
export default Checkout