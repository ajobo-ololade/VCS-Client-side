import React from 'react';

function Carousel() {
    return (
        <>
            {/* <!-- Carousel wrapper --> */}
            <div id="carouselMaterialStyle" className="carousel slide carousel-fade" data-mdb-ride="carousel">
                {/* <!-- Indicators --> */}
                <div className="carousel-indicators">
                    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="0" className="active" aria-current="true"
                        aria-label="Slide 1"></button>
                    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="2" aria-label="Slide 3"></button>
                </div>

                {/* <!-- Inner --> */}
                <div className="carousel-inner rounde">
                    {/* <!-- Single item --> */}
                    <div className="carousel-item active" id="first">
                        <div className="w-50">
                            <div className="mask">
                                <h5 className='text-white text-center'>Virtual Classroom </h5>
                                <p className='text-white text-center'>To have as many hafidh and hafidha among the muslims</p>
                                {/* <button class="btn d-block m-auto w-25 btn-outline-warning">Specialists</button> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- Single item --> */}
                    <div className="carousel-item" id="second">
                    <div className="w-50">
                            <div className="mask">
                                <h5 className='text-white text-center'>Virtual Classroom </h5>
                                <p className='text-white text-center'>To have as many hafidh and hafidha among the muslims</p>
                                {/* <button class="btn d-block m-auto w-25 btn-outline-warning">Specialists</button> */}
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single item --> */}
                    <div className="carousel-item" id="third">
                    <div className="w-50">
                            <div className="mask">
                                <h5 className='text-white text-center'>Virtual Classroom </h5>
                                <p className='text-white text-center'>To have as many hafidh and hafidha among the muslims</p>
                                {/* <button class="btn d-block m-auto w-25 btn-outline-warning">Specialists</button> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Inner --> */}

                {/* <!-- Controls --> */}
                <button className="carousel-control-prev" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel