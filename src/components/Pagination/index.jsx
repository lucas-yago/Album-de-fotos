import "./styles.scss";
import { Button } from "react-bootstrap";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

export const Pagination = () => {
  return (
    <div className="pagination">

      <Button className="button" variant="outline-secondary"><HiArrowLeft /></Button>
      page 1
      <Button className="button" variant="outline-secondary"><HiArrowRight /></Button>

    </div>
  );
};
