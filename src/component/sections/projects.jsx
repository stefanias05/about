import React from 'react'
import MediaCard from './../card';


export const Projects = () => {

  return (
    <div className='projects' id='Projects'>
      <h1>Projects</h1>
      <div className='creation'>
        <div>
        <MediaCard
                pathimg= {require('../../assets/Project_Manager.png')}
                title="Project Manager"
                content="A platform developed in Django using JavaScript, SQLite (DB) and Bootstrap as the front-end framework. Web App helps manage and coordonate projects.
                Now i'm working on notification system for projects with upcoming deadlines."
                pathgit={"https://github.com/stefanias05/project_manager/tree/master"}
              />
        </div>
        <div>
        <MediaCard
                pathimg={require('../../assets/pollapp.png')}
                title="Polls"
                content="General knowledge poll developed in Django using the default database, with Bootstrap on the frontend. A user can add questions and answers with access to the Django admin interface through a superuser account"
                pathgit ={"https://github.com/stefanias05/polls_app"}/>
        </div>

      </div>
    </div>
  )
}


