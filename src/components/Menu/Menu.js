import React, { Component } from 'react'
import Octicon, { Pencil } from '@primer/octicons-react'
export default class Menu extends Component {
    render() {
        return (
            <nav>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container">
                        <a class="navbar-brand" href="https://here.com">ReactBlogger</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="https://here.com">Articles <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="https://here.com">Tags <span class="sr-only">(current)</span></a>
                                </li>
                            </ul>
                            <span>
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item ">
                                        <a class="nav-link" href="https://here.com"><Octicon icon={Pencil} /> Compose  <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="https://here.com">Settings </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="https://here.com">Logout</a>
                                    </li>
                                </ul>
                            </span>
                        </div>
                    </div>
                </nav>
            </nav>

        );
    }
}