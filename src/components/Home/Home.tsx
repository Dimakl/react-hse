import React from 'react'
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom'
import { Page } from '../Page/Page'
import { ProjectPage } from '../ProjectPage/ProjectPage'


const HomeComponent = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ProjectPage}/>
                <Route exact path="/:projectId" component={Page}/>

                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    )
}

export const Home = HomeComponent