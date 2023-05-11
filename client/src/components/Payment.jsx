import React, {useState, useEffect} from 'react'

import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import style from './style.module.css';

export const Payment = () => {



    const {id} = useParams();
    console.log(id);


    const [pizzas, setPizzas] = useState('')
    const [crustType, setCrustType] = useState('');
    const [isReg, setIsReg] = useState(false);
    const [isPesto, setIsPesto] = useState(false);
    const [isPepperoni, setIsPepperoni] = useState(false);
    const [isStaek, setIsSteak] = useState(false);
    const [isMushrooms, setIsMushrooms] = useState(false);
    const [isOnions, setIsOnions] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pizzas/' + id)
            .then(res => {
                console.log(res.data)
                setCrustType(res.data.crustType)
                setIsReg(res.data.isReg)
                setIsPesto(res.data.isPesto)
                setIsPepperoni(res.data.isPepperoni)
                setIsSteak(res.data.isStaek)
                setIsMushrooms(res.data.isMushrooms)
                setIsOnions(res.data.isOnions)
            })
            .catch(err => console.log(err))
    }, [id])








    return (
        <div className={style.container4}> <div>
            <img className={style.imgHeader} src='https://i.pinimg.com/736x/a5/70/38/a570380fc036fe2b7d9506f5e2923587.jpg' alt='pic' />
        </div>
            <div className={style.checkOut}>
                <div>
                    <h1 className={style.headerP1} >Fire Place Pizza</h1>
                </div>
                <div className={style.subHeader}>
                    <h3><Link style={{ textDecoration: 'none', color: 'orange' }} to='/'>Menu</Link></h3>
                    <h3><Link style={{ textDecoration: 'none', color: 'orange' }} to='/'>Specialty Pizzas</Link></h3>
                    <h3><Link style={{ textDecoration: 'none', color: 'orange' }} to='/'>Special Events</Link></h3>
                    <h3><Link style={{ textDecoration: 'none', color: 'orange' }} to='/'>Locations</Link></h3>
                </div>
                <button className={style.checkOutBtn}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link></button>
            </div>

            <div className={style.payment}>
                <div className={style.subPayment} >
                    <h1>Payment Info</h1>
                    <p>Payment Method:</p>
                    <input />
                    <p>First Name:</p>
                    <input />
                    <p>Last Name:</p>
                    <input />
                    <p>Card Number:</p>
                    <input type='number'/>
                    <p>Expiration Date: </p>
                    <input type='date'/>
                    <p>CVV:</p>
                    <input type='number'/>
                </div>
                <div>
                    <h1>Order</h1>
                    <h2>Items:</h2>
                    <h3>Large Regular Pizza </h3>
                    <h4>Ingredients: Pepperoni Mushrooms</h4>
                    <div>
                    <h3>Price: 20.70</h3>
                    <h3>Taxes: 1.80</h3>
                    <h2>Total: 22.50</h2>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Payment;