import React, { Dispatch, RefObject } from 'react'
import classNames from 'classnames/bind'
import { connect } from "react-redux"
import { RootState, ThemeStates } from '../../types';
import { TasksActionTypes } from '../../actions/types';
import { handleProjectAddition } from '../../actions/tasks';

const styles = require('./css/ProjectAddForm.scss')

var cx = classNames.bind(styles)

const mapStateToProps = (state : RootState) => ({
    theme:  state.theme.theme
});

const mapDispatchToProps = (dispatch : Dispatch<TasksActionTypes>) =>({
    dispatchOnProjectAddition : (name : string) => dispatch(handleProjectAddition(name))
})

interface ProjectAddFormProps {
    theme: ThemeStates
    dispatchOnProjectAddition: (name: string) => void
}

const ProjectAddFormComponent = ({ theme, dispatchOnProjectAddition } : ProjectAddFormProps & React.HTMLAttributes<HTMLDivElement>) => {
    const nameInput: RefObject<HTMLInputElement> = React.createRef()

    const onClickForSubmit = () => {
        if (nameInput.current) {
            dispatchOnProjectAddition(nameInput.current.value)
        }
    }

    return (
        <div id="projectAddForm">
        <h1>ADD PROJECTS:</h1>
        <div id="addFormInterface">
            <input id="name" placeholder="task heading" ref={nameInput} />
            <br/>
            <button className={cx("submit",{[`submit-${theme}-theme`]:true})} onClick={onClickForSubmit}>Add!</button>
        </div>
        </div>
    )
}

export const ProjectAddForm = connect(mapStateToProps, mapDispatchToProps)(ProjectAddFormComponent)