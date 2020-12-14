import React from 'react'
import './css/ProjectList.scss'
import { connect } from 'react-redux';
import { Project, RootState } from '../../types';
import { ProjectItem } from '../ProjectItem/ProjectItem';

const mapStateToProps = (state : RootState) => ({
    projects: state.tasks.projects
  });
  
  interface ProjectListProps {
    projects: Array<Project>
  }
  

const ProjectListComponent = ({ projects } : ProjectListProps) => {
    return (
        <div id="taskList">
        <h1 id="taskListText">СПИСОК ПРОЕКТОВ:<p/>(кликните чтобы перейти)</h1>
          {projects.map((project) => <ProjectItem name={project.name} id={project.id} key={project.id} />)}
      </div>
    )
}

export const ProjectList = connect(mapStateToProps)(ProjectListComponent)