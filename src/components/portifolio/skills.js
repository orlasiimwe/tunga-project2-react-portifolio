import React from 'react'

const Skills =() =>{
    return (
        <div>
            <h1 className='title'>what i can do{''}: </h1>
          
            <div class="table-responsive">
                <table class="table table-bordered">
                <thead>
                    <tr>
                    <th>SkillSet</th>
                    <th>Level</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td> <a className='lang' href='https://www.javascript.com/'>Vanilla Javascript</a></td>
                    <td>Expert</td>
                    </tr>
                    <tr>
                    <td><a className='lang' href='https://reactjs.org/'>React JS</a></td>
                    <td>Expert</td>
                    </tr>
                    <tr>
                    <td><a className='lang' href='https://reactnative.dev/'>React JS</a></td>
                    <td>Intermediate</td>
                    </tr>
                    <tr>
                    <td><a className='lang' href='https://flask.palletsprojects.com/en/1.1.x/'>Flask</a></td>
                    <td>Beginner</td>
                    </tr>
                    <tr>
                    <td><a className='lang' href='https://nodejs.org/en/'>Node JS</a></td>
                    <td>Intermediate</td>
                    </tr>
                    <tr>
                    <td><a className='lang' href='https://laravel.com/'>Laravel</a></td>
                    <td>Intermediate</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
    )
}

export default Skills
