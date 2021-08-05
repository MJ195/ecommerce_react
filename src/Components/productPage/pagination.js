import React from 'react';
import { Grid, Button } from '@material-ui/core';

const Pagination = (props) => {
    const pageNumbers = [];
    for (let i = 1; i <= props.totalPage; i++) {
        pageNumbers.push(i);
    }

    return (

        // <Grid container>
        <nav>
            <ul className="pagination">                
            {props.currentPage > 1 && <Button className="page-link" onClick={() => props.paginate(props.currentPage - 1)}>Previous</Button>}
                {pageNumbers.map(item => (
                    <li className="page-item">
                        <a href="#" className="page-link" onClick={() => props.paginate(item)}>{item} </a>
                    </li>
                ))
            }
            <Button className="page-link" onClick={() => props.paginate(props.currentPage + 1)}>Next</Button>
            </ul>

        </nav>

        // </Grid>

    )
}
export default Pagination;