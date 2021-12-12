import "./styles.scss";
import { Button } from "react-bootstrap";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

export const Pagination = ({ prevPage, nextPage, Data }) => {

  return (
    <div className="pagination">
      <Button id="button" onClick={prevPage} disabled={Data && !Data.prev_page} href="#home">
        <HiArrowLeft />
      </Button>
      page {Data ? Data.page : 1}
      <Button id="button" onClick={nextPage} disabled={Data && !Data.next_page} href="#home">
        <HiArrowRight />
      </Button>
    </div>
  );
};
