import {getPlayer} from '../../lib/spotify';
import {getSession} from 'next-auth/react';

const handler = async (req, res) => {
  const {
    token: {accessToken},
  } = await getSession({req});
  const response = await getPlayer(accessToken);
  const item = await response.data;
  return res.status(200).json(item);
};

export default handler;