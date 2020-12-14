import classNamesBind from 'classnames/bind'
import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { RootState, ThemeStates } from '../../types'

const styles = require('./css/ProjectItem.scss')

var cx = classNamesBind.bind(styles)

interface ProjectItemComponentProps {
    name: string
    id: number
    theme: ThemeStates   
}

const mapStateToProps = (state : RootState) => ({
    theme:  state.theme.theme
});


const ProjectItemComponent = ({name, id, theme} : ProjectItemComponentProps) => {
    const history = useHistory()
    const handleClick = () => history.push(`/${id}`)

    return (
        <div className = {cx("item",{[`item-${theme}-theme`]:true})} onClick={handleClick}>
        <div className="projectName">{name}</div>
    </div>
    )
}

export const ProjectItem = connect(mapStateToProps)(ProjectItemComponent)