import React from 'react'
import { Link } from 'react-router-dom'

export default function NavHead() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/home" class="navbar-brand">Online Course</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/home">Home </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
