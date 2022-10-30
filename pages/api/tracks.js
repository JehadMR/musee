import {getUsersTracks} from '../../lib/spotify';
import {getSession} from 'next-auth/react';

const handler = async (req, res) => {
  const {
    token: {accessToken},
  } = await getSession({req});
  const response = await getUsersTracks(accessToken);
  const {items} = await response.data;
  return res.status(200).json({items});
};

export default handler;