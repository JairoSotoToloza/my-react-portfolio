import React, { Component } from 'react'
export default class about extends Component {
    render() {
        return (
            <>
                <section id="about" className="s-about target-section">
                    <div className="row">
                        <div className="column large-3 tab-12">
                            <img className="s-about__pic" src="images/avatars/user-00.png" alt />
                        </div>
                        <div className="column large-9 tab-12 s-about__content">
                            <h3>A cerca de mí</h3>
                            <p>
                               Ingeniero informático y desarrollador de aplicaciones web.</p>
                            <hr />
                            <div className="row s-about__content-bottom">
                                <div className="column w-1000-stack">
                                    <h3>Detalles de contacto</h3>
                                    <p>
                                        Jairo Soto Toloza <br />
                                        Puerto Grosse #584, San Bernardo <br />
                                        Región Metropolitana  <br />
                                        <a href="tel:+56949167363">+569 4916 7363</a> <br />
                                        <a href="mailto:#0">jairosototoloza@protonmail.com</a>
                                    </p>
                                </div>
                                <div className="column w-1000-stack">
                                    <a href="#0" className="btn btn--download">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            style={{
                                                fill: "rgba(0, 0, 0, 1)",
                                                transform: "",
                                                msFilter: ""
                                            }}
                                        >
                                            <path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z" />
                                            <path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z" />
                                        </svg>
                                       Descargar CV 
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                    {/* end row */}
                </section>{" "}
                {/* end s-about */}
            </>
        )
    }
}