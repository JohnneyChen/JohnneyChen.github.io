import React from 'react'

const ProjectDisplay = ({ title, description, codeLink, appLink, imgLink, aos }) => {
    return (
        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12" data-aos={aos}>
            <div class="features-item">
                <div class="features-icon">
                    <img src={imgLink} alt="" />
                </div>
                <div class="features-content">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <a href={appLink} class="text-button-icon">
                        Visit app <i class="fa fa-arrow-right"></i>
                    </a>
                    <div>
                        <a href={codeLink} class="text-button-icon">
                            View code <i class="fa fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDisplay