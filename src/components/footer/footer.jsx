import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
    <footer>
        <div className="in-footer">
            <h5>Copyright © 2022 Lucas Garcia - <a href="https://github.com/lucasdevsoft" target='_blank' ><FontAwesomeIcon icon={faGithub} /></a></h5>
        </div>
    </footer>
);

export default Footer;