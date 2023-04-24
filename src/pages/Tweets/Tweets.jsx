import { useEffect, useState } from "react";
import UserCard from "../../Components/Card/Card";
import { fetchUsers } from "../../Components/fetchAPI";
import { Link } from "react-router-dom";
import { Button } from "./Tweets.styled";

const Tweets = () => {
  const PER_PAGE = 3;
  const [_, setIsLoading] = useState(false);
  const [shownBtn, setShownBtn] = useState(false);
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [type] = useState("");
  useEffect(() => {
    const getUsers = async ({ page, per_page, value }) => {
      try {
        setIsLoading(true);
        return await fetchUsers(page, per_page, value).then((data) => {
          data.length >= PER_PAGE ? setShownBtn(true) : setShownBtn(false);
          setUsers([...users, ...data]);
        });
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    getUsers({ page: pageNumber, per_page: PER_PAGE, value: type });
  }, [pageNumber, type]);

  const handleLoadMore = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <>
      <div>
        <Link to="/">
          <Button>Go Back</Button>
        </Link>
        <ul>
          {users.length > 0 &&
            users.map(({ id, user, avatar, followers, tweets, followed }) => (
              <UserCard
                key={id}
                id={id}
                tweets={tweets}
                followers={followers}
                user={user}
                avatar={avatar}
                followed={followed}
              />
            ))}
          {shownBtn && <Button onClick={handleLoadMore}>Load more</Button>}
        </ul>
      </div>
    </>
  );
};
export default Tweets;
