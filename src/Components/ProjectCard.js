import React from "react";

function ProjectCard(props) {
    return(
        <div className="card m-4 p-0 text-white card-border" style={{width: '14rem', height: '27.5rem'} }>
            <img src={(props.image)} className="card-img-top" alt={props.title}></img>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text-area">{props.description}</p>
                <div className="d-flex justify-content-around">
                    <a href={props.github} className="mt-auto btn btn-primary">Github</a>
                    <a href={props.link} className="mt-auto btn btn-primary">App</a>
                </div>
                
            </div>
        </div>
    )
}

export default ProjectCard;