// our-domain.com/news/something-important
import { useRouter } from 'next/router';

import { Fragment } from 'react';

const DetailPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  // send a request to the backend API
  // to fecth the news item with newsId
  return (
    <Fragment>
      <h1>This is Detail Page.</h1>
    </Fragment>
  );
};

export default DetailPage;
