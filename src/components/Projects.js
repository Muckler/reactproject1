import React, { Component } from 'react';
import ProjectItem from './ProjectItem'


class Projects extends Component {
  render() {

    let projectItems;

    if(this.props.projects){
      projectItems = this.props.projects.map( project => {
       
        //console.log(project)

          return (
            <ProjectItem key={project.title} project={project} />
          )
      })
    }

    return (
      <div >

      {projectItems} <br />
      This is a digital Craft class <br />
       
      </div>
    );
  }
}

export default Projects