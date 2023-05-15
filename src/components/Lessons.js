import React from 'react';
import { TopNav } from './TopNav';
import './Lesson.css';

export const Lessons = () => {
    return (
        <React.Fragment>
            <TopNav />
            <section className="LessonsPage">
                <div className='LessonsRow' style={{ margin:'0px auto' }}>

                    <div class="responsive">
                        <div className="LessonsItem">
                            <img src="images/1st.png" alt="" style={{ width: "75%", height: "auto", left: "10%", }} />
                            <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                        </div>
                    </div>

                    <div class="responsive">
                        <div className="LessonsItem">
                            <img src="images/2nd.png" alt="" style={{ width: "75%", height: "auto", left: "10%", }} />
                            <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                        </div>
                    </div>

                    <div class="responsive">
                        <div className="LessonsItem">
                            <img src="images/3rd.png" alt="" style={{ width: "75%", height: "auto", left: "10%", }} />
                            <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                        </div>
                    </div>

                    <div class="responsive">
                        <div className="LessonsItem">
                            <img src="images/3rd.png" alt="" style={{ width: "75%", height: "auto", left: "10%", }} />
                            <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                        </div>
                    </div>
                </div>

                <div style={{ margin: '0px auto' }}>
                    <h1 style={{ marginTop: '5rem', textAlign: 'start', position: 'relative', left: '2rem' }}>Popular Chefs</h1>
                    <div className='LessonsRow'>
                        <div class="responsive">
                            <div className="LessonsItem">
                                <img src="images/3rd.png" alt="" style={{ width: "75%", height: "auto", left: "10%", }} />
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>

                        <div class="responsive">
                            <div className="LessonsItem">
                                <img src="images/3rd.png" alt="" style={{ width: "75%", height: "auto", left: "10%", }} />
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>

                        <div class="responsive">
                            <div className="LessonsItem">
                                <img src="images/3rd.png" alt="" style={{ width: "75%", height: "auto", left: "10%", }} />
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>

                        <div class="responsive">
                            <div className="LessonsItem">
                                <img src="images/3rd.png" alt="" style={{ width: "75%", height: "auto", left: "10%", }} />
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
