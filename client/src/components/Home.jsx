import React, { useEffect } from 'react'

import axios from 'axios';
import { Link } from 'react-router-dom';


import style from './style.module.css';

export const Home = () => {



    // useEffect(() => {
    //     axios.get('')
    // }, [])





    return (
        <div >
            <div className={style.container}>
                <div className={style.header}>
                    <h1 className={style.headerP1}>Pizza Sharks</h1>
                    <div className={style.subHeader}>
                    <h3><Link style={{textDecoration: 'none', color: 'orange'}} to='/'>Menu</Link></h3>
                    <h3><Link style={{textDecoration: 'none', color: 'orange'}} to='/'>Specialty Pizzas</Link></h3>
                    <h3><Link style={{textDecoration: 'none', color: 'orange'}} to='/'>Special Events</Link></h3>
                    <h3><Link style={{textDecoration: 'none', color: 'orange'}} to='/'>Locations</Link></h3>
                    </div>
                    <div>
                        <button className={style.headerBtn}><Link style={{textDecoration: 'none'}} to='/checkout'>My Order (0)</Link></button>
                        <button className={style.headerBtn}><Link style={{textDecoration: 'none'}} to='/order/Regular'>Order Online</Link></button>
                    </div>

                </div>

                <div className='slideShow'>

                    <div>
                        <img className={style.imgHeader} src='https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939__340.jpg' alt='pic of pizza' />
                    </div>
                    {/* <div>
                    <img src='https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg' alt='pic of pizza'/>
                    </div>
                    <div>
                    <img src='https://cdn.vox-cdn.com/thumbor/YVBsDOGLlK0HCFiVLrVn4eXQu8U=/0x0:2729x2664/1200x800/filters:focal(1080x1158:1516x1594)/cdn.vox-cdn.com/uploads/chorus_image/image/70012351/IMG_2164.0.jpeg' alt='pic of pizza'/>
                    </div>
                    <div>
                    <img src='https://www.gannett-cdn.com/presto/2021/12/15/PLAL/663997c8-74d7-43ab-b813-cfab0e52f839-Cajun_Saucer-3923.jpg' alt='pic of pizza'/>
                </div> */}
                </div>

                <div className={style.subContainer}>
                    <div className={style.one}>
                        <h2><Link style={{textDecoration: 'none'}} to='/order/Regular'>Pasta</Link></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <h2><Link style={{textDecoration: 'none'}} to='/'>Wings</Link></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <h2><Link style={{textDecoration: 'none'}} to='/'>Calzones</Link></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div >
                    <div className={style.one}>
                        <h2 className={style.homeH2}>Regular</h2>
                        <img className={style.imgReg} src='https://s3.amazonaws.com/fleischmann-wordpress/wp-content/uploads/2020/08/20055912/Thick-Crust-Pizza.jpg' alt='pic of pizza' />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quasi quo iste tenetur molestiae? Autem, nobis porro! Eum aut, quia optio e</p>
                        <button><Link style={{textDecoration: 'none'}} to='/order/Regular'>Order Now</Link></button>
                    </div>
                    <div className={style.one}>
                        <h2 className={style.homeH2}>Thin Crust</h2>
                        <img className={style.imgReg} src='https://cdn.cdkitchen.com/recipes/images/2016/03/1348-5022-mx.jpg' alt='pic of pizza' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam inventore odit eum autem qui reiciendis, facilis veniam at numquam nemo ea pariatur, tem?</p>
                        <button><Link style={{textDecoration: 'none'}} to='/order/Thin Crust'>Order Now</Link></button>
                    </div>
                    <div className={style.one}>
                        <h2 className={style.homeH2}>Pan Crust</h2>
                        <img className={style.imgReg} src='https://www.chewboom.com/wp-content/uploads/2018/04/Pizza-Hut-Introduces-New-Double-Cheesy-Crust-Pan-Pizza.jpg' alt='pic of pizza' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus nemo veritatis eius sed ratione. Totam nihil exercitationem facere saepe id, sequi!</p>
                        <button><Link style={{textDecoration: 'none'}} to='/order/Pan Crust'>Order Now</Link></button>
                    </div>
                </div>
                <div className={style.base}>
                    <img className={style.imgBase} src='https://cache.dominos.com/wam/prod/market/BS/_en/images/promo/f528015b-323e-4e8b-9ad8-42fad9c0c27c.jpg' alt='pic of pizza' />
                    {/* <img className={style.imgBase} src='https://cicis.com/wp-content/uploads/2022/03/large-specialty-pizza-coupon.jpg' /> */}
                    <img className={style.imgBase} src='https://www.eatdrinkdeals.com/wp-content/uploads/2019/04/pizzacoupons-pizzapromocodes-2018-675x251-675x214.jpg' alt='pic of pizza' />
                </div>

            </div>
        </div>
    )
}

export default Home;