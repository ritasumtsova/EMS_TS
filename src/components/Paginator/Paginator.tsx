import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  Nav,
  PaginationItem,
  PaginationLink,
  Pagination
} from 'reactstrap';
import { getDepartmentsByLimit } from '../../store/actionCreators/departmentsActionCreators';
import { departmentsSelector } from '../../store/selectors/departments';

const Paginator: React.FC= () => {
  const pagesCount = [];
  const { departmentsInfo } = useSelector(departmentsSelector);
  const { departmentsPerPage, totalDepartmentsCount, currentPage } = departmentsInfo;
  const totalPages = Math.ceil(totalDepartmentsCount / departmentsPerPage);
  const dispatch = useDispatch();
            
  for (let i = 1; i <= totalPages; i++) {
    pagesCount.push(i);
  };

  const changePage = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const data = {
      offset: (departmentsPerPage * +(e.target as HTMLElement).innerHTML) - departmentsPerPage,
      limit: departmentsPerPage,
      currentPage: +(e.target as HTMLElement).innerHTML
    };

    dispatch(getDepartmentsByLimit(data));
  };
            
  return (
    <Nav>
      <Pagination>
        {pagesCount.map((number) => (
          <PaginationItem key={number}>
            <PaginationLink onClick={changePage} href='#'>
              {number}
            </PaginationLink>
        </PaginationItem>
        ))}
      </Pagination>
    </Nav>
  );
};
            
export default Paginator;
