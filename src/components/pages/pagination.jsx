import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretRight, faCaretLeft} from '@fortawesome/free-solid-svg-icons'


export const Pagination = (props) => {
    const { onLeftClick, onRightClick, page, totalPages } = props;


    return (
        <div className="pagination">
            <button className='btn-pag' onClick={onLeftClick}><FontAwesomeIcon icon={faCaretLeft} className="highlight" /></button>
            <div className='pags'>
                {page} - {totalPages}
            </div>
            <button className='btn-pag' onClick={onRightClick}><FontAwesomeIcon icon={faCaretRight} className="highlight" /></button>
        </div>
    )
};