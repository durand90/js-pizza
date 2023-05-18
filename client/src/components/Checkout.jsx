import React, {useEffect, useState} from 'react'

import style from './style.module.css';

import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export const Checkout = () => {

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


    const handleClicke = (e) => {
        console.log('button clicked')
    }


    return (
        <div className={style.container3}> <div>
            <img className={style.imgHeader} src='https://i.pinimg.com/736x/a5/70/38/a570380fc036fe2b7d9506f5e2923587.jpg' alt='pic' />
        </div>
            <div className={style.checkOut}>
                <div>
                    <h1 className={style.headerP1} >Fire Place Pizza</h1>
                </div>
                <div className={style.subHeader}>
                <h3><Link style={{textDecoration: 'none', color: 'orange'}} to='/'>Menu</Link></h3>
                    <h3><Link style={{textDecoration: 'none', color: 'orange'}} to='/'>Specialty Pizzas</Link></h3>
                    <h3><Link style={{textDecoration: 'none', color: 'orange'}} to='/'>Special Events</Link></h3>
                    <h3><Link style={{textDecoration: 'none', color: 'orange'}} to='/'>Locations</Link></h3>
                </div>
                <button className={style.checkOutBtn}><Link style={{textDecoration: 'none'}} to='/'>Home</Link></button>
            </div>
            <div>
                <div className={style.sides}>
                    <div>
                        <h3>wings</h3>
                        <img className={style.imgReg} src='https://hips.hearstapps.com/hmg-prod/images/190416-air-fryer-wings-137-1556204553.jpg' alt='pic' />
                    </div>

                    <div>
                        <h3>Breadsticks</h3>
                        <img className={style.imgReg} src='https://foodmeanderings.com/wp-content/uploads/2020/06/Breadsticks-in-the-bread-machine.jpg' alt='pic' />
                    </div>
                    <div>
                        <h3>Cheese sticks</h3>
                        <img className={style.imgReg} src='https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/1/29/0/WU2107_Italian-Cheesesticks_s4x3.jpg.rend.hgtvcom.616.462.suffix/1548805448470.jpeg' alt='pic' />
                    </div>
                    <div>
                        <h3>Salad</h3>
                        <img className={style.imgReg} src='https://www.thespruceeats.com/thmb/r83ZPDHz-iy2VjRJMAf6ya3S-7A=/2500x1406/smart/filters:no_upscale()/perfectgreensalad2500-5993ab28c412440011db26df.jpg' alt='pic' />
                    </div>
                </div>
            </div>
            <div >
                <div className={style.dippingSauce}>
                    <h3>Dipping Sauce:</h3>
                    <div className={style.sauceLabel}>
                        <div>
                            <label >
                                <input type='checkbox' />
                                ranch
                            </label>
                        </div>
                        <div>
                            <label >
                                <input type='checkbox' />
                                honey mustard
                            </label>
                        </div>
                        <div>
                            <label >
                                <input type='checkbox' />
                                bbq
                            </label>
                        </div>
                        <div>
                            <label >
                                <input type='checkbox' />
                                Lemon Pepper
                            </label>
                        </div>
                        <div>
                            <label >
                                <input type='checkbox' />
                                Mint Chutney
                            </label>
                        </div>
                        <div>
                            <label >
                                <input type='checkbox' />
                                Creole Mayo
                            </label>
                        </div>
                        <div>
                            <label >
                                <input type='checkbox' />
                                Spicy Soy Mayo
                            </label>
                        </div>
                        <div>
                            <label >
                                <input type='checkbox' />
                                Caper Sauce
                            </label>
                        </div>
                        <div>
                            <label >
                                <input type='checkbox' />
                                Szechuan Sauce
                            </label>
                        </div> <div>
                            <label >
                                <input type='checkbox' />
                                Garlic Butter
                            </label>
                        </div> <div>
                            <label >
                                <input type='checkbox' />
                                Lemon Grass
                            </label>
                        </div>
                    </div>

                </div>
                <div className={style.orderSummary}>
                    <h2 className={style.checkOutH3} >Order Summary</h2>
                    <h3>Pizza:  {crustType}</h3>
                    <h4>Sauce: {isReg ? "Regular" : ''} {isPesto ? "Pesto" : ''} </h4>
                    <h4>Ingredients:  {isPepperoni ? ' Pepperoni' : ''} {isStaek ? ' Steak' : ''} {isMushrooms? ' Mushrooms' : ''} {isOnions ? ' Onions' : ''} </h4>
                    <h4>Size: Large</h4>
                    <h4>Taxes: 1.80</h4>
                    <h3>Total: 22.50</h3>
                    <div>
                        <div className={style.checkOutOpt}>
                        <button ><Link to='/payment'>Checkout</Link></button>
                        <button className={style.lastBtn} onClick={handleClick}>Add to order</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img className={style.imgBase} src='https://i.pinimg.com/564x/b2/78/d7/b278d7a4b630ff8ec2a184a43d052803.jpg' alt='pic'/>
                <img className={style.imgBase} src='https://i.ytimg.com/vi/T-_10up6Er8/maxresdefault.jpg'/>
            </div>
        </div>
    )
}

export default Checkout;