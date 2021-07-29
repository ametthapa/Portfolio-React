import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Services = () => {
    return(
        <div className="services">
            <div className="servies-category ">
                <FontAwesomeIcon icon="cubes" className="icon" />
                <h3>3D Modeling</h3>
                <p>A wonderful serenity has taken to the
                    possession of my entire soul network
                    infrastructure, including consolidation of
                    established network designed and</p>
            </div>
            <div className="servies-category">
                <FontAwesomeIcon icon="layer-group" className="icon" />
                <h3>UI/UX Design</h3>
                <p>A wonderful serenity has taken to the
                    possession of my entire soul network
                    infrastructure, including consolidation of
                    established network designed and</p>
            </div>
            <div className="servies-category">
                <FontAwesomeIcon icon="sitemap" className="icon" />
                <h3>Architectural Design</h3>
                <p>A wonderful serenity has taken to the
                    possession of my entire soul network
                    infrastructure, including consolidation of
                    established network designed and</p>
            </div>

        </div>
    )
}

export default Services