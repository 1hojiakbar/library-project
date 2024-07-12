import { useContext } from "react";
import Modal from "./Modal";
import plusIcon from "../../assets/icons/plus.svg";
import BookContext from "../../context/BookContext";
import ModalContext from "../../context/ModalContext";
import Button from "../../components/Generic/Button/Button";
import GenericCard from "../../components/Generic/Card/Card";
import { BookCardWrapper, Container, HomeTitleWrapper } from "./style";
import CustomSnackbar from "./Snackbar";

const Home = () => {
  const { data } = useContext(BookContext);
  const { openModal } = useContext(ModalContext);
  return (
    <Container>
      <HomeTitleWrapper>
        <div>
          <Container.Title>
            You've got <strong className="title">7 book</strong>
          </Container.Title>
          <Container.SubTitle>Your books today</Container.SubTitle>
        </div>
        <Button
          type="primary"
          xgap="15px"
          w="181px"
          h="40px"
          onClick={() => openModal(true)}
        >
          <img src={plusIcon} />
          <p>Create a book</p>
        </Button>
      </HomeTitleWrapper>
      <BookCardWrapper>
        {data.map(({ id, title, data, date, status }) => {
          return (
            <GenericCard
              key={id}
              id={id}
              title={title}
              data={data}
              date={date}
              status={status}
            />
          );
        })}
      </BookCardWrapper>
      <CustomSnackbar />
      <Modal />
    </Container>
  );
};

export default Home;
