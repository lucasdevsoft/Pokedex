import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleLeft, faCircleRight} from '@fortawesome/free-solid-svg-icons'


export const Pagination = (props) => {
    const { onLeftClick, onRightClick, page, totalPages } = props;


    return (
        <div className="pagination">
            <button className='btn-pag' onClick={onLeftClick}><FontAwesomeIcon icon={faCircleLeft} className="highlight" /></button>
            <div className='pags'>
                {page} - {totalPages}
            </div>
            <button className='btn-pag' onClick={onRightClick}><FontAwesomeIcon icon={faCircleRight} className="highlight" /></button>
        </div>
    )
};
