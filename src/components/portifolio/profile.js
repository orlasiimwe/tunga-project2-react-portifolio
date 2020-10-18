import React from 'react'

function Profile() {
    return (
        <div>
            <h1 className='title'>About me{''}:</h1>
                <ul class="list-group mb-3">
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div className='justify-center'>
                        <img src ='https://i.pinimg.com/564x/b0/46/9d/b0469d2aa1af43b1d48f8adb4f712f43.jpg'
                        style={{
                            verticalAlign: "middle",
                            width: 100 +"px",
                            height: 100 + "px",
                            borderRadius: "50%",
                            border:"black solid",
                            borderWidth:'thin'
                        }} />
                            <h6 class="my-0">Name</h6>
                            <small class="text-muted">Asiimwe Orla</small>
                        </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">District</h6>
                            <small class="text-muted">Kampala,Uganda</small>
                        </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">School:</h6>
                            <small class="text-muted">Makerere University , year2</small>
                        </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">Email:</h6>
                            <small class="text-muted">orlanerys1@gmail.com</small>
                        </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">Interest:</h6>
                                <small class="text-muted"
                                ><ol listStyle='square'>
                                        <li>Coding</li>
                                        <li>Problem Solving</li>
                                        <li>Hiking</li>
                                        <li>Basketball</li>
                                    
                                    </ol>
                                </small>
                            </div>
                    </li>
                    
                </ul>          
        </div>
    )
}

export default Profile
