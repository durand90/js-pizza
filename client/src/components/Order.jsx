import React, { useState, useEffect } from 'react'

import style from './style.module.css';

import { Link, useHistory } from 'react-router-dom';

import { useParams } from 'react-router';


import pizza from './video/pizza.mp4';
import axios from 'axios';


export const Order = () => {

    const { crust } = useParams();
    console.log(crust)

    const history = useHistory();

    const [pizzas, setPizzas] = useState('')
    const [crustType, setCrustType] = useState(crust);
    const [isReg, setIsReg] = useState(false);
    const [isPesto, setIsPesto] = useState(false);
    const [isPepperoni, setIsPepperoni] = useState(false);
    const [isStaek, setIsSteak] = useState(false);
    const [isMushrooms, setIsMushrooms] = useState(false);
    const [isOnions, setIsOnions] = useState(false);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPizza = {
            crustType,
            isReg,
            isPesto,
            isPepperoni,
            isStaek,
            isMushrooms,
            isOnions
        }
        //console.log('form submitted', crustType, isReg, isPesto, isPepperoni, isStaek, isMushrooms, isOnions)
        axios.post('http://localhost:8000/api/pizzas', newPizza)
            .then(res => {
                console.log(res.data)
                setPizzas(res.data._id)
                // history.push('/checkout/' + pizzas )

            })
            .catch(err => console.log(err))
            

    }







    return (
        <div className={style.container2}>
            <div>
                <img className={style.imgHeader} src='http://ginnsgourmet.com/wp-content/uploads/2016/01/Slide2-1600x500.png' alt='pic' />
            </div>
            <div className={style.pizzaOrder}>
                <h1 className={style.headerP1} >Fire Place Pizza</h1>
                <div className={style.subHeader}>
                    <h3><Link style={{ textDecoration: 'none', color: 'orange' }} to='/'>Menu</Link></h3>
                    <h3><Link style={{ textDecoration: 'none', color: 'orange' }} to='/'>Specialty Pizzas</Link></h3>
                    <h3><Link style={{ textDecoration: 'none', color: 'orange' }} to='/'>Special Events</Link></h3>
                    <h3><Link style={{ textDecoration: 'none', color: 'orange' }} to='/'>Locations</Link></h3>
                </div>

                <div>
                    <button className={style.orderBtn}><Link style={{ textDecoration: 'none' }} to='/checkout'>MY Order (0)</Link></button>
                    <button className={style.orderBtn}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link></button>
                </div>

            </div>

            <div className={style.new}>
                <div>


                    <form onSubmit={handleSubmit}>
                        <div>
                            <h2>Crust Type: {crust}</h2>
                        </div>
                        <div >
                            <h2>Pizza Sauce:</h2>
                            <div className={style.pSauceLabel}>
                                <div>
                                    <label>
                                        <input type='checkbox' onChange={(e) => setIsReg(e.target.checked)} value={isReg} />
                                        Regular
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type='checkbox' onChange={(e) => setIsPesto(e.target.checked)} value={isPesto} />
                                        Pesto
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type='checkbox' />
                                        Buffalo
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type='checkbox' />
                                        Garlic Butter
                                    </label>
                                </div><div>
                                    <label>
                                        <input type='checkbox' />
                                        BBQ
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className={style.ingredients}>
                            <h2>Ingredients:</h2>

                            <div className={style.subIngredients}>
                                <div>
                                    <label className={style.ingredientLabel}>
                                        <input type='checkbox' onChange={(e) => setIsPepperoni(e.target.checked)} value={isPepperoni} />
                                        Pepperoni
                                    </label>
                                </div>

                                <div>
                                    <label className={style.ingredientLabel}>
                                        <input type='checkbox' onChange={(e) => setIsSteak(e.target.checked)} value={isStaek} />
                                        Stake
                                    </label>
                                </div>

                                <div>
                                    <label className={style.ingredientLabel}>
                                        <input type='checkbox' onChange={(e) => setIsMushrooms(e.target.checked)} value={isMushrooms} />
                                        Mushrooms
                                    </label>
                                </div>

                                <div>
                                    <label className={style.ingredientLabel}>
                                        <input type='checkbox' onChange={(e) => setIsOnions(e.target.checked)} value={isOnions} />
                                        Onions
                                    </label>
                                </div>

                                <div>
                                    <label className={style.ingredientLabel}>
                                        <input type='checkbox' />
                                        Olives
                                    </label>
                                </div>

                                <div>
                                    <label className={style.ingredientLabel}>
                                        <input type='checkbox' />
                                        Sausage
                                    </label>
                                </div>

                                <div>
                                    <label className={style.ingredientLabel}>
                                        <input type='checkbox' />
                                        Jalapenos
                                    </label>
                                </div>

                                <div>
                                    <label className={style.ingredientLabel}>
                                        <input type='checkbox' />
                                        Pineapple
                                    </label>
                                </div>

                                <div>
                                    <label className={style.ingredientLabel}>
                                        <input type='checkbox' />
                                        Green Peppers
                                    </label>
                                </div>

                                <div>
                                    <label className={style.ingredientLabel}>
                                        <input type='checkbox' />
                                        Tomatoes
                                    </label>
                                </div>

                                <div>
                                    <label className={style.ingredientLabel}>
                                        <input type='checkbox' />
                                        Basil
                                    </label>
                                </div>

                                <div>
                                    <label className={style.ingredientLabel}>
                                        <input type='checkbox' />
                                        Ham
                                    </label>
                                </div>

                                <div>
                                    <label className={style.ingredientLabel}>
                                        <input type='checkbox' />
                                        Meatballs
                                    </label>
                                </div>

                                <div>
                                    <label className={style.ingredientLabel}>
                                        <input type='checkbox' />
                                        Anchovies
                                    </label>
                                </div>

                                <div>
                                    <label className={style.ingredientLabel}>
                                        <input type='checkbox' />
                                        Dill
                                    </label>
                                </div>

                                <div>
                                    <label className={style.ingredientLabel}>
                                        <input type='checkbox' />
                                        Ground Beef
                                    </label>
                                </div>

                                <div>
                                    <label className={style.ingredientLabel}>
                                        <input type='checkbox' />
                                        Oregano
                                    </label>
                                </div>

                                <div>
                                    <label className={style.ingredientLabel}>
                                        <input type='checkbox' />
                                        Salami
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button className={style.orderCheckOut}>Add Order</button>
                    </form>
                    <button><Link to={'/checkout/'+ pizzas}>View Order</Link></button>
                    {/* <p>{JSON.stringify(pizzas)} </p> */}
                </div>
                <div className={style.new2}>
                    <video autoPlay loop muted>
                        <source
                            autoPlay loop muted
                            src={pizza}
                            type='video/mp4'
                        />
                    </video>
                </div>
            </div>
            <div className={style.orderFooter}>
                <img src='https://assets.visme.co/templates/banners/thumbnails/i_Pizza-Coupon_full.jpg' alt='pic' />
                <img src='https://i.pinimg.com/originals/94/03/f2/9403f2cc16fdc1dba3a091a7e5d2aa0b.jpg' alt='pic' />
            </div>
        </div >
    )
}

export default Order;