
import css from './CamperPage.module.css'

import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { useState, useEffect, Suspense } from 'react';

const CamperPage = () => {
    return (
        <div>
            <div>
                <h2 className={css.title}>Mavericks</h2>
                <div className={css.middle}>
                    <div className={css.paragraph}>
                        <svg className={css.star} width="16" height="16" >
                            <use href="/sprite.svg#icon-star" >
                            </use>
                        </svg>
                        <p>4.4(2 Reviews)</p>
                    </div>
                    <div className={css.paragraph}>
                        <svg width="16" height="16">
                            <use href="/sprite.svg#icon-map" >
                            </use>
                        </svg>
                        <p>Kyiv, Ukraine</p>
                    </div>
                </div>
                <p className={css.title}>€8000.00</p>
                <ul>
                    <li>
                        <img src="/images/mavericks.jpg" alt="mavericks" />
                    </li>
                    <li>
                        <img src="/images/car2.jpg" alt="salon of mavericks" />
                    </li>
                    <li>
                        <img src="/images/car3.jpg" alt="first seat of mavericks" />
                    </li>
                    <li>
                        <img src="/images/car4.jpg" alt="great view from mavericks" />
                    </li>
                </ul>
                <p>Embrace simplicity and freedom with the Mavericks panel truck, an ideal choice for solo travelers or couples seeking a compact and efficient way to explore the open roads. This no-frills yet reliable panel truck offers the essentials for a comfortable journey, making it the perfect companion for those who value simplicity and functionality.</p>
                <ul>
                    <li>
                        <Link to="features">Features</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
}

export default CamperPage
