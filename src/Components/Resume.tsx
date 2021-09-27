import React, { Component } from 'react'

interface IResumeProps {
  data: any
}

class Resume extends Component<IResumeProps> {
  
  render() {
    const { data } = this.props

    if (!data) {
      return null
    } else {
      var skillmessage = data.skillmessage
      var education = data.education.map((education: any) => {
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree}</p>
        <p>{education.description}</p></div>
      })

      var work = data.work.map((work: any) => {
        return <div key={work.company}>
            {!work.url && <h3>{work.company}</h3>}
            {work.url && <h3><a href={work.url} target="_blank">{work.company}</a></h3>}
            <p className="title">{work.title} <span>&bull;</span> <em className="date">{work.years}</em></p>
            <p className="info">{work.info}</p>
            <p>{work.description}</p>
            {work.stack && <p><b>Tech stack:</b> {work.stack}</p> }
            <br/>
        </div>
      })

      var skills = data.skills.map((skills: any) => {
        // var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}>
                <em>{skills.name}</em>
                <p>{skills.description}</p>
          </li>
      })

      var expertise = data.expertise.map((expertise: any) => {
        // var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={expertise.name}>
          <em>{expertise.name}</em>
          <p>{expertise.description}</p>
        </li>
      })
    }

    return (
      <section id="resume">

        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">
            {/*<p>{skillmessage}</p>*/}

            <div className="bars">
              <ul className="skills">
                {skills}
              </ul>
            </div>
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Expertise</span></h1>
          </div>

          <div className="nine columns main-col">
            {/*<p>{skillmessage}</p>*/}

            <div className="bars">
              <ul className="skills">
                {expertise}
              </ul>
            </div>
          </div>
        </div>

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Resume
