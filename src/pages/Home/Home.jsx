import { useState } from "react";
import bookData from "../../utils/books";
import plusIcon from "../../assets/icons/plus.svg";
import Button from "../../components/Generic/Button/Button";
import GenericCard from "../../components/Generic/Card/Card";
import { BookCardWrapper, Container, HomeTitleWrapper } from "./style";

const Home = () => {
  return (
    <Container>
      <HomeTitleWrapper>
        <div>
          <Container.Title>
            You've got <strong className="title">7 book </strong>
          </Container.Title>
          <Container.SubTitle>Your books today</Container.SubTitle>
        </div>
        <Button type="primary" xgap="15px" w="181px" h="40px">
          <img src={plusIcon} />
          <p>Create a book</p>
        </Button>
      </HomeTitleWrapper>
      <BookCardWrapper>
        {bookData.map(({ id, title, data, date, status }) => {
          return (
            <GenericCard
              key={id}
              title={title}
              data={data}
              date={date}
              status={status}
            />
          );
        })}
      </BookCardWrapper>
    </Container>
  );
};

export default Home;
