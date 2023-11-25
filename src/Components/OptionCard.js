import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function OptionCard({ routeLink, title, description }) {
    const cardAnimation = useSpring({
        from: { opacity: 0, top: 50 },
        to: { opacity: 1, top: 0 },
        config: {
            duration: 200, // duration for the whole animation form start to end
        },
    });


    return (
        <animated.div style={cardAnimation}>
            <Link className="option-card" to={routeLink}>
                <div className="option-card-container">
                    <h1>{title ? title : "Título"}</h1>
                    <p>{description ? description : "Descrição do card"}</p>
                </div>
            </Link>
        </animated.div>
    )
}

export default OptionCard;