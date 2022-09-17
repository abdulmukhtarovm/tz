import { faBookmark, faClock } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight, faArrowTrendUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Navbar = () => {

    return (
        <div className='Navbar'>
            <div className="ad-top">
                <img src="img/ad-top.webp" alt="" />
            </div>

            <div className="navBar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <div className="logo">
                                <a href="/">
                                    <img className='w-100' src="img/logo-dark.svg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-5">
                            <ul className='nav-menu'>
                                <li className='nav-link'>
                                    <a className='nav__link ' href="#">
                                        Home <FontAwesomeIcon className='rot' icon={faChevronDown} />
                                    </a>
                                    <ul className='small-dropdown'>
                                        <li><a href="#">Home 2 <span>Hot</span></a></li>
                                        <li><a href="#">Home 3</a></li>
                                        <li><a href="#">Home 4 <span>New</span></a></li>
                                        <li><a href="#">Home 5</a></li>
                                    </ul>
                                </li>
                                <li className='nav-link'>
                                    <a className='nav__link ' href="#">
                                        Politics <FontAwesomeIcon className='rot' icon={faChevronDown} />
                                    </a>
                                    <div className='big-dropdown'>
                                        <div className="row">
                                            <div className="col-4 p-0 myPad ">
                                                <h3>Politics</h3>

                                                {/* <div className="img-shadow">
                                                    <img className='w-100' src="img/img-shad.webp" alt="" />
                                                </div> */}

                                                <div class="img-shadow-wrap inners">
                                                    <div class="img-shad-item">
                                                        <div class="img-shad-item-inner">
                                                            <img src="img/img-shad.webp" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="img-shad-item">
                                                        <div class="img-shad-item-inner">
                                                            <img src="img/img-shad1.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <h6>Politics is the art of looking for trouble, finding it everywhere, diagnosing it incorrectly and applying the wrong remedies.</h6>
                                                <div className="more">
                                                    <a href="#">
                                                        Show more <FontAwesomeIcon icon={faArrowRight} />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-4 p-0 myPad">
                                                <h4><FontAwesomeIcon icon={faArrowTrendUp} /> Top News </h4>
                                                <div className="block inners">
                                                    <a href=""> <div className="row">
                                                        <div className="col-3 mb-3 p-0">
                                                            <div className="img">
                                                                <img src="img/news1.webp" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="col-8 mb-3">
                                                            <div className="info">
                                                                <h5 href='#'>White House Reminds Lawmakers not to Travel to Afghanistan</h5>

                                                                <span>Aug 28, 2021</span>
                                                            </div>
                                                        </div>
                                                    </div></a>
                                                </div>

                                                <div className="block inners">
                                                    <a href="#">
                                                        <div className="row">
                                                            <div className="col-3 mb-3 p-0">
                                                                <div className="img">
                                                                    <img src="img/news2.webp" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="col-8 mb-3">
                                                                <div className="info">
                                                                    <a href='#'>Two Anti-Lockdown Leaders Arrested as Protests Held Across Valinor</a>

                                                                    <span>Aug 28, 2021</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>

                                                </div>
                                                <div className="block inners">
                                                    <a href="#">
                                                        <div className="row">
                                                            <div className="col-3 mb-3 p-0">
                                                                <div className="img">
                                                                    <img src="img/news3.webp" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="col-8 mb-3">
                                                                <div className="info">
                                                                    <a href='#'>National Day Rally 2023: Sacrifice, Effort Needed to Preserve Harmony</a>
                                                                    <span>Aug 28, 2021</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>

                                                </div>
                                            </div>
                                            <div className="col-4 p-0 myPad">
                                                <h4><FontAwesomeIcon icon={faClock} /> Latest News </h4>
                                                <div className="wrap inners">
                                                    <a href="/">
                                                        <h5 href="#">Bad Credit Shouldn’t Affect Health Insurance, Experts Say</h5>
                                                    </a>

                                                    <span>Sep 19, 2021</span>
                                                </div>
                                                <div className="wrap inners">
                                                    <a href="/">
                                                        <h5 href="#">What Is Women’s Equality Day and Why Is It Celebrated?</h5>
                                                    </a>

                                                    <span>Sep 19, 2021</span>
                                                </div>
                                                <div className="wrap inners">
                                                    <a href="/">
                                                        <h5 href="#">New Census Data Will Shake Up Alabama Politics</h5>
                                                    </a>

                                                    <span>Sep 19, 2021</span>
                                                </div>
                                                <div className="wrap inners">
                                                    <a href="/">
                                                        <h5 href="#">The States Braces for Protests Over New COVID Rules</h5>
                                                    </a>

                                                    <span>Sep 19, 2021</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className='nav-link'>
                                    <a className='nav__link' href="#">Technology <FontAwesomeIcon className='rot' icon={faChevronDown} /></a>
                                </li>
                                <li className='nav-link'>
                                    <a className='nav__link' href="#">Posts <FontAwesomeIcon className='rot' icon={faChevronDown} /></a>
                                </li>
                                <li className='nav-link'>
                                    <a className='nav__link' href="#"> Bookmarks</a>
                                </li>
                                <li className='nav-link'>
                                    <a className='nav__link' href="#">Pages <FontAwesomeIcon className='rot' icon={faChevronDown} /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar