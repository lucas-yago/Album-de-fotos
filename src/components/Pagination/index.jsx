import "./styles.scss";
import { Button } from "react-bootstrap";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

export const Pagination = ({prevPage, nextPage, currentPage}) => {
  return (
    <div className="pagination">

      <Button className="button"  onClick={prevPage}  href='#/'><HiArrowLeft /></Button>
      page {currentPage}
      <Button className="button"  onClick={nextPage} href='#/'><HiArrowRight /></Button>

    </div>
  );
};
